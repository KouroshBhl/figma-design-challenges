import React from 'react';
import styled from 'styled-components';
import { device } from './asset/data';

const Header = () => {
  return (
    <Wrapper>
      <h1 className='title'>
        Get the most out of your mobile with the right subscription
      </h1>
      <h2 className='sub-title'>
        All devices come with free delivery or pickup as standard. See
        information on available shopping options for your location.
      </h2>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  max-width: 71rem;
  max-height: 15.8rem;
  text-align: center;
  margin: 0 auto;

  @media ${device.mobileL} {
    display: contents;
  }

  .title {
    font-family: 'Merriweather', sans-serif;
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 4rem;

    @media ${device.laptop} {
      font-size: 3rem;
    }
  }

  .sub-title {
    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.7rem;

    @media ${device.laptop} {
      font-size: 1.6rem;
    }
  }
`;

export default Header;
