# Front-end Capstone [![Netlify Status](https://api.netlify.com/api/v1/badges/ce8df96d-e54b-49a6-bae4-1ba65f9950b0/deploy-status)](https://app.netlify.com/sites/hmp-pressure/deploys)
## Project Name
"pressure"
### Overview
This project is the culmination of the front-end semester at Nashville Software School. It demonstrates timely command of React.js + CRUD functionality.

This app allows the user to find the barometric pressure in any submitted geography and to aggregate the data from multiple locations in a simple interface. The user can then organize readings into “trips.”
### Personal Motivation
As somebody living with chronic migraines, I start my day by checking the barometric pressure, so that I can anticipate my day. Now that I am able to travel, I want a simple way to keep an eye on the pressure in multiple places. My most frequent trips entail quite a few changes in altitude and, consequently, flipping through multiple apps to anticipate when I may need extra medications or darker sunglasses.
## Main Color Palette
![Capstone-Palette](https://user-images.githubusercontent.com/67122062/120078229-08b8cc00-c074-11eb-8363-3cd62a620cac.png)
## Trigger Color Palette
![trigger-palette](https://user-images.githubusercontent.com/67122062/120373559-1d989800-c2de-11eb-9a04-78441b5e8551.png)
## ERD
https://bit.ly/3wGlNAz
## Wireframe
https://bit.ly/3wCW1gH
## Deployed project
https://hmp-pressure.netlify.app/
## Project board
https://github.com/hmparsons-sde/capstone/projects/1
## Feature List + User Stories
- Google authentication
- Users can create new readings.
- Users can read the readings that they have created.
- Readings will change color to reflect the likelihood of a headache event.
    - Low - green color; range: 968 hPa - 998 hPa or 1011 hPa - 1013+ hPa
    - Moderate - yellow color; range: 999 hPa - 1002 hPa or 1008 hPa - 1010 hPa
    - High - red color; range: 1003 hPa - 1007 hPa
- Users can delete readings.
- Users can assign readings to separate “Trips.”
- Users can create new trips.
- Users can update trips - start date, end date, title, and image.
- User can delete trips.
- User can view readings saved to single trips (saved external API responses to firebase database).
- User can view single location within a single trip via nested dynamic routes.
- On page load, the user will see the 5-day forecast for the selected trip location.
- User can change the units of measurement (Celsius, Fahrenheit, or Standard) for forecast data via toggle.
- Unauthenticated visitors can search for weather data.
- Unauthenticated visitors can view the 5-day forecast for a searched city.
- App is fully responsive
### Scientific Source Material
- Okuma, Hirohisa, Yumiko Okuma, and Yasuhisa Kitagawa. 2015. “Examination of Fluctuations in Atmospheric Pressure Related to Migraine.” SpringerPlus 4 (1): 790.
- Link to digital article: https://bit.ly/3uKIn9M
## Technologies
### Languages, Frameworks + Libraries
- Javascript ES6
- HTML5
- CSS
- React.js
- Bootstrap/Reactstrap
### Tools + Packages
- npm
- Luxon
- react-responsive-modal
- react-router-dom
- styled-components
- Firebase
- axios
- Postman
- OpenWeatherMap API
- Canva
- dbdiagram
- VSCode
- Netlify
- Github
## Screenshots
## Loom Video Walk-through
## Contributors
Holly Parsons (@hmparsons-sde)

Portfolio site: https://portfolio-hp.netlify.app/
## Sample Postman Data
GET api.openweathermap.org/data/2.5/forecast?zip=37415,us&appid={API_key}
```{
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1624298400,
            "main": {
                "temp": 302.9,
                "feels_like": 306.5,
                "temp_min": 302.02,
                "temp_max": 302.9,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 981,
                "humidity": 65,
                "temp_kf": 0.88
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 75
            },
            "wind": {
                "speed": 4.91,
                "deg": 234,
                "gust": 7.72
            },
            "visibility": 10000,
            "pop": 0.84,
            "rain": {
                "3h": 1.31
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-06-21 18:00:00"
        },
        
   ...39 further readings (5 days, 3 hour increments)...
  }```

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
}```
