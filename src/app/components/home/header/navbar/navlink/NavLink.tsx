'use client'

import styles from './navlink.module.scss'
import cn from 'classnames'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { HTMLAttributes, memo } from "react"

interface NavLinkProps extends HTMLAttributes<HTMLAnchorElement> {
    link: { url: string, title: string },
    onClick?: () => void,
}

const NavLink: React.FC<NavLinkProps> = ({ link, onClick }) => {
    const pathname = usePathname()

    return (
            <Link
                className={cn(styles.link, { [styles.active]: pathname === link.url })}
                href={link.url} key={link.title}
                onClick={onClick}
            >
                {link.title}
            </Link>
    )
}

export default memo(NavLink)