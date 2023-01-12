import React from 'react';
import styled from 'styled-components';
import { FiFigma } from 'react-icons/fi';

export const Inspired = ({ name, url }) => {
  return (
    <Wrapper className='inspired' href={url}>
      Inspired by {name} <FiFigma className='icon' />
    </Wrapper>
  );
};
const Wrapper = styled.a`
  text-decoration: none;
  margin-top: 2.4rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .icon {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
