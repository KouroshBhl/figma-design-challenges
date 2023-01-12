import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { BsTelephonePlusFill } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { ImInstagram } from 'react-icons/im';

const Navbar = () => {
  return (
    <Wrapper>
      <NavbarLinks>
        <HeaderLinks>
          <h2>LOGO</h2>
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
        <Socials>
          <ContactInfo>
            <div className='flex-center'>
              <MdEmail className='contact-icons' />
              <a href='mailto:kourosh9bhl@gmail.com'>kourosh9bhl@gmail.com</a>
            </div>
            <div className='flex-center'>
              <BsTelephonePlusFill className='contact-icons' />
              <a href='tel:+989356664280'>(+98) 9356664280</a>
            </div>
          </ContactInfo>
          <div>
            <a href='https://www.linkedin.com/in/kourosh-baharloo/'>
              <ImLinkedin className='social-icons' />
            </a>
          </div>
          <div>
            <a href='https://instagram.com/kouroshbhl'>
              <ImInstagram className='social-icons' />
            </a>
          </div>
        </Socials>
      </NavbarLinks>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
`;

const HeaderLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;

  .lists {
    display: flex;
    gap: 4rem;
  }
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

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-right: 2rem;

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
  }

  .contact-icons {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 1.2rem;

  .social-icons {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export default Navbar;
