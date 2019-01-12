import React, {Component} from "react";
import './currentWeather.css';
import sun from '../../assets/icons/sun.svg';
// import Chart from '../chart';


class CurrentWeather extends Component{
    constructor(props){
        super(props); 
    }

    
    render (){
        let {temperature, precipType} = this.props.city;
        precipType = `${precipType[0].toUpperCase()}${precipType.slice(1)}`;
        return(
            <div className="home-top-left">
                        <div className="cw-wrapper clearFix"> 
                            <div className="current-temperature">
                                <p className="p-temperature">{temperature} <span>&deg;</span></p>
                                <p className="p-temperature-text">{precipType}</p>
                            </div>
                            <div className="current-icone">
                                <img src={sun}/>
                            </div>
                        </div>
                        <div className="cw-update">
                        <img width="10%" src="https://cdn.iconscout.com/icon/free/png-256/refresh-470-474986.png"/>
                        <p>Updated 4 mins ago.</p>
                        </div>
                

            </div>
        )
    }
}

export default CurrentWeather;