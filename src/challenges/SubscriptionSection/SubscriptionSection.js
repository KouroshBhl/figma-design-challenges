import React from 'react';
import styled from 'styled-components';
import BackgroundCard from './BackgroundCard';
import Header from './Header';
import PeopleContainer from './PeopleContainer';

const SubscriptionSection = () => {
  return (
    <Wrapper>
      <div className='card-container'>
        <Card>
          <Header />
          <PeopleContainer />
        </Card>
        <BackgroundCard />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-height: 92vh;
  background-color: #f1f1f6;
  margin: 0 auto;

  .card-container {
    position: relative;
    width: 101rem;
    height: 60rem;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 2.4rem;
  box-shadow: 30px 4px 84px rgba(22, 20, 96, 0.16);
  position: relative;
  padding: 6.4rem;
  display: flex;
  flex-direction: column;
  gap: 5.4rem;
  z-index: 10;
`;

export default SubscriptionSection;
