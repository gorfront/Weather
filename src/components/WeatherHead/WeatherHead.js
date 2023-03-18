import React from "react";
import { useSelector } from "react-redux";
import { selectUnits } from '../../store/slices/units/unitsSlice'

import "./WeatherHead.css";

function WeatherHead({ name, country, icon, description, temp }) {

    const units = useSelector(selectUnits)

  return (
    <>
      <div className="icon">
        <h3>
          {name} / {country}
        </h3>

        <img src={icon} alt="weatherIcon" />

        <h3>{description}</h3>
      </div>

      <div className="temperature">
        <h1>
          {units === "standard" ? +temp.toFixed() - 272 + "°C" : 32 + +temp.toFixed() - 272 + "°F"}
        </h1>
      </div>
    </>
  );
}

export default WeatherHead;
