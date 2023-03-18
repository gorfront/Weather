import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
    name: 'city',
    initialState: 'yerevan',
    reducers: {
        setCity: (state, {payload}) => {
            return state = payload
        },
    },
})

export const { setCity } = citySlice.actions

export const cityReducer = citySlice.reducer

export const selectCity = state => state.city