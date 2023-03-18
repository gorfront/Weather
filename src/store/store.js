import { configureStore } from "@reduxjs/toolkit";
import { aboutReducer } from "./slices/about/aboutSlice";
import { cityReducer } from "./slices/city/citySlice";
import { unitsReducer } from "./slices/units/unitsSlice";
import { weatherReducer } from "./slices/weather/weatherSlice";

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        city: cityReducer,
        units: unitsReducer,
        about: aboutReducer,
    }
})

export default store