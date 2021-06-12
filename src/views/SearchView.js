import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'reactstrap';
import PressureCard from '../Components/Cards/PressureCard';
import { getPressureData } from '../helpers/data/externalData';

export default function PublicSearchView({ firebaseKey, uid }) {
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
          <PressureCard
            key={pressureObj.id}
            firebaseKey={firebaseKey}
            uid={uid}
            {...pressureObj}
          />
        ))}
      </div>
    </div>
  );
}

PublicSearchView.propTypes = {
  firebaseKey: PropTypes.any,
  uid: PropTypes.any
};
