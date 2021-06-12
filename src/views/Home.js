import React from 'react';
import styled from 'styled-components';
import landingpage from '../assets/landingpage.png';
import '../styles/Home.scss';

const LandingImage = styled.div`
  float: right;
  position: flex;
  object-fit: cover;
  display: block;
`;

export default function HomeView() {
  return (
    <div>
      <LandingImage>
        <img src={landingpage}></img>
      </LandingImage>
    </div>
  );
}
