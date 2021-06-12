import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from 'reactstrap';
import SearchResultCard from '../Components/Cards/SearchResultCard';
import { getPressureData } from '../helpers/data/externalData';

export default function SearchResultView({ firebaseKey, uid }) {
  const [pressure, setPressure] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    setShowButton((prevState) => !prevState);
  };

  const grabPressure = () => {
    getPressureData(userInput)
      .then((response) => {
        pressure.push(response);
        setPressure([...pressure]);
      });
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    grabPressure();
    setUserInput('');
  };

  const resetSearchResults = () => {
    setPressure([]);
  };

  return (
    <div>
      { !showButton ? <Button className="m-2 btn-lg justify-content-center" color='danger' onClick={handleClick}>Search</Button>
        : <Form
          onSubmit={handleSubmit}
          id="get-Pressure"
          className="shadow p-3 rounded">
            <div className="form-group">
              <h2
                id="search-title">
                  Get the Pressure
              </h2>
              <Input
                type="text"
                className="form-control"
                id="value"
                value={userInput}
                aria-describedby="location"
                onChange={handleUserInput}>
              </Input>
            </div>
          <Button
            type="submit"
            id="search-Pressure"
            outline color="dark">
              Submit
          </Button>
        </Form>
      }
      <div id="card-container">
        {pressure !== [] && <Button onClick={resetSearchResults}>Clear</Button>}
        {pressure.map((pressureObj) => (
          <SearchResultCard
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

SearchResultView.propTypes = {
  firebaseKey: PropTypes.any,
  uid: PropTypes.any
};
