import React from 'react';
import styled from 'styled-components';
import header from '../assets/header.png';
import '../styles/Home.scss';

const LandingImage = styled.div`
  float: right;
  position: flex;
  object-fit: cover;
  display: block;
  width: 80%;
  margin-top: 5%;
  margin-bottom: 10%;
`;

export default function HomeView() {
  return (
    <div className='mb-5'>
      <LandingImage>
        <img src={header}></img>
      </LandingImage>
    </div>
  );
}
