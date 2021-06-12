import React, { useState } from 'react';
import { Button, Form } from 'reactstrap';
import ShowPressure from '../Components/Cards/PressureCard';
import { getPressureData } from '../helpers/data/externalData';

export default function PressureView() {
  const [pressure, setPressure] = useState([]);
  const [userInput, setUserInput] = useState('');

  const grabPressure = () => {
    getPressureData(userInput)
      .then((response) => {
        pressure.push(response);
        setPressure([...pressure]);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput('');
    grabPressure();
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <Form
      onSubmit={handleSubmit}
      id="get-Pressure"
      className="shadow p-3 rounded">
        <div className="form-group">
          <h2
            id="search-title">
              Get the Pressure
          </h2>
          <input
            type="text"
            className="form-control"
            id="value"
            aria-describedby="location"
            onChange={handleUserInput}>
          </input>
        </div>
      <Button
        type="submit"
        id="search-Pressure"
        outline color="dark">
          Submit
      </Button>
      </Form>
      <div id="card-container">
      {pressure.map((pressureObj) => (
        <ShowPressure
        key={pressureObj.id}
        {...pressureObj}
        />
      ))}
      </div>
    </div>
  );
}
