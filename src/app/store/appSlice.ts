import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    previousURL: ''
}

const appSlice = createSlice({
    name: '@app',
    initialState,
    reducers: {
        setPreviousURL: (state, action) => {
            state.previousURL = action.payload
        },
    }
})

export const { setPreviousURL } = appSlice.actions
export const appReducer = appSlice.reducer