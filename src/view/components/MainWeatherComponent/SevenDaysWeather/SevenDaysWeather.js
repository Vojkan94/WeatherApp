import React, {Fragment} from "react";
import './sevenDaysWeather.css';

import OneDay from './OneDay';

const SevenDaysWeather = ({sevenDaysTemp, cityName})=>{
    const sevenDaysComponents = sevenDaysTemp.map((day,i)=>{
        return <OneDay day={day} key={i} index={i}/>
    })
    const cssClass = cityName === "NOVI SAD" ? "seven-days-blur seven-days-blur--BG" : "seven-days-blur seven-days-blur--NS"
    return (
        <Fragment>
        <div className={cssClass}></div>
        <div className="seven-days-wrapper">
             {sevenDaysComponents}         
        </div>
        </Fragment>
    )
}

export default SevenDaysWeather;