import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY_EXTERNAL;

const getPressureData = (userInput) => new Promise((resolve, reject) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getForecastData = (userInput) => new Promise((resolve, reject) => {
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${apiKey}&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { getPressureData, getForecastData };
