import React from 'react';
import styled from 'styled-components';
import Img1 from './asset/ice.png';

const Card = () => {
  return (
    <Wrapper>
      <Container>
        <figure>
          <img src={Img1} alt='' />
        </figure>
        <div>
          <h3 className='card-title'>Ice Mobile 10GB</h3>
          <span className='card-subtitle'>Up to 100Mbit/s</span>
        </div>
        <h4 className='price-plan'>
          <span className='price'>299,-</span>/month
        </h4>

        <button className='card-btn'>Add subscription</button>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 28.5rem;
  height: 32.6rem;
  border-radius: 1.4rem;
`;

const Container = styled.div`
  width: 100%;
  padding: 4rem;
  font-family: 'Poppins', sans-serif;
  display: flex;
  gap: 1.6rem;
  flex-direction: column;

  .card-title {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
  }

  .card-subtitle {
    font-size: 1.4rem;
    font-weight: 500;
  }
  .price-plan {
    font-size: 1.4rem;
    font-weight: 500;
    flex-grow: 1;
  }
  .price {
    font-size: 2.4rem;
    font-weight: 700;
  }

  .card-btn {
    padding: 1.6rem 2.4rem;
    background: #f4f5fa;
    border: 1px solid #f0f0f6;
    box-shadow: 0px 4px 0px #e7e7fb;
    border-radius: 41px;
    cursor: pointer;
    width: 100%;
  }
`;

export default Card;
