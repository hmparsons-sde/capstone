import React from 'react';
import styled from 'styled-components';
import header from '../../assets/header.png';

const HeaderImage = styled.div`
  float: right;
  position: flex;
  object-fit: cover;
  display: block;
  width: 80%;
`;

export default function Header() {
  return (
    <>
      <HeaderImage className="header">
        <img src={header}></img>
      </HeaderImage>
    </>
  );
}
