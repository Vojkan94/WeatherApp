import React from "react";
import './home.css';

import CurrentWeather from './CurrentWeather/CurrentWeather';
import CurrentWeatherDetails from './CurrentWeatherDetails/CurrentWeatherDetails';
import MainWeatherComponent from './MainWeatherComponent/MainWeatherComponent';
const Home = () =>{

    return (
        <div className="flex-container">
            <div className="wrapper">
                <CurrentWeather/>
                <CurrentWeatherDetails/>
                <MainWeatherComponent/>
            </div>
        </div>  
    )
}

export default Home;