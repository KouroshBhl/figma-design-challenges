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
      <UpNavbar>
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
        <Socials>
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
      </UpNavbar>

      <DownNavbar>
        <ul>
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>
        </ul>
      </DownNavbar>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
`;

const UpNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #f1f1f1;
  padding: 2.5rem 8rem;
  font-weight: 400;
  font-size: 1.4rem;
  box-shadow: inset 0px -1px 0px #000000;
`;

const DownNavbar = styled.div`
  width: 100%;
  padding: 2.5rem 8rem;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

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
