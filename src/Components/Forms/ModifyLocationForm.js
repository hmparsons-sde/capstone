import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { updateLocation } from '../../helpers/data/locationData';

export default function ModifyLocationForm({
  formTitle, cityName, uid, firebaseKey, tripId, setLocations
}) {
  const [location, setLocation] = useState({
    cityName: cityName || '',
    firebaseKey: firebaseKey || null,
    uid,
    tripId: tripId || ''
  });

  const handleInputChange = (e) => {
    setLocation((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLocation(location, firebaseKey).then(setLocations);
  };

  return (
    <div className="trip-form-container">
    <Form className="edit-trip-form" onSubmit={handleSubmit}>
      <h1>{formTitle}</h1>
      <FormGroup>
        <Label>city name:</Label>
        <Input
          name="cityName"
          id="cityName"
          type="text"
          placeholder="Title"
          value={location.cityName}
          onChange={handleInputChange}
        ></Input>
      </FormGroup>
      <br></br>
      <FormGroup>
        <Input
          type='select'
          name='tripId'
          id='tripId'
          value={location.tripId}
          onChange={handleInputChange}
        >
          <option value=''>Reassign</option>
        </Input>
      </FormGroup>
      <br></br>
        <Button
          color="danger"
          type="submit"
          className="mt-4"
          onSubmit={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

ModifyLocationForm.propTypes = {
  uid: PropTypes.any,
  formTitle: PropTypes.string,
  setLocations: PropTypes.func,
  cityName: PropTypes.string,
  firebaseKey: PropTypes.string,
  tripId: PropTypes.string,
  locations: PropTypes.array,
};
