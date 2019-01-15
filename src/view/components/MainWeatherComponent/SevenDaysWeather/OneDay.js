import React, {Fragment} from "react";
import getImage from '../../ImagesForIcons/ImagesForIcons';

const OneDay = ({day, index})=>{
    const {temperatureHigh, name, icon} = day;
    const tempIcon = getImage(icon);
    return (
        <Fragment>
        <div className="day-wrapper">
                <div className="zoom-effect">
                    <img src={tempIcon} alt="icon"/><p>{temperatureHigh} <span>&deg;</span></p>
                </div><p className="day-of-week">{name}</p>
        </div>{index === 6 ? null : <hr/> } 
        
        </Fragment>
    )
}
export default OneDay;