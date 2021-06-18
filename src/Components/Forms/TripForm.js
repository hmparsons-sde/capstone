import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createTrip, updateTrips } from '../../helpers/data/tripData';

export default function TripForm({
  formTitle, setTrips, title, startDate, endDate, firebaseKey, user, imageUrl
}) {
  const [trip, setTrip] = useState({
    title: title || '',
    startDate: startDate || '',
    endDate: endDate || '',
    firebaseKey: firebaseKey || null,
    uid: user.uid,
    imageUrl: imageUrl || '',
  });

  const handleInputChange = (e) => {
    setTrip((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trip.firebaseKey) {
      updateTrips(trip, firebaseKey).then(setTrips);
    } else {
      createTrip(trip, user.uid).then(setTrips);
      history.push('trips');
    }
  };

  return (
    <div className="trip-form-container d-grid gap-2">
      <Form className="add-trip-form bg-white text-center w-100" autoComplete="off" inverse>
        <h1>{formTitle}</h1>
        <FormGroup className="bg-white start-25 mt-3">
          <Input
            name="title"
            type="text"
            className="bg-white w-75 ml-5 mt-3"
            placeholder="Title"
            value={trip.title}
            onChange={handleInputChange}
          ></Input>
        </FormGroup>
        <br></br>
        <FormGroup className="bg-white">
        <Input
          name="imageUrl"
          type="url"
          placeholder="Add an image"
          value={trip.imageUrl}
          onChange={handleInputChange}
          className="bg-white mt-1 w-75 ml-5"
        ></Input>
        </FormGroup>
        <br></br>
        <FormGroup className="bg-white">
          <Input
            name="startDate"
            type="text"
            placeholder="Start Date"
            value={trip.startDate}
            onChange={handleInputChange}
            className="bg-white w-75 ml-5"
          ></Input>
        </FormGroup>
        <br></br>
        <FormGroup className="bg-white">
          <Input
            name="endDate"
            type="text"
            placeholder="End Date"
            value={trip.endDate}
            onChange={handleInputChange}
            className="bg-white w-75 ml-5"
          ></Input>
        </FormGroup>
        <br></br>
        <Button
          color="secondary"
          type="submit"
          onClick={handleSubmit}
          className="mt-3 btn-lg"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

TripForm.propTypes = {
  user: PropTypes.any,
  formTitle: PropTypes.string,
  setTrips: PropTypes.func,
  title: PropTypes.string,
  firebaseKey: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  trips: PropTypes.array,
  imageUrl: PropTypes.string,
};
