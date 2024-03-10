import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type LoadingProp = 'idle' | 'loading'
type ErrorProp = string
type UserType = {
    email: string,
    password?: string
}

export interface AuthI {
    isAuth: boolean,
    user: UserType,
    loading: LoadingProp,
    error: ErrorProp,
    token: string,
}

const initialState = {
    isAuth: false,
    user: { email: '' },
    loading: 'idle',
    error: '',
    token: '',
}

export const getAuthToken = createAsyncThunk(
    '@auth/get-token',

    async (_, { dispatch }) => {

        const body: any = {}
        const res = await fetch(``, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json",
            },
        })
        const data = await res.json()

        if (data !== undefined) {
            return data
        }
        else {
            throw new Error(`Неверный запрос! Ошибка сервера`)
        }
    }

)

const authSlice = createSlice({
    name: '@auth',
    initialState,
    reducers: {
        authenticate: (state, action) => {
            state.isAuth = true
            state.user = { email: action.payload.email }
            state.loading = 'idle'
            state.error = ''
            state.token = action.payload.token
        },
        restoreAuthState: (state, action) => {
            state.isAuth = true
            state.user = { email: action.payload.email }
            state.loading = 'idle'
            state.error = ''
            state.token = action.payload.token
        },
        removeAuthState: (state) => {
            state.isAuth = false
            state.user = { email: '' },
            state.loading = 'idle'
            state.error = ''
            state.token = ''
        },
        setErrorMessage: (state, action) => {
            state.isAuth = false
            state.user = { email: '' },
            state.loading = 'idle'
            state.error = action.payload
            state.token = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAuthToken.pending, (state) => {
                state.loading = 'loading'
                state.error = ''
            })
            .addCase(getAuthToken.fulfilled, (state, action) => { })
            .addCase(getAuthToken.rejected, (state, action) => { })
    }
})

export const { authenticate, removeAuthState, restoreAuthState, setErrorMessage } = authSlice.actions
export const authReducer = authSlice.reducer