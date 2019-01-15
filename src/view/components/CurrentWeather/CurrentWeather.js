import React from "react";
import TimeAgo from 'react-timeago';
import './currentWeather.css';

import { refreshIconAnimation } from './refreshIconAnimation';
import refreshIcon from '../../assets/icons/refresh.svg';
import getImage from '../ImagesForIcons/ImagesForIcons';

import forChart from '../../assets/images/forchart.png';
import Chart from '../Chart/Chart';


const CurrentWeather = ({city, refresh, timeAgo}) =>{
    let {temperature, precipType, icon} = city;
    icon = getImage(icon);
    precipType = precipType.split(" ");
    let summary;
    switch(precipType.length){
        case 1: 
            summary = precipType[0];
            break;
        case 2:
            summary = precipType[1]
            break;
        case 3:
            summary = precipType[2]
            break;
        default:
            summary = "Cloudy";
            break;
    }
    summary = `${summary[0].toUpperCase()}${summary.slice(1)}`;
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
            <div className="for-chart"><img width="100%" src={forChart} alt="chart"/></div>
            <div className="cw-update">
            <img className="icon-refresh" onClick={()=>{refresh(); refreshIconAnimation();}} src={refreshIcon}  alt="icon-refresh"/>  
            <p>Updated <TimeAgo date={timeAgo}/></p>
            </div>
        </div>
    )
}

export default CurrentWeather;