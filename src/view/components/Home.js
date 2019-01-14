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
            city: null,
            cityName: "NOVI SAD"
        }
        this.changeCity = this.changeCity.bind(this);

    }
    componentDidMount(){
       this.myfetch("BG");
    }

    async myfetch(cityName){
        const city = await cityService.fetchWeather(cityName);
        this.setState({
            city
        })
    }

    changeCity(event){
        const selectedCity = event.target.textContent;
        setTimeout(()=>{
            if(selectedCity === "NOVI SAD"){
                this.myfetch("NS");
                this.setState({
                    cityName: "BEOGRAD"
                })
            }else{
                this.myfetch("BG");
                this.setState({
                    cityName: "NOVI SAD"
                })
            }
        }, 500)
    }
   

    render (){
       
        if(!this.state.city) { return null; }
        return (
            <div className="flex-container">
                <div className="wrapper">
                    <CurrentWeather city={this.state.city}/>
                    <CurrentWeatherDetails city={this.state.city}/>
                    <MainWeatherComponent cityName={this.state.cityName} changeCity={this.changeCity} sevenDaysTemp={this.state.city.sevenDaysTemp}/>
                </div>
            </div>  
        )
    }
}

export default Home;