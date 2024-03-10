'use client'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store'
import { useLayoutEffect } from 'react'
import { getCookie } from 'cookies-next'
import { restoreAuthState } from './authSlice'
import { redirect } from 'next/navigation'
import { usePathname } from "next/navigation";
import { setPreviousURL } from './appSlice'


const IsAuth = () => {
  const dispatch = useDispatch<AppDispatch>()
  const token = getCookie('token')

  useLayoutEffect(() => {
    if (token) {
      dispatch(restoreAuthState({ email: 'admin@test.ru', token, }))
    }
    // логика проверки токена в бд, сопоставление с пользователем
  }, [])

  return <></>
}

export default IsAuth

const ProtectedRoute = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth)
  const pathname = usePathname()
  const dispatch = useDispatch<AppDispatch>()

  useLayoutEffect(() => {
    if (!isAuth) {
      dispatch(setPreviousURL(pathname))
      redirect("/login")
    }
  }, [])

  return (
    <>
      {isAuth ? children : <p>Не авторизован</p>}
    </>
  )
}

export { ProtectedRoute }