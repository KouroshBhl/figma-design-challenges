import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Plans from './Plans';

const BuySubscription = () => {
  return (
    <Wrapper>
      <div className='container'>
        <Header />
        <Plans />
        <a href='#' className='all-subs'>
          See all subscriptions
        </a>
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
    display: flex;
    flex-direction: column;
    gap: 5.6rem;
    max-width: 130rem;
    max-height: 80.4rem;
    margin: 0 auto;
    background-color: #f4f5fa;
    box-shadow: 0px 47px 57px -26px rgba(83, 83, 145, 0.14);
    border-radius: 2.3rem;
    padding: 12rem 14.6rem;
  }
  .all-subs {
    background-color: #171435;
    padding: 1.6rem 2.4rem;
    color: #fff;
    text-decoration: none;
    align-self: center;
    border-radius: 4.1rem;
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

export default BuySubscription;
