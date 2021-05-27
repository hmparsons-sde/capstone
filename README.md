## Front-end Capstone [![Netlify Status](https://api.netlify.com/api/v1/badges/ce8df96d-e54b-49a6-bae4-1ba65f9950b0/deploy-status)](https://app.netlify.com/sites/hmp-pressure/deploys)
### Project Name
"pressure"
### Overview
This project is the culmination of the front-end semester at Nashville Software School. It demonstrates timely command of React.js + CRUD functionality.

This app allows the user to find the barometric pressure in any submitted geography and to aggregate the data from multiple locations in a simple interface. The app will fetch location by city name or postal code. The user will be able to specify units of measurement - hPa, mmHg, inches Hg, or mbar. Once that reading prints to the interface, the user can continue adding readings from other locales. The user will be able to delete readings or to edit the reading. Edit functionality will include the ability to change locales or units of measurement. On the readings, the user can flag the likelihood of the pressure triggering a headache event - low, moderate, or high. The user can then organize readings into “trips.”
### Personal Motivation
As somebody living with chronic migraines, I start my day by checking the barometric pressure, so that I can anticipate my day. Now that I am able to travel, I want a simple way to keep an eye on the pressure in multiple places. My most frequent trips entail quite a few changes in altitude and, consequently, flipping through multiple apps to anticipate when I may need extra medications or darker sunglasses. 
### ERD
https://bit.ly/34j8vhe
### Wireframe
https://bit.ly/3wCW1gH
### Deployed project
https://hmp-pressure.netlify.app/
### Project board
https://github.com/hmparsons-sde/capstone/projects/1
### Feature List + User Stories
- Google authentication
- Users can create new readings.
- Users can read the readings that they have created.
- Users can update readings by changing units of measurement.
- Users can delete readings.
- Users can assign readings to separate “Trips.”
- Users can flag readings as low, moderate, or high risk.
- Users can update flags.
### Screenshots
### Loom Video Walk-through
### Sample Postman Data

GET api.openweathermap.org/data/2.5/weather?zip=37415,us&appid={API_key}
```{
    "coord": {
        "lon": -85.2802,
        "lat": 35.1273
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 295.59,
        "feels_like": 295.59,
        "temp_min": 293.66,
        "temp_max": 297.77,
        "pressure": 1018,
        "humidity": 65
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.41,
        "deg": 293,
        "gust": 1.43
    },
    "clouds": {
        "all": 100
    },
    "dt": 1622081668,
    "sys": {
        "type": 2,
        "id": 2039051,
        "country": "US",
        "sunrise": 1622025029,
        "sunset": 1622076376
    },
    "timezone": -14400,
    "id": 0,
    "name": "Chattanooga",
    "cod": 200
}
