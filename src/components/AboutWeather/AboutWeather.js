import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUnits } from "../../store/slices/units/unitsSlice";
import { selectAbout } from '../../store/slices/about/aboutSlice'
import { selectCity } from '../../store/slices/city/citySlice'
import { fetchAbout } from "../../store/slices/about/aboutAPI";
import AboutItem from "../AboutItem/AboutItem";

import "./AboutWeather.css";


function AboutWeather() {  
  const city = useSelector(selectCity)
  const about = useSelector(selectAbout)
  const units = useSelector(selectUnits);
  const dispatch = useDispatch()

  // useEffect(() => {
  //   if (!about.length) {
  //     dispatch(fetchAbout( ))
  //   }
  // }, [city, units])


  return (
    <div className="section section_descriptions">
      {
        about && (
          about.map(el => <AboutItem key={el.id} {...el} />)
        )
      }

    </div>
  );
}

export default AboutWeather;
