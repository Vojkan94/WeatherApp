import React, {Fragment} from "react";
import './cityComponent.css';
import {click} from './clickFunction.js';


const CityComponent = ({changeCity}) =>{
    console.log(changeCity)
    const date = new Date();
    const month = date.toLocaleString('en-us', { month: 'long' }).toUpperCase();
    let day = `${date.getDate()}`;
    day = day.length === 1 ? `0${day}` : day;
    return (
        <Fragment>
            <span onClick={click} class="dropdown-el">
                <input type="radio" onClick={changeCity}  name="city" defaultChecked id="beograd"/><label onClick={changeCity} htmlFor="beograd">BEOGRAD</label>
                <input type="radio" onClick={changeCity}  name="city" id="novisad"/><label onClick={changeCity} htmlFor="novisad">NOVI SAD</label> 
            </span>
            <p onClick={changeCity} className="weather-date">{day} {month}</p>
        </Fragment>
    )
}

export default CityComponent;