import GetLocation from 'react-native-get-location'
import { alertMessage } from '../components/alertMessage';

const getLocation = ()  => GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 60000,
})
.then(location => {
    console.log(`lat :${location.latitude} lon :${location.longitude} `);
    let val = {
        lat: location.latitude,
        lon: location.longitude
      };
      return val;
})
.catch(error => {
    return alertMessage(error.message)
})

export {getLocation};