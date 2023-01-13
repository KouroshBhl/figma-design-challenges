import React from 'react';
import styled from 'styled-components';

const BackgroundCard = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  width: 90%;
  height: 67.5rem;
  background: #1e1d4e;
  border-radius: 24px;
  position: absolute;
  top: -6%;
  left: 50%;
  transform: translateX(-50%);
`;

export default BackgroundCard;
