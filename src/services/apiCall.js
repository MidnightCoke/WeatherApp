import {BASE_URL,TIMESTAMP,UNIT,API_KEY} from '../constants/constants';

import { alertMessage } from '../components/alertMessage';
const WeatherDataByLocationEndpoint = (params) =>  `${BASE_URL}lat=${params.lat}&lon=${params.lon}&cnt=${TIMESTAMP}&units=${UNIT}&appid=${API_KEY}`
const WeatherDataByCityEndpoint = (params) =>  `${BASE_URL}q=${params.city}&cnt=${TIMESTAMP}&units=${UNIT}&appid=${API_KEY}`

const apiCall = async (endpoint) => {
    try {
        const response = await fetch(endpoint);
        if (response.ok) {
            const data = await response.json();
            console.log(`response status : ${response.status}`)
            return data
        }
    }catch(error)  {
        alertMessage(error.message);
    }
}

export const getWeatherDataByLocation = (params) => {
    return  apiCall(WeatherDataByLocationEndpoint(params))
}

export const getWeatherDataByCity = (params) => {
    return  apiCall(WeatherDataByCityEndpoint(params))
}



  