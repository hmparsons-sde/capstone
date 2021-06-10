import { deleteLocation, getTripLocation } from './localData';
import { deleteTrip, getSingleTrip } from './tripData';

const deleteTripLocations = (firebaseKey, uid) => new Promise((resolve, reject) => {
  getTripLocation(firebaseKey).then((tripLocationsArray) => {
    const deleteLocations = tripLocationsArray.map((locations) => deleteLocation(locations.firebaseKey, uid));
    Promise.all(deleteLocations).then(() => resolve(deleteTrip(firebaseKey, uid)));
  }).catch((error) => reject(error));
});

const tripsAndLocations = (tripId) => new Promise((resolve, reject) => {
  const trip = getSingleTrip(tripId);
  const tripLocations = getTripLocation(tripId);
  Promise.all([trip, tripLocations])
    .then(([tripResponse, tripLocationsResponse]) => resolve({ trip: tripResponse, locations: tripLocationsResponse }))
    .catch((error) => reject(error));
});

export {
  deleteTripLocations,
  tripsAndLocations,
};
