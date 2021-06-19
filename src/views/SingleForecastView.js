import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ForecastCard from '../Components/Cards/ForecastCard';
import { getForecastData } from '../helpers/data/externalData';

const SingleForecastContainer = styled.div`
  margin-left: 25%;
  margin-bottom: 80%;
`;

export default function SingleForecastView() {
  const [forecast, setForecast] = useState({});
  const { cityName } = useParams();

  useEffect(() => {
    getForecastData(cityName)
      .then(setForecast);
  }, []);

  return (
    <div>
      <SingleForecastContainer className="container-fluid">
      {Object.keys(forecast).length && <ForecastCard
        key={forecast.id}
        {...forecast}
        />}
      </SingleForecastContainer>
    </div>
  );
}
