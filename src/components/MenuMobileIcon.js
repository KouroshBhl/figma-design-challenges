import React from 'react';
import styled from 'styled-components';
import { device } from './responsive';

const MenuMobileIcon = () => {
  return (
    <MenuButton>
      <MenuUpLine />
      <MenuDownLine />
    </MenuButton>
  );
};

const MenuButton = styled.div`
  display: none;
  cursor: pointer;

  @media (${device.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
`;

const MenuUpLine = styled.hr`
  width: 1.8rem;
  height: 2px;
  background-color: #333;
  border: none;
  border-radius: 7px;
`;

const MenuDownLine = styled.hr`
  width: 1.8rem;
  height: 2px;
  background-color: #333;
  border: none;
  border-radius: 7px;
`;

export default MenuMobileIcon;
