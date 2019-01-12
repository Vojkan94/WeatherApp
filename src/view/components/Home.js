import React, {Component} from "react";
import './home.css';

import CurrentWeather from './CurrentWeather/CurrentWeather';
import CurrentWeatherDetails from './CurrentWeatherDetails/CurrentWeatherDetails';
import MainWeatherComponent from './MainWeatherComponent/MainWeatherComponent';

import { cityService } from '../../services/cityService';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: null
        }
        // this.myfetch = this.myfetch.bind(this);
    }
    componentDidMount(){
       this.myfetch();
    }

    async myfetch(){
        const city = await cityService.fetchWeather("BG");
        this.setState({
            city
        })
    }

    render (){
        if(!this.state.city) { return null;}
        return (
            <div className="flex-container">
                <div className="wrapper">
                    <CurrentWeather city={this.state.city}/>
                    <CurrentWeatherDetails city={this.state.city}/>
                    <MainWeatherComponent/>
                </div>
            </div>  
        )
    }
}

export default Home;