import React from 'react';
import styled from 'styled-components';

const Card = ({ logo, title, subTitle, price, color }) => {
  console.log(color);
  return (
    <Cont>
      <Before style={{ backgroundColor: color }}></Before>
      <Wrapper>
        <Container>
          <figure>
            <img src={logo} alt={title} />
          </figure>
          <div>
            <h3 className='card-title'>{title}</h3>
            <span className='card-subtitle'>{subTitle}</span>
          </div>
          <h4 className='price-plan'>
            <span className='price'>{price},-</span>/month
          </h4>

          <button className='card-btn'>Add subscription</button>
        </Container>
      </Wrapper>
    </Cont>
  );
};

const Cont = styled.div`
  position: relative;
`;

const Before = styled.div`
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  /* background-color: #fffbec; */
  left: -8%;
  top: -8%;
  border-radius: 1.4rem;
`;

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 28.5rem;
  height: 32.6rem;
  border-radius: 1.4rem;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
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
    font-size: 1.6rem;
    font-weight: 500;
    color: #171435;
    font-family: inherit;
  }
`;

export default Card;
