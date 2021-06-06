import firebase from 'firebase';
import axios from 'axios';
import firebaseConfig from '../apiKeys';
import getPressureData from './externalData';

const localDb = firebaseConfig.localDbURL;

const addLocation = (locationObj) => new Promise((resolve, reject) => {
  axios.post(`${localDb}/locations.json`, locationObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${localDb}/locations/${response.data.name}.json`, body)
        .then(() => {
          getPressureData().then((locationArray) => resolve(locationArray));
        });
    })
    .catch((error) => reject(error));
});

const getLocation = (uid) => new Promise((resolve, reject) => {
  axios.get(`${localDb}/locations.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const deleteLocation = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${localDb}/locations/${firebaseKey}.json`)
    .then(() => getLocation(uid).then((locationArray) => resolve(locationArray)))
    .catch((error) => reject(error));
});

const updateLocation = (locationObj, firebaseKey) => new Promise((resolve, reject) => {
  axios.patch(`${localDb}/locations/${firebaseKey}.json`, locationObj)
    .then(() => {
      getLocation(firebase.auth().currentUser.uid).then((locationArray) => resolve(locationArray))
        .catch((error) => reject(error));
    });
});

export {
  addLocation, getLocation, deleteLocation, updateLocation
};
