import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Input } from 'reactstrap';
import SearchResultCard from '../Components/Cards/SearchResultCard';
import { getPressureData } from '../helpers/data/externalData';

const SearchContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5%;
`;
export default function SearchResultView({
  uid,
  setTripLocations
}) {
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
    <div>
      <div className="search-bar">
        <Form
          onSubmit={handleSubmit}
          className="flex container p-1 bg-light rounded rounded-pill shadow-sm input-group mt-5"
        >
          <Input
            type="text"
            placeholder="enter city name"
            className="form-control rounded rounded-pill border-0 bg-light ml-3"
            id="value"
            value={userInput}
            aria-describedby="location"
            onChange={handleUserInput}
          ></Input>
          <button
            type="submit"
            onSubmit={handleSubmit}
            id="search-Pressure"
            className="ml-3"
          >
            <i className="fas fa-search fa-2x"></i>
          </button>
          {pressure !== [] && (
            <button onClick={resetSearchResults} className="mr-3 ml-3">
              <i className="fas fa-times fa-2x"></i>
            </button>
          )}
        </Form>
      </div>
      <SearchContainer id="card-container">
        {pressure.map((pressureObj) => (
          <SearchResultCard
            key={pressureObj.id}
            uid={uid}
            setTripLocations={setTripLocations}
            resetSearchResults={resetSearchResults}
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
  changeUnit: PropTypes.any,
};
