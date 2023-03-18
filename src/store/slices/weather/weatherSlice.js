import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./weatherAPI";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.fulfilled, (state, {payload}) => {
            return payload
        })
    },
})

// export const {} = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;

export const selectWeather = state => state.weather;