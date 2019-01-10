import React from "react";
import './home.css';

import CurrentWeather from './CurrentWeather/CurrentWeather';

const Home = () =>{

    return (
        <div className="flex-container">
            <div className="wrapper">
                <CurrentWeather/>
                <div className="home-down-left">dsa</div>
                <div className="home-right"></div>
            </div>

        </div>

        
    )
}

export default Home;