import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../../store/slices/weather/weatherAPI'
import { selectWeather } from '../../store/slices/weather/weatherSlice'
import { selectCity } from '../../store/slices/city/citySlice'
import WeatherHead from '../WeatherHead/WeatherHead'

import './weather.css'
import { selectUnits } from '../../store/slices/units/unitsSlice'

function Weather() {

    const dispatch = useDispatch()
    const weather = useSelector(selectWeather)
    const units = useSelector(selectUnits)
    const city = useSelector(selectCity)

    useEffect(() => {
        if (!weather.length) {
            dispatch(fetchWeather(city, units))
        }
    }, [city])

    
  return (
    <div className="section section_temperature">
      {
        weather && (
          weather.map(el => <WeatherHead key={el.name} {...el} />)
        )
      }
    </div>
  )
}

export default Weather