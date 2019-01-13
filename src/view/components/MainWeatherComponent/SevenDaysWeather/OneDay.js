import React, {Fragment} from "react";
import sun from '../../../assets/icons/sun.svg';

const OneDay = ({day})=>{
    const {temperatureHigh, name} = day;
    return (
        <Fragment>
        <div className="day-wrapper">
                <div className="zoom-effect">
                    <img src={sun}/><p>{temperatureHigh}</p>
                </div><p className="day-of-week">{name}</p>
        </div><hr/>   
        </Fragment>
    )
}
export default OneDay;