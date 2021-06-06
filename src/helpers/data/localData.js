import axios from 'axios';
import firebaseConfig from '../apiKeys';

const localDb = firebaseConfig.localDbURL;

const addPressure = (pressure) => new Promise((resolve, reject) => {
  axios.post(`${localDb}/locations.json`, pressure)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${localDb}/locations/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('pressure added', pressure)));
    })
    .catch((error) => reject(error));
});

export default addPressure;
