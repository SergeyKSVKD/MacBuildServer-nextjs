'use client'

import { ChangeEvent, memo, useEffect, useState } from "react";
import styles from "./login.module.scss";
import Button from "@/app/components/button/Button";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { setCookie } from 'cookies-next';
import { authenticate, setErrorMessage } from "@/app/store/authSlice";
import { setPreviousURL } from "@/app/store/appSlice";

const Login = () => {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const isAuth = useSelector((state: RootState) => state.auth.isAuth)
    const previousURL = useSelector((state: RootState) => state.app.previousURL)
    const error = useSelector((state: RootState) => state.auth.error)

    const [authState, setAuthState] = useState({
        email: '',
        password: '',
    })

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAuthState({ ...authState, email: e.target.value });
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAuthState({ ...authState, password: e.target.value });
    }

    const handleSubmit = async (user: { email: string, password: string }) => {
        if (user.password.length !== 0 && user.email.length !== 0) {
            const res = await fetch(`http://localhost:5002/auth/`, {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-type": "application/json",
                },
            })
            const data = await res.json()

            if (res.status === 200 && data.message === "Пользователь авторизован") {
                setCookie('token', data.token)
                dispatch(authenticate({ email: user.email, token: data.token }))
            }

            else {
                dispatch(setErrorMessage(data.message))
                // throw new Error(data)
            }
        }
        else {
            return console.log('error');
        }
    }

    const handleRegistration = (user: { email: string, password: string }) => {
        if (user.password.length !== 0 && user.email.length !== 0) {
            // логика добавления нового пользователя в бд
            alert(`Пользователь ${authState.email} успешно зарегистрирован!`)
        }
        else {
            alert(`Заполните форму регистрации!`)
        }
    }

    useEffect(() => {
        if (isAuth) {
            if (previousURL) {
                router.push(previousURL)
                setTimeout(() => {
                    dispatch(setPreviousURL(''))
                }, 0)
            }
            else {
                router.push('/');
            }
        }
    }, [isAuth])

    return (<div className={styles.container}>
        <form action="" className={styles.form}>
            <div className={styles.top}>
                <Link href={'/'}>
                    <FaHome size={'32px'} color="white" />
                </Link>
                <p style={{ fontSize: '24px', fontWeight: '700' }}>Вход</p>
            </div>
            <input
                type="email"
                name="email"
                required autoComplete="off"
                className={styles.input}
                placeholder="Почта"
                value={authState.email}
                onChange={(e) => handleEmailChange(e)}
            />
            <input
                type="password"
                name="password"
                required autoComplete="off"
                className={styles.input}
                placeholder="Пароль"
                value={authState.password}
                onChange={(e) => handlePasswordChange(e)}
            />
            {error ? <p className={styles.error}>{error}</p> : <p></p>}
            <Button text="Войти" type="submit"
                onClick={() => handleSubmit({ email: authState.email, password: authState.password })}
            />
            <p style={{ fontSize: '24px', fontWeight: '700' }}>или</p>
            <Button text="Зарегистрироваться" type="button" textColor="secondary" color="none" size="24px"
                onClick={() => {
                    handleRegistration({ email: authState.email, password: authState.password })
                    setTimeout(() => router.push('/'), 100)
                }
                }
            />
        </form>
    </div>)
}

export default memo(Login)