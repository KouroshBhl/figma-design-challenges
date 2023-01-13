import React from 'react';
import styled from 'styled-components';
import { data } from './data';

const People = ({ name, job, img, id, index }) => {
  return (
    <div
      className='cards'
      style={{ transform: `translateX( ${(id - index) * 100}%)` }}
    >
      <Container>
        <img src={img} alt={name} />
        <div>
          <h3>{name}</h3>
          <h4>{job}</h4>
        </div>

        <button>View content</button>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 23.5rem;
  min-height: 20.6rem;
  padding: 2.4rem;
  gap: 1.6rem;
  color: #1e1d4e;
  text-align: center;
  position: relative;
  z-index: -10;

  img {
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
  }

  h3 {
    font-family: 'Merriweather', sans-serif;
    font-weight: 900;
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }
  h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
  }

  button {
    background-color: #1e1d4e;
    padding: 0.8rem 1.6rem;
    border: none;
    font-size: 1.4rem;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    border-radius: 2.9rem;
    cursor: pointer;
  }
`;

export default People;
