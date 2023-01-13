import React, { useState } from 'react';
import styled from 'styled-components';
import People from './People';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { data } from './data';

const PeopleContainer = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex((prev) => prev - 1);
  };

  return (
    <Wrapper>
      <div className='arrow-container left-arrow'>
        <IoIosArrowBack className='arrow ' onClick={prevSlide} />
      </div>
      <div className='arrow-container right-arrow'>
        <IoIosArrowForward className='arrow ' onClick={nextSlide} />
      </div>
      <section className='container'>
        {data.map((el, id) => (
          <People key={id} {...el} id={id} index={index} />
        ))}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  /* overflow: hidden; */
  width: 100%;
  padding: 0 2.4rem;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 2.4rem;
    justify-content: space-between;
    align-items: center;
    /* overflow: hidden; */
  }

  .arrow-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }

  .arrow {
    height: 3rem;
    width: auto;
    cursor: pointer;
    position: relative;
  }
  .left-arrow {
    left: 0;
  }
  .right-arrow {
    right: 0;
  }
`;

export default PeopleContainer;
