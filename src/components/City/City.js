import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAbout } from "../../store/slices/about/aboutAPI";
import { selectAbout } from "../../store/slices/about/aboutSlice";
import { selectCity, setCity } from "../../store/slices/city/citySlice";
import { selectUnits, setUnit } from "../../store/slices/units/unitsSlice";
import { fetchWeather } from "../../store/slices/weather/weatherAPI";

import "./city.css";

function City() {

  const dispatch = useDispatch()
  const units = useSelector(selectUnits)
  const city = useSelector(selectCity)
  const about = useSelector(selectAbout)


  const enterKeyPress = (e) => {
    if (e.keyCode === 13) {
      dispatch(setCity(e.currentTarget.value))
      e.currentTarget.blur()
    }
  }

  useEffect(() => {
    dispatch(fetchWeather(city, units))
    dispatch(fetchAbout(city, units))
  }, [city, units])

  return (
    <div className="section section_inputs">
        <input type="text" name="city" placeholder="Enter City..." onKeyDown={enterKeyPress} />
  
        <button onClick={() => {
          dispatch(setUnit(units))
        }}>{units === 'standard' ? '°F' : '°C'} </button>

    </div>
  );
}

export default City;