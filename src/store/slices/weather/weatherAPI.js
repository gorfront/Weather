import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city, units) => {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d38e83322f83dfb93da2e0ec32244db&units=${units}`)

        const initialData = [res.data]
        
        const data = initialData.map(elem => {
            return {
                temp: elem.main.temp,
                min_temp: elem.main.temp_min,
                max_temp: elem.main.temp_max,
                feels_like: elem.main.feels_like,
                pressure: elem.main.pressure,
                humidity: elem.main.humidity,
                name: elem.name,
                country: elem.sys.country,
                visibility: elem.visibility / 1000,
                wind: elem.wind.speed,
                description: elem.weather[0].description,
                icon: `https://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`,

            }
        })
        
        return data
    }
)