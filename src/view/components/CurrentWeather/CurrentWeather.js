import React from "react";
import TimeAgo from 'react-timeago';
import './currentWeather.css';

import { refreshIconAnimation } from './refreshIconAnimation';
import refreshIcon from '../../assets/icons/refresh.svg';
import * as images from '../ImagesForIcons/ImagesForIcons';

// import Chart from '../chart';

const CurrentWeather = ({city, refresh, timeAgo}) =>{
    let {temperature, precipType, icon} = city;
    console.log(icon)
    icon = images.getImage(icon);
    precipType = `${precipType[0].toUpperCase()}${precipType.slice(1)}`;
    precipType = precipType.split(" ");
    const summary = precipType.length === 1 ?  precipType[0] : precipType[1];
    return (
        <div className="home-top-left">
            <div className="cw-wrapper clearFix"> 
                <div className="current-temperature">
                    <p className="p-temperature">{temperature} <span>&deg;</span></p>
                    <p className="p-temperature-text">{summary}</p>
                </div>
                <div className="current-icone">
                    <img src={icon}/>
                </div>
            </div>
            <div className="cw-update">
            <img className="icon-refresh" onClick={()=>{refresh(); refreshIconAnimation();}} src={refreshIcon}/>  
            <p>Updated <TimeAgo date={timeAgo}/></p>
            </div>
        </div>
    )
}

export default CurrentWeather;