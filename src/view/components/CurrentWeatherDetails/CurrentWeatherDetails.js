import React from "react";
import './currentWeatherDetails.css';

const CurrentWeatherDetails = ({city})=>{
    const { humidity, dewPoint, uvIndex, visibility } = city;
    return (
        <div className="home-down-left">
        <div><p className="cwd-details">{humidity * 100}%</p><p className="cwd-details-text">Humidity</p></div>
        <div><p className="cwd-details">{dewPoint}<span>&deg;</span></p><p className="cwd-details-text">Dev Pt.</p></div>
        <div><p className="cwd-details">{uvIndex}/10</p><p className="cwd-details-text">UV Index</p></div>
        <div><p className="cwd-details">{visibility} km</p><p className="cwd-details-text">Visibility</p></div>
        </div>
    )
}

export default CurrentWeatherDetails;