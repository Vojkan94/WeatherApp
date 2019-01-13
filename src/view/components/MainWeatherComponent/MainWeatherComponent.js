import React from "react";
import './mainWeatherComponent.css'

import CityComponent from './CityComponent/CityComponent';
import SevenDaysWeather from './SevenDaysWeather/SevenDaysWeather';


const MainWeatherComponent = ({sevenDaysTemp, changeCity})=>{
    console.log(changeCity)
    return (
        <div className="home-right">
            <CityComponent changeCity={changeCity}/>
            <SevenDaysWeather sevenDaysTemp={sevenDaysTemp}/>
        </div>
    )
}

export default MainWeatherComponent;