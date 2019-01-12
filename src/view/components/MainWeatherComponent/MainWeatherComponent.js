import React from "react";
import './mainWeatherComponent.css'

import CityComponent from './CityComponent/CityComponent';
import SevenDaysWeather from './SevenDaysWeather/SevenDaysWeather';


const MainWeatherComponent = ()=>{
    return (
        <div className="home-right">
            <CityComponent/>
            <SevenDaysWeather/>
        </div>
    )
}

export default MainWeatherComponent;