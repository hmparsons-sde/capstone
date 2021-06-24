import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardImg, CardColumns
} from 'reactstrap';

export default function ForecastCard({ ...forecast }) {
  return (
    <div>
      <CardColumns className='w-50 ml-5 mt-5 justify-content-center'>
        <Card className="shadow rounded m-3"
          body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}
          >
          <CardText tag="h3" className="week__day">{forecast.list[0].dt_txt}</CardText>
          <CardImg src={forecast.list[0].weather.icon} alt="" />
            <CardText className="pressure" tag="h5">{forecast.list[0].main.pressure} hPa</CardText>
          <br></br>
          <CardText className="weather__description" tag='h6'>{forecast.list[0].main.humidity}% humidity | {forecast.list[0].main.temp}°F</CardText>
        </Card>
          <Card className="shadow rounded m-3"
            body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}
            >
            <CardText tag="h3" className="week__day">{forecast.list[8].dt_txt}</CardText>
            <CardImg src={forecast.list[8].weather.icon} alt="" />
              <CardText className="pressure" tag="h5">{forecast.list[8].main.pressure} hPa</CardText>
            <br></br>
            <CardText className="weather__description" tag='h6'>{forecast.list[8].main.humidity}% humidity | {forecast.list[8].main.temp}°F</CardText>
          </Card>
          <Card className="shadow rounded m-3"
            body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}
            >
            <CardText tag="h3" className="week__day">{forecast.list[16].dt_txt}</CardText>
            <CardImg src={forecast.list[16].weather.icon} alt="" />
              <CardText className="pressure" tag="h5">{forecast.list[16].main.pressure} hPa</CardText>
            <br></br>
            <CardText className="weather__description" tag='h6'>{forecast.list[16].main.humidity}% humidity | {forecast.list[16].main.temp}°F</CardText>
          </Card>
          <Card className="shadow rounded m-3"
            body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}
            >
            <CardText tag="h3" className="week__day">{forecast.list[24].dt_txt}</CardText>
            <CardImg src={forecast.list[24].weather.icon} alt="" />
              <CardText className="pressure" tag="h5">{forecast.list[24].main.pressure} hPa</CardText>
            <br></br>
            <CardText className="weather__description" tag='h6'>{forecast.list[24].main.humidity}% humidity | {forecast.list[24].main.temp}°F</CardText>
          </Card>
          <Card className="shadow rounded m-3"
            body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}
            >
            <CardText tag="h3" className="week__day">{forecast.list[32].dt_txt}</CardText>
            <CardImg src={forecast.list[32].weather.icon} alt="" />
              <CardText className="pressure" tag="h5">{forecast.list[32].main.pressure} hPa</CardText>
            <br></br>
            <CardText className="weather__description" tag='h6'>{forecast.list[32].main.humidity}% humidity | {forecast.list[32].main.temp}°F</CardText>
          </Card>
        </CardColumns>
     </div>
  );
}

ForecastCard.propTypes = {
  forecast: PropTypes.object
};
