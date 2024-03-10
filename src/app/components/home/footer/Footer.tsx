'use client'

import { memo } from 'react'
import styles from './footer.module.scss'
import FB from '../../../../../public/fb.svg'
import Instagram from '../../../../../public/insta.svg'
import Twitter from '../../../../../public/twitter.svg'
import Linkedin from '../../../../../public/Linkedin.svg'

const Footer = () => {

    return (<div className={styles.container}>
        <div className={styles.social}>
            <FB />
            <Instagram />
            <Twitter />
            <Linkedin />
        </div>
        <p>Copyright ©2020 All rights reserved</p>
    </div>)
}

export default memo(Footer)