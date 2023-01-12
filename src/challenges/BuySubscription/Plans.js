import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { data } from './asset/data';

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
  gap: 4rem;
`;

export default Plans;
