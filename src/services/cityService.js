import {API_ENDPOINT_BG} from '../shared/constants';
import {API_ENDPOINT_NS} from '../shared/constants';

import { apiService} from './apiService';
import City from '../models/City';

class CityService{
    async fetchWeather(city){
        const apiEndPoint = (city === "BG") ? API_ENDPOINT_BG : API_ENDPOINT_NS;
        const responseObj = await apiService.get(apiEndPoint);
        const { temperature, precipType, visibility, uvIndex, humidity, dewPoint} = responseObj.currently;
        const sevenDays = responseObj.daily.data;
        return new City(city, temperature, precipType, sevenDays, visibility, uvIndex, humidity, dewPoint);
    }
}

export const cityService = new CityService();