import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { data } from './asset/data';
import { device } from './asset/data.js';

const Plans = () => {
  return (
    <Wrapper>
      {data.map((item, id) => {
        return <Card key={id} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 6rem;

  @media ${device.mobileL} {
    flex-direction: column;
    width: 100%;
  }
`;

export default Plans;
