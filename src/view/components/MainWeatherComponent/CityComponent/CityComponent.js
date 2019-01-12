import React, {Fragment} from "react";
import './cityComponent.css';
import {click} from './clickFunction.js';


const CityComponent = () =>{
    const date = new Date();
    const month = date.toLocaleString('en-us', { month: 'long' }).toUpperCase();
    let day = `${date.getDate()}`;
    day = day.length === 1 ? `0${day}` : day;
    return (
        <Fragment>
            <span onClick={click} class="dropdown-el">
                <input type="radio" name="city" defaultChecked id="beograd"/><label htmlFor="beograd">BEOGRAD</label>
                <input type="radio" name="city" id="novisad"/><label htmlFor="novisad">NOVI SAD</label> 
            </span>
            <p className="weather-date">{day} {month}</p>
        </Fragment>
    )
}

export default CityComponent;