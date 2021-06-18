import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Button, Input, Form, FormGroup, ButtonToolbar
} from 'reactstrap';
import SearchResultCard from '../Components/Cards/SearchResultCard';
import { getPressureData } from '../helpers/data/externalData';

const SearchContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5%;
`;
export default function SearchResultView({ uid, setTripLocations }) {
  const [pressure, setPressure] = useState([]);
  const [userInput, setUserInput] = useState('');

  const grabPressure = () => {
    getPressureData(userInput).then((response) => {
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
    <div className="search-view">
      <div className="search-bar">
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              placeholder="enter city name"
              className="form-control flex-grow-2 rounded rounded-pill border-0 bg-light w-50"
              id="value"
              value={userInput}
              aria-describedby="location"
              onChange={handleUserInput}
            ></Input>
          </FormGroup>
          <ButtonToolbar>
            <Button
              type="submit"
              onSubmit={handleSubmit}
              id="search-Pressure"
              color="secondary"
              className="ml-3 btn-lg"
            >
              Submit
            </Button>
            {pressure !== [] && (
              <Button onClick={resetSearchResults} className="ml-3 btn-lg">
                Clear
              </Button>
            )}
          </ButtonToolbar>
        </Form>
      </div>
      <br></br>
      <SearchContainer id="card-container">
        {pressure.map((pressureObj) => (
          <SearchResultCard
            key={pressureObj.id}
            uid={uid}
            setTripLocations={setTripLocations}
            {...pressureObj}
          />
        ))}
      </SearchContainer>
    </div>
  );
}

SearchResultView.propTypes = {
  firebaseKey: PropTypes.any,
  uid: PropTypes.any,
  setTripLocations: PropTypes.func,
};
