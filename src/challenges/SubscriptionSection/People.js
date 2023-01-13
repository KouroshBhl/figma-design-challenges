import React from 'react';
import styled from 'styled-components';

const People = ({ name, job, img }) => {
  return (
    <Wrapper>
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <h4>{job}</h4>
      </div>

      <button>View content</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 23.5rem;
  height: 20.6rem;
  padding: 2.4rem;
  gap: 1.6rem;
  color: #1e1d4e;
  text-align: center;

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
