import React, {Fragment} from "react";
import './cityComponent.css';
import {click} from './clickFunction.js';


const CityComponent = () =>{
    return (
        <Fragment>
            <span onClick={click} class="dropdown-el">
                <input type="radio" name="city" defaultChecked id="beograd"/><label htmlFor="beograd">BEOGRAD</label>
                <input type="radio" name="city" id="novisad"/><label htmlFor="novisad">NOVI SAD</label> 
            </span>
            <p className="weather-date">9 AUGUST</p>
        </Fragment>
    )
}

export default CityComponent;