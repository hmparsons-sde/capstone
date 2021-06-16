import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Input, Form, FormGroup
} from 'reactstrap';
import SearchResultCard from '../Components/Cards/SearchResultCard';
import { getPressureData } from '../helpers/data/externalData';

export default function SearchResultView({ uid, setTripLocations }) {
  const [pressure, setPressure] = useState([]);
  const [userInput, setUserInput] = useState('');

  const grabPressure = () => {
    getPressureData(userInput)
      .then((response) => {
        pressure.push(response);
        setPressure([...pressure]);
      });
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    grabPressure();
    setUserInput('');
  };

  const resetSearchResults = () => {
    setPressure([]);
  };

  return (
          <div>
            <div className="form-search">
              <Form autoComplete="off" onSubmit={handleSubmit}>
              <h2
                id="search-title">
                  Get the Pressure
              </h2>
              <FormGroup>
              <Input
                type="text"
                placeholder="enter city name"
                className="form-control"
                id="value"
                value={userInput}
                aria-describedby="location"
                onChange={handleUserInput}>
              </Input>
            </FormGroup>
          <Button
            type="submit"
            onSubmit={handleSubmit}
            id="search-Pressure"
            color="secondary"
            className="ml-3 btn-lg">
              Submit
          </Button>
          </Form>
          </div>
      <div id="card-container">
        {pressure !== [] && <Button onClick={resetSearchResults} className="ml-4 btn-lg justify-content-center">Clear</Button>}
        {pressure.map((pressureObj) => (
          <SearchResultCard
            key={pressureObj.id}
            uid={uid}
            setTripLocations={setTripLocations}
            {...pressureObj}
          />
        ))}
      </div>
    </div>
  );
}

SearchResultView.propTypes = {
  firebaseKey: PropTypes.any,
  uid: PropTypes.any,
  setTripLocations: PropTypes.func,
};
