'use client'

import { memo } from 'react'
import styles from './works.module.scss'
import Image from 'next/image'
import Image1 from '../../../../../public/Rectangle 30.jpg'
import Image2 from '../../../../../public/Rectangle 32.jpg'
import Image3 from '../../../../../public/Rectangle 34.jpg'

const Works = () => {

    return (<div className={styles.container}>
        <div className={styles.top}>
            <p className={styles.title}>Featured works</p>
        </div>
        <div className={styles.work}>
            <div>
                <Image src={Image1} alt='work' />
            </div>
            <div className={styles.text_block}>
                <p className={styles.title}>Designing Dashboards</p>
                <div className={styles.tags}>
                    <div className={styles.tag}>2020</div>
                    <p className={styles.sub}>Dashboard</p>
                </div>
                <p className={styles.text}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
        <div className={styles.work}>
            <div>
                <Image src={Image2} alt='work' />
            </div>
            <div className={styles.text_block}>
                <p className={styles.title}>Vibrant Portraits of 2020</p>
                <div className={styles.tags}>
                    <div className={styles.tag}>2018</div>
                    <p className={styles.sub}>Illustration</p>
                </div>
                <p className={styles.text}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
        <div className={styles.work}>
            <div>
                <Image src={Image3} alt='work' />
            </div>
            <div className={styles.text_block}>
                <p className={styles.title}>36 Days of Malayalam type</p>
                <div className={styles.tags}>
                    <div className={styles.tag}>2020</div>
                    <p className={styles.sub}>Typography</p>
                </div>
                <p className={styles.text}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
    </div>)
}

export default memo(Works)