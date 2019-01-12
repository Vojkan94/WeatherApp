import {API_ENDPOINT_BG} from '../shared/constants';
import {API_ENDPOINT_NS} from '../shared/constants';

import { apiService} from './apiService';

class CityService{
    async fetchWeather(city){
        const apiEndPoint = (city === "BG") ? API_ENDPOINT_BG : API_ENDPOINT_NS;
        const responseObj = await apiService.get(apiEndPoint);
        console.log(responseObj);

    }
}

export const cityService = new CityService();