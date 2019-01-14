import React from "react";
import './mainWeatherComponent.css'

import CityComponent from './CityComponent/CityComponent';
import SevenDaysWeather from './SevenDaysWeather/SevenDaysWeather';


const MainWeatherComponent = ({sevenDaysTemp, changeCity, cityName})=>{
    return (
        <div className="home-right">
            <CityComponent cityName={cityName} changeCity={changeCity}/>
            <SevenDaysWeather sevenDaysTemp={sevenDaysTemp}/>
        </div>
    )
}

export default MainWeatherComponent;