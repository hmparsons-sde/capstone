import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Input, Form, FormGroup
} from 'reactstrap';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import SearchResultCard from '../Components/Cards/SearchResultCard';
import { getPressureData } from '../helpers/data/externalData';

export default function SearchResultView({ firebaseKey, uid }) {
  const [pressure, setPressure] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
    console.warn('submit works');
  };

  const resetSearchResults = () => {
    setPressure([]);
  };

  return (
    <div>
      { !open ? <Button className="ml-4 mb-3 btn-lg justify-content-center" color='danger' onClick={onOpenModal}>Search</Button>
        : <Modal
          id="get-Pressure"
          open={open}
          onClose={onCloseModal}
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}>
            <div className="form-search">
              <Form autoComplete="off" onSubmit={handleSubmit}>
              <h2
                id="search-title">
                  Get the Pressure
              </h2>
              <FormGroup>
              <Input
                type="text"
                placeholder="enter city name"
                className="form-control"
                id="value"
                value={userInput}
                aria-describedby="location"
                onChange={handleUserInput}>
              </Input>
            </FormGroup>
          <Button
            type="submit"
            onSubmit={handleSubmit}
            id="search-Pressure"
            color="secondary"
            className="ml-3 btn-lg">
              Submit
          </Button>
          </Form>
          </div>
        </Modal>
      }
      <div id="card-container">
        {pressure !== [] && <Button onClick={resetSearchResults} className="ml-4 btn-lg justify-content-center">Clear</Button>}
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
