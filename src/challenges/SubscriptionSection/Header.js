import React from 'react';
import styled from 'styled-components';
import HeaderIcons from './HeaderIcons';

const Header = () => {
  return (
    <CardHeader>
      <h1 className='header'>Subscription</h1>
      <h2 className='sub-header'>
        Support these creators by purchasing their monthly subscriptions, and
        get access to premium content:
      </h2>
      <HeaderIcons />
    </CardHeader>
  );
};

const CardHeader = styled.header`
  margin: 0 auto;
  max-width: 43rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .header {
    font-family: 'Merriweather', sans-serif;
    font-size: 2.4rem;
    font-weight: 900;
    color: #1e1d4e;
  }

  .sub-header {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    color: #1e1d4e;
  }
`;

export default Header;
