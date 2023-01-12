import React from 'react';
import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';
import { BsTelephonePlusFill } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { ImInstagram } from 'react-icons/im';
import { device } from './responsive';

const Socialicons = () => {
  return (
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
  );
};

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-right: 2rem;

  @media (${device.laptop}) {
    display: none;
  }

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

export default Socialicons;
