import React from 'react';
import styled from 'styled-components';
import People from './People';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { data } from './data';

const PeopleContainer = () => {
  return (
    <Wrapper>
      <IoIosArrowBack className='arrow' />
      {data.map((el, id) => (
        <People key={id} {...el} />
      ))}
      <IoIosArrowForward className='arrow' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .arrow {
    height: 2.5rem;
    width: auto;
    cursor: pointer;
  }
`;

export default PeopleContainer;
