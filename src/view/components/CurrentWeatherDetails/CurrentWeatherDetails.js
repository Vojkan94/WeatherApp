import React from "react";
import './currentWeatherDetails.css';

const CurrentWeatherDetails = ()=>{
    return (
        <div className="home-down-left">
        <div><p className="cwd-details">87%</p><p className="cwd-details-text">Humidity</p></div>
        <div><p className="cwd-details">25<span>&deg;</span></p><p className="cwd-details-text">Dev Pt.</p></div>
        <div><p className="cwd-details">0/10</p><p className="cwd-details-text">UV Index</p></div>
        <div><p className="cwd-details">3.0 km</p><p className="cwd-details-text">Visibility</p></div>
        </div>
    )
}

export default CurrentWeatherDetails;