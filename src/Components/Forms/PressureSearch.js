import { Button } from 'bootstrap';
import React, { useState } from 'react';
import getPressureData from '../../helpers/data/externalData';

function PressureSearch() {
  const [userInput, setUserInput] = useState('');
  const [data, setData] = useState(null);

  async function getPressure() {
    await getPressureData(userInput)
      .then((response) => setData(response));
  }

  return (
    <div className='PressureCard'>
      <div className='hiddenDiv'>
        {userInput
          ? <div className="PressureContainer">
            <h1>{data.name}</h1>
            <img src={`http://openweathermap.org/img/wn/${data.Pressure[0].icon}@2x.png`} alt="img" />
            <h1>{data.main.pressure} hPa</h1>
          </div>
          : null}
      </div>
      <div className="formContainer">
        <form onSubmit={(e) => {
          e.preventDefault();
          getPressure();
        }}>
          <h2>pressure</h2>
          <input
            type="text"
            placeholder="Enter city name or zip code"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <br/>
          <Button className="mt-2" color="info" type="submit">Submit</Button>
          </form>
        </div>
    </div>
  );
}

export default PressureSearch;
