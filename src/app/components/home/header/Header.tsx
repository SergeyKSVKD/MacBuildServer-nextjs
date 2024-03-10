'use client'

import { memo } from 'react'
import styles from './header.module.scss'
import Navbar from './navbar/Navbar'
import Button from '../../button/Button'
import Image from 'next/image'
import Avatar from '../../../../../public/Ellipse 1.png'
import { FaHome } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/app/store/store'
import { removeAuthState } from '@/app/store/authSlice'
import { deleteCookie } from 'cookies-next'

const Header = () => {
    const dispatch = useDispatch<AppDispatch>()
    const auth: any = useSelector((state: RootState) => state.auth)
    const links = [
        { url: '/works', title: 'Works', },
        { url: '/blog', title: 'Blog', },
        { url: '/contact', title: 'Contact', },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.navbar_wrapper}>
                <div className={styles.login}>
                    {
                        auth.user.email ?
                            <span><CgProfile size={'22px'} />{auth.user.email}</span> :
                            <span></span>
                    }
                    <Link href={'/'}>
                        <FaHome size={'22px'} />
                    </Link>
                    {
                        auth.isAuth ?
                            <Link href={'/login'} scroll={false}
                                onClick={() => {
                                    deleteCookie('token');
                                    dispatch(removeAuthState())
                                }}
                            >
                                <FiLogOut size={'22px'} />
                            </Link>
                            :
                            <Link href={'/login'} scroll={false}>
                                <FiLogIn size={'22px'} />
                            </Link>
                    }
                </div>
                <Navbar links={links} />
            </div>
            <div className={styles.hero}>
                <div className={styles.block}>
                    <p className={styles.title}>Hi, I am John, <br />Creative Technologist</p>
                    <p className={styles.text}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <Button text='Download Resume' style={{ width: '208px', height: '47px' }}>Download Resume</Button>
                </div>
                <div className={styles.avatar}>
                    <Image src={Avatar} alt='avatar' />
                </div>
            </div>
        </div>
    )
}

export default memo(Header)