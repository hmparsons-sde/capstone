import axios from 'axios';
import firebaseConfig from '../apiKeys';

const getPressureData = (userInput) => new Promise((resolve, reject) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${firebaseConfig.externalApiKey}&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getPressureData;
