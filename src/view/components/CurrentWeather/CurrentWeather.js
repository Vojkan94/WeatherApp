import React from "react";
import './currentWeather.css';
import sun from '../../assets/icons/sun.svg';
// import Chart from '../chart';

const CurrentWeather = () =>{
    return (
        <div className="home-top-left">
                    <div className="cw-wrapper clearFix"> 
                        <div className="current-temperature">
                            <p className="p-temperature">30 <span>&deg;</span></p>
                            <p className="p-temperature-text">Sunny</p>
                        </div>
                        <div className="current-icone">
                            <img src={sun}/>
                        </div>
                    </div>
                    <div className="cw-update">
                    <img width="10%" src="https://cdn.iconscout.com/icon/free/png-256/refresh-470-474986.png"/>
                     <p>Updated 4 mins ago.</p>
                    </div>
               

        </div>
    )
}

export default CurrentWeather;