import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Input } from 'reactstrap';
import ForecastCard from '../Components/Cards/ForecastCard';
import { getForecastData } from '../helpers/data/externalData';

const ForecastContainer = styled.div`
  margin-left: 30%;
  margin-bottom: auto;
`;

export default function ForecastView() {
  const [forecast, setForecast] = useState([]);
  const [userInput, setUserInput] = useState('');

  const grabForecast = () => {
    getForecastData(userInput).then((response) => {
      forecast.push(response);
      setForecast([...forecast]);
    });
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    grabForecast();
    setUserInput('');
  };

  return (
    <div>
      <div className="search-bar">
        <Form
          onSubmit={handleSubmit}
          className="w-80 flex container p-2 bg-light rounded rounded-pill shadow-sm input-group mt-5"
        >
          <Input
            type="text"
            placeholder="enter city name"
            className="form-control flex-grow-2 rounded rounded-pill border-0 bg-light w-50 ml-3"
            id="value"
            value={userInput}
            aria-describedby="location"
            onChange={handleUserInput}
          ></Input>
          <button
            type="submit"
            onSubmit={handleSubmit}
            id="search-forecast"
            className="ml-3 mr-3"
          >
            <i className="fas fa-search fa-2x"></i>
          </button>
        </Form>
      </div>
      <ForecastContainer className="container-fluid">
      {forecast.map((forecastObj) => (
      <ForecastCard
        key={forecastObj.id}
        {...forecastObj}
        />
      ))}
      </ForecastContainer>
    </div>
  );
}
