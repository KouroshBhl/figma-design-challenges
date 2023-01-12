import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from './responsive';

const MenuLinks = () => {
  return (
    <HeaderLinks>
      <div>
        <ul className='lists'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/'>Components</NavLink>
          </li>
          <li>
            <NavLink to='/'>Hero sections</NavLink>
          </li>
          <li>
            <NavLink to='/'>About me</NavLink>
          </li>
        </ul>
      </div>
    </HeaderLinks>
  );
};

const HeaderLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;

  @media (${device.tablet}) {
    display: none;
  }

  .lists {
    display: flex;
    gap: 4rem;
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

export default MenuLinks;
