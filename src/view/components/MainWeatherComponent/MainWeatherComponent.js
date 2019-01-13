import React from "react";
import './mainWeatherComponent.css'

import CityComponent from './CityComponent/CityComponent';
import SevenDaysWeather from './SevenDaysWeather/SevenDaysWeather';


const MainWeatherComponent = ({sevenDaysTemp})=>{
    return (
        <div className="home-right">
            <CityComponent/>
            <SevenDaysWeather sevenDaysTemp={sevenDaysTemp}/>
        </div>
    )
}

export default MainWeatherComponent;