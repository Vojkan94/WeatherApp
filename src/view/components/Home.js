import React, {Component} from "react";
import './home.css';

import CurrentWeather from './CurrentWeather/CurrentWeather';
import CurrentWeatherDetails from './CurrentWeatherDetails/CurrentWeatherDetails';
import MainWeatherComponent from './MainWeatherComponent/MainWeatherComponent';

import { cityService } from '../../services/cityService';


class Home extends Component {
    constructor(){
        super();
        this.state = {
            city: null,
            cityName: "NOVI SAD",
            timeAgo: new Date()
        }
        this.changeCity = this.changeCity.bind(this);
        this.myfetch = this.myfetch.bind(this);
        this.refresh = this.refresh.bind(this);
    }
    componentDidMount(){
       this.myfetch("BG");
    }

    async myfetch(cityName){
        const city = await cityService.fetchWeather(cityName);
        const timeAgo = new Date();
        console.log("fetch")
        this.setState({
            city,
            timeAgo
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
   
    refresh(){
        const cityName = this.state.cityName === "BEOGRAD" ? "NS" : "BG";
        this.myfetch(cityName);
    }

    render (){
        if(!this.state.city) { return null; }
        return (
            <div className="flex-container">
                <div className="wrapper">
                    <CurrentWeather timeAgo={this.state.timeAgo} city={this.state.city} refresh={this.refresh}/>
                    <CurrentWeatherDetails city={this.state.city}/>
                    <MainWeatherComponent cityName={this.state.cityName} changeCity={this.changeCity} sevenDaysTemp={this.state.city.sevenDaysTemp}/>
                </div>
            </div>  
        )
    }
}

export default Home;