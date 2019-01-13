import {API_ENDPOINT_BG} from '../shared/constants';
import {API_ENDPOINT_NS} from '../shared/constants';

import { apiService} from './apiService';
import City from '../models/City';
import Day from '../models/Day';

class CityService{
    async fetchWeather(city){
        const apiEndPoint = (city === "BG") ? API_ENDPOINT_BG : API_ENDPOINT_NS;
        const responseObj = await apiService.get(apiEndPoint);
        const { temperature, summary, visibility, uvIndex, humidity, dewPoint} = responseObj.currently;
        let sevenDays = responseObj.daily.data;
        sevenDays.length = 7;
        const nameOfDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const currentDay = nameOfDays[new Date().getDay()];
        let sortDays = [];
        for(let i = 0, indexOfDay = nameOfDays.indexOf(currentDay) ; i < 7; i++, indexOfDay++ ){
            sortDays.push(nameOfDays[indexOfDay])
            indexOfDay = indexOfDay === 6 ? -1 : indexOfDay;
        }
        const sevenDaysEntities = sortDays.map((day, index)=>{
            return new Day(sortDays[index], sevenDays[index].temperatureHigh, sevenDays[index].precipType);
        })
        
        // console.log(sevenDaysEntities)
        return new City(city, temperature, summary, sevenDaysEntities, visibility, uvIndex, humidity, dewPoint);
    }
}

export const cityService = new CityService();