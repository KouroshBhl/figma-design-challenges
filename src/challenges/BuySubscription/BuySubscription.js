import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Plans from './Plans';
import { Inspired } from '../../components/Inspired';
import { device } from './asset/data';

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
      <Inspired
        name='uidesigndaily'
        url='https://uidesigndaily.com/posts/figma-buy-subscription-section-pricing-card-day-1574'
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  background-color: #f1f1f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobileL} {
    padding-bottom: 3rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 5.6rem;
    max-width: 130rem;
    margin: 0 auto;
    background-color: #f4f5fa;
    box-shadow: 0px 47px 57px -26px rgba(83, 83, 145, 0.14);
    border-radius: 2.3rem;
    padding: 5rem 13.6rem;
    justify-content: center;
    align-items: center;

    @media ${device.laptop} {
      width: 100%;
      padding: 5rem 4rem;
    }

    @media ${device.mobileL} {
      width: 100%;
      padding: 3rem 3rem 3rem 4rem;
    }
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
