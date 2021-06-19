import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardHeader, CardImg, CardText, Row
} from 'reactstrap';

export default function ForecastCard({ ...forecastObj }) {
  const date = new Date(forecastObj.list.dt * 1000);
  const weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dateDay = weekDay[date.getDay()];
  console.warn(forecastObj.list[1].main.pressure);

  // forecastObj.list.map((forecastForMoment)) => {<div>forecastForMoment.main.pressure</div>})

  return (
    <div>
      <Row className='w-100'>
        <Card className="shadow rounded col-auto m-3"
          body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}
          >
          <CardHeader className="week__day">{dateDay}</CardHeader>
          <CardImg src={forecastObj.list[0].weather.icon} alt="" />
          <CardText className="temperature__range">{forecastObj.list[0].main.temp}°</CardText>
            <br></br>
            <CardText className="pressure">{forecastObj.list[0].main.pressure} hPa</CardText>
          <br></br>
          <CardText className="weather__description">{forecastObj.list[0].main.humidity}% humidity</CardText>
        </Card>
          <Card className="shadow rounded m-3"
            body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}
            >
            <CardHeader className="week__day">{dateDay}</CardHeader>
            <CardImg src={forecastObj.list[1].weather.icon} alt="" />
            <CardText className="temperature__range">{forecastObj.list[1].main.temp}°</CardText>
              <br></br>
              <CardText className="pressure">{forecastObj.list[1].main.pressure} hPa</CardText>
            <br></br>
            <CardText className="weather__description">{forecastObj.list[1].main.humidity}% humidity</CardText>
          </Card>
          <Card className="shadow rounded m-3"
            body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}
            >
            <CardHeader className="week__day">{dateDay}</CardHeader>
            <CardImg src={forecastObj.list[2].weather.icon} alt="" />
            <CardText className="temperature__range">{forecastObj.list[2].main.temp}°</CardText>
              <br></br>
              <CardText className="pressure">{forecastObj.list[2].main.pressure} hPa</CardText>
            <br></br>
            <CardText className="weather__description">{forecastObj.list[2].main.humidity}% humidity</CardText>
          </Card>
        </Row>
        <Row className='w-100'>
          <Card className="shadow rounded m-3"
            body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}
            >
            <CardHeader className="week__day">{dateDay}</CardHeader>
            <CardImg src={forecastObj.list[3].weather.icon} alt="" />
            <CardText className="temperature__range">{forecastObj.list[3].main.temp}°</CardText>
              <br></br>
              <CardText className="pressure">{forecastObj.list[3].main.pressure} hPa</CardText>
            <br></br>
            <CardText className="weather__description">{forecastObj.list[3].main.humidity}% humidity</CardText>
          </Card>
          <Card className="shadow rounded m-3"
            body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}
            >
            <CardHeader className="week__day">{dateDay}</CardHeader>
            <CardImg src={forecastObj.list[4].weather.icon} alt="" />
            <CardText className="temperature__range">{forecastObj.list[4].main.temp}°</CardText>
              <br></br>
              <CardText className="pressure">{forecastObj.list[4].main.pressure} hPa</CardText>
            <br></br>
            <CardText className="weather__description">{forecastObj.list[4].main.humidity}% humidity</CardText>
          </Card>
        </Row>
     </div>
  );
}

ForecastCard.propTypes = {
  forecastObj: PropTypes.object
};
