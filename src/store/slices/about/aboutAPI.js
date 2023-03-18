import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const fetchAbout = createAsyncThunk(
    'about/fetchAbout',    
    async function ( city ) {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d38e83322f83dfb93da2e0ec32244db&units=standard`)


        const initialData = [res.data]
        initialData[0].units = 'standard'
        
        const data = initialData.map((elem) => {
            return {
                min_temp: elem.main.temp_min,
                max_temp: elem.main.temp_max,
                feels_like: elem.main.feels_like,
                humidity: elem.main.humidity,
                pressure: elem.main.pressure,
                wind: elem.wind.speed,
                units: elem.units ,
                tempUnit: elem.units === 'standard' ? '°C' : '°F' ,
                windUnit: elem.units === 'standard' ? 'm/s' : 'km/h',
            }
        })

        return data
    }
)