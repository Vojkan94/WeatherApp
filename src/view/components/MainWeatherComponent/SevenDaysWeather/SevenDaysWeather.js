import React, {Fragment} from "react";
import './sevenDaysWeather.css';

import OneDay from './OneDay';

const SevenDaysWeather = ({sevenDaysTemp})=>{
    // console.log(sevenDaysTemp)
    const sevenDaysComponents = sevenDaysTemp.map((day,i)=>{
        return <OneDay day={day} key={i}/>
    })
    console.log(sevenDaysComponents)
    return (
        <Fragment>
        <div className="seven-days-blur"></div>
        <div className="seven-days-wrapper">
             {sevenDaysComponents}         
        </div>
        </Fragment>
    )
}

export default SevenDaysWeather;