import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const BuySubscription = () => {
  return (
    <Wrapper>
      <div className='container'>
        <Header />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: #f1f1f6;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    max-width: 130rem;
    max-height: 80.4rem;
    margin: 0 auto;
    background-color: #f4f5fa;
    box-shadow: 0px 47px 57px -26px rgba(83, 83, 145, 0.14);
    border-radius: 2.3rem;
    padding: 18rem 14.6rem;
  }
`;

export default BuySubscription;
