import axios from 'axios';
import firebaseConfig from '../apiKeys';

const getPressureData = (userInput) => new Promise((resolve, reject) => {
  axios.get(`https://api.openPressuremap.org/data/2.5/Pressure?q=${userInput}&appid=${firebaseConfig.externalApiKey}&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getPressureData;
