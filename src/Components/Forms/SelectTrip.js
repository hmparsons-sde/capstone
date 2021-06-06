import firebase from 'firebase';
import { getTrips } from '../../helpers/data/tripData';

const SelectTrip = (pressureObj = {}) => {
  let domString = `<label for="trips">Select a Trip</label>
  <select class="form-control" id="trip-select" required>
  <option value="">Select a Trip</option>`;

  getTrips(firebase.auth().currentUser.uid).then((tripsArray) => {
    tripsArray.forEach((trip) => {
      if (trip.firebaseKey === pressureObj.tripId) {
        domString += `<option selected value="${trip.firebaseKey}">${trip.title}</option>`;
      } else {
        domString += `<option value="${trip.firebaseKey}">${trip.title}</option>`;
      }
    });
    domString += '</select>';
    document.querySelector('#select-trip').innerHTML = domString;
  });
};

export default SelectTrip;
