import {API_ENDPOINT_BG} from '../shared/constants';
import {API_ENDPOINT_NS} from '../shared/constants';

import { apiService} from './apiService';
import City from '../models/City';
import Day from '../models/City';

class CityService{
    async fetchWeather(city){
        const apiEndPoint = (city === "BG") ? API_ENDPOINT_BG : API_ENDPOINT_NS;
        const responseObj = await apiService.get(apiEndPoint);
        const { temperature, precipType, visibility, uvIndex, humidity, dewPoint} = responseObj.currently;
        let sevenDays = responseObj.daily.data;
        sevenDays.length = 7;
        const nameOfDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const currentDay = nameOfDays[new Date().getDay()];
        
        // const sevenDaysEntities = sevenDays.map((dayTempInfo)=>{
        //     const 
        //     return new Day()
        // })
        console.log(currentDay)
        return new City(city, temperature, precipType, sevenDays, visibility, uvIndex, humidity, dewPoint);
    }
}

export const cityService = new CityService();