import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardImg, Row
} from 'reactstrap';

export default function ForecastCard({ ...forecast }) {
  return (
      <div>
          <Row className='w-75 ml-5 mt-5 d-flex row-wrap'>
            <Card className="shadow rounded m-3 col-3"
              body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}
              >
              <CardText tag='h3' className='dayOfWeek'>{moment().format('dddd')}, {moment().format('LL')}</CardText>
              <i className="fa fa-ellipsis-h fa-3x mt-3 text-center"></i>
                <br></br>
                <CardText className="pressure" tag="h3">{forecast.list[0].main.pressure} hPa</CardText>
              <CardText className="weather__description" tag='h5'>{forecast.list[0].main.humidity}% humidity | {forecast.list[0].main.temp}°F</CardText>
            </Card>
            <Card className="shadow rounded m-3 col-3"
              body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}
              >
              <CardText tag='h3' className='dayOfWeek'>{moment().add(1, 'days').format('dddd')}, {moment().add(1, 'days').format('LL')}</CardText>
              <i className="fa fa-ellipsis-h fa-3x mt-3 text-center"></i>
                <br></br>
                <CardText className="pressure" tag="h3">{forecast.list[8].main.pressure} hPa</CardText>
              <CardText className="weather__description" tag='h5'>{forecast.list[8].main.humidity}% humidity | {forecast.list[8].main.temp}°F</CardText>
            </Card>
            <Card className="shadow rounded m-3 col-3"
              body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}
              >
              <CardText tag='h3' className='dayOfWeek'>{moment().add(2, 'days').format('dddd')}, {moment().add(2, 'days').format('LL')}</CardText>
              <i className="fa fa-ellipsis-h fa-3x mt-3 text-center"></i>
                <br></br>
                <CardText className="pressure" tag="h3">{forecast.list[16].main.pressure} hPa</CardText>
              <CardText className="weather__description" tag='h5'>{forecast.list[16].main.humidity}% humidity | {forecast.list[16].main.temp}°F</CardText>
            </Card>
            <Card className="shadow rounded m-3 col-3"
              body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}
              >
              <CardText tag='h3' className='dayOfWeek'>{moment().add(3, 'days').format('dddd')}, {moment().add(3, 'days').format('LL')}</CardText>
              <i className="fa fa-ellipsis-h fa-3x mt-3 text-center"></i>
                <br></br>
                <CardText className="pressure" tag="h3">{forecast.list[24].main.pressure} hPa</CardText>
              <CardText className="weather__description" tag='h5'>{forecast.list[24].main.humidity}% humidity | {forecast.list[24].main.temp}°F</CardText>
            </Card>
            <Card className="shadow rounded m-3 col-3"
              body inverse style={{ backgroundColor: '#24232d', borderColor: '#938d94' }}
              >
              <CardText tag='h3' className='dayOfWeek'>{moment().add(4, 'days').format('dddd')}, {moment().add(4, 'days').format('LL')}</CardText>                <CardImg src={forecast.list[32].weather.icon} alt="" />
              <i className="fa fa-ellipsis-h fa-3x mt-3 text-center"></i>
                <br></br>
                <CardText className="pressure" tag="h3">{forecast.list[32].main.pressure} hPa</CardText>
              <CardText className="weather__description" tag='h5'>{forecast.list[32].main.humidity}% humidity | {forecast.list[32].main.temp}°F</CardText>
            </Card>
          </Row>
        </div>
  );
}

ForecastCard.propTypes = {
  forecast: PropTypes.object
};
