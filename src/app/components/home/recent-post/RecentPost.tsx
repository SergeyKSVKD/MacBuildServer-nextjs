'use client'

import { memo } from 'react'
import styles from './resentPost.module.scss'
import Button from '../../button/Button'

const RecentPost = () => {

    return (<div className={styles.recent_post}>
        <div className={styles.top}>
            <p className={styles.title}>Recent posts</p>
            <Button textColor='secondary' color='none' size='16px' weight='400' text='View all' />
        </div>
        <div className={styles.posts}>
            <div className={styles.post}>
                <p className={styles.post_title}>Making a design system from scratch</p>
                <div className={styles.info}>
                    <p>12 Feb 2020</p>
                    <div className={styles.line} />
                    <p>Design, Pattern</p>
                </div>
                <p className={styles.post_text}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className={styles.post}>
                <p className={styles.post_title}>Creating pixel perfect icons in Figma</p>
                <div className={styles.info}>
                    <p>12 Feb 2020</p>
                    <div className={styles.line} />
                    <p>Figma, Icon Design</p>
                </div>
                <p className={styles.post_text}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>

    </div>)
}

export default memo(RecentPost)