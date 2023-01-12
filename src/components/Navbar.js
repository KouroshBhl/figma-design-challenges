import React from 'react';
import styled from 'styled-components';
import Socialicons from './Socialicons';
import MenuLinks from './MenuLinks';
import MenuMobileIcon from './MenuMobileIcon';

const Navbar = () => {
  return (
    <Wrapper>
      <NavbarLinks>
        <MenuMobileIcon />
        <MenuLinks />
        <Socialicons />
      </NavbarLinks>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
`;

const NavbarLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #f1f1f1;
  padding: 2.5rem 8rem;
  font-weight: 400;
  font-size: 1.4rem;
  box-shadow: inset 0px -1px 0px #000000;
`;

export default Navbar;
