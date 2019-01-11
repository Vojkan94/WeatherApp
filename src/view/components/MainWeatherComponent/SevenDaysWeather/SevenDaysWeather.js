import React, {Fragment} from "react";
import './sevenDaysWeather.css';
import sun from '../../../assets/icons/sun.svg';


const SevenDaysWeather = ()=>{
    return (
        <Fragment>
        <div className="seven-days-blur"></div>
        <div className="seven-days-wrapper">
            <div className="day-wrapper">
                <div className="zoom-effect">
                    <img src={sun}/><p>31</p>
                </div><p className="day-of-week">MON</p>
            </div><hr/>                
            <div className="day-wrapper">
                <div className="zoom-effect">
                    <img src={sun}/><p>31</p>
                </div><p className="day-of-week">MON</p>
            </div><hr/>                
            <div className="day-wrapper">
                <div className="zoom-effect">
                    <img src={sun}/><p>31</p>
                </div><p className="day-of-week">MON</p>
            </div><hr/>                
            <div className="day-wrapper">
                <div className="zoom-effect">
                    <img src={sun}/><p>31</p>
                </div><p className="day-of-week">MON</p>
            </div><hr/>                
            <div className="day-wrapper">
                <div className="zoom-effect">
                    <img src={sun}/><p>31</p>
                </div><p className="day-of-week">MON</p>
            </div><hr/>                
            <div className="day-wrapper">
                <div className="zoom-effect">
                    <img src={sun}/><p>31</p>
                </div><p className="day-of-week">MON</p>
            </div><hr/>                
            <div className="day-wrapper">
                <div className="zoom-effect">
                    <img src={sun}/><p>31</p>
                </div><p className="day-of-week">MON</p>
            </div>              
        </div>
        </Fragment>
    )
}

export default SevenDaysWeather;