import React from "react";
import './mainWeatherComponent.css'

import CityComponent from './CityComponent/CityComponent';
import SevenDaysWeather from './SevenDaysWeather/SevenDaysWeather';


const MainWeatherComponent = ({sevenDaysTemp, changeCity, cityName})=>{
    const cssClass = cityName === "NOVI SAD" ? "home-right home-right-BG" : "home-right home-right-NS"
    return (
        <div className={cssClass}>
            <CityComponent cityName={cityName} changeCity={changeCity}/>
            <SevenDaysWeather cityName={cityName} sevenDaysTemp={sevenDaysTemp}/>
        </div>
    )
}

export default MainWeatherComponent;