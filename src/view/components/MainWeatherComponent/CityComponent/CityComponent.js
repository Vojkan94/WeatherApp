import React, {Component} from "react";
import './cityComponent.css';
import {selectCity} from './selectCity.js';
import $ from 'jquery';

class CityComponent extends Component{
    
    componentDidMount (){
        selectCity();
    }

    toogleClass(){
        if($('.weather-date').hasClass('weather-date--opacity')){
            setTimeout(() => {
                $('.weather-date').removeClass('weather-date--opacity');    
            }, 350);  
        }else{
            $('.weather-date').addClass('weather-date--opacity');
        }
    }

    render(){
        const date = new Date();
        const month = date.toLocaleString('en-us', { month: 'long' }).toUpperCase();
        let day = `${date.getDate()}`;
        day = day.length === 1 ? `0${day}` : day;
        return(
        <div className="container">
          <div onClick={this.toogleClass} className="dropdown">
            <div className="select">
              <span>BEOGRAD</span>
              <i></i>
            </div>
            <input type="hidden" name="city"/>
            <ul className="dropdown-menu">
              <li onClick={this.props.changeCity}>{this.props.cityName}</li>
            </ul>
          </div>
      
        <span className="weather-date">{day} {month}</span>
        </div>
      )
    }
}

export default CityComponent;
