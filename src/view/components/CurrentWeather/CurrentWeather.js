import React from "react";
import TimeAgo from 'react-timeago';
import './currentWeather.css';

import { refreshIconAnimation } from './refreshIconAnimation';
import refreshIcon from '../../assets/icons/refresh.svg';
import getImage from '../ImagesForIcons/ImagesForIcons';

import forChart from '../../assets/images/forchart.png';
import Chart from '../chart';
// import '../chart.css';

const CurrentWeather = ({city, refresh, timeAgo}) =>{
    let {temperature, precipType, icon} = city;
    icon = getImage(icon);
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
                    <img src={icon} alt="icon"/>
                </div>
            </div>
           
            <div className="chart"><Chart/></div>
            <div className="for-chart"><img width="100%" src={forChart}/></div>
            <div className="cw-update">
            <img className="icon-refresh" onClick={()=>{refresh(); refreshIconAnimation();}} src={refreshIcon}  alt="icon-refresh"/>  
            <p>Updated <TimeAgo date={timeAgo}/></p>
            </div>
        </div>
    )
}

export default CurrentWeather;