// import firebase from 'firebase';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const localDb = firebaseConfig.dbURL;

const getTrips = () => new Promise((resolve, reject) => {
  axios.get(`${localDb}/trips.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createTrip = (tripObject) => new Promise((resolve, reject) => {
  axios.post(`${localDb}/trips.json`, tripObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${localDb}/trips/${response.data.name}.json`, body)
        .then(() => {
          getTrips().then((tripsArray) => resolve(tripsArray));
        });
    }).catch((error) => reject(error));
});

const getSingleTrip = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${localDb}/trips/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateTrips = (tripObject, firebaseKey) => new Promise((resolve, reject) => {
  axios.patch(`${localDb}/trips/${firebaseKey}.json`, tripObject)
    .then(() => getTrips()).then((tripsArray) => resolve(tripsArray))
    .catch((error) => reject(error));
});

const deleteTrip = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${localDb}/trips/${firebaseKey}.json`)
    .then(() => getTrips().then((tripsArray) => resolve(tripsArray)))
    .catch((error) => reject(error));
});

export {
  getTrips,
  deleteTrip,
  createTrip,
  getSingleTrip,
  updateTrips
};
