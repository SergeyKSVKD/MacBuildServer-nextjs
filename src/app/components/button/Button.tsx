import { ButtonHTMLAttributes, DetailedHTMLProps, memo } from 'react'
import styles from './button.module.scss'
import CSS from 'csstype'

type textColorButton = 'primary' | 'white' | 'secondary'
type colorButton = 'primary' | 'white' | 'none'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon?: React.ReactNode,
    text?: string,
    size?: string,
    weight?: string,
    color?: colorButton,
    textColor?: textColorButton,
    style?: CSS.Properties,
    onClick?: () => void,
}

const Button: React.FC<ButtonProps> = ({
    icon,
    size = '20px',
    weight = '500',
    text = 'click',
    color = 'primary',
    textColor = 'white',
    onClick,
    style,
}) => {

    return <div className={styles.button}
        style={{
            background: `var(--${color})`,
            ...style,
        }}
        onClick={onClick}
    >
        {icon && icon}
        <span style={{ color: `var(--${textColor})`, fontSize: `${size}`, fontWeight: `${weight}` }}>{text}</span>
    </div>
}

export default memo(Button)