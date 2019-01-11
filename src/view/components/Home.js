import React from "react";
import './home.css';

import CurrentWeather from './CurrentWeather/CurrentWeather';
import CurrentWeatherDetails from './CurrentWeatherDetails/CurrentWeatherDetails';

const Home = () =>{

    return (
        <div className="flex-container">
            <div className="wrapper">
                <CurrentWeather/>
                <CurrentWeatherDetails/>
                <div className="home-right"></div>
            </div>
        </div>  
    )
}

export default Home;