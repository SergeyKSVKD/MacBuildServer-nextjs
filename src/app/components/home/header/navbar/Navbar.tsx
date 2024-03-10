'use client'

import styles from './navbar.module.scss'
import { HTMLAttributes, memo } from 'react'
import CSS from 'csstype'
import NavLink from './navlink/NavLink'
import Ellipse from '../../../../../../public/Ellipse.svg'

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
    links: { url: string, title: string }[],
    icon?: React.ReactNode,
    color?: string,
    width?: string,
    style?: CSS.Properties,
    className?: string,
    onClick?: () => void,
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {

    return (
        <div className={styles.container}>
            {links.map((link) => {
                return <NavLink link={link} key={link.title}>{link.title}</NavLink>
            })}
        </div>
    )
}

export default memo(Navbar)