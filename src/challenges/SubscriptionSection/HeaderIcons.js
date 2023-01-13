import React from 'react';
import styled from 'styled-components';
import { GrAttachment } from 'react-icons/gr';
import { MdOutlineLiveTv } from 'react-icons/md';
import { GrSchedule } from 'react-icons/gr';

const HeaderIcons = () => {
  return (
    <Wrapper>
      <div>
        <GrAttachment />
        <span>Source files</span>
      </div>
      <div>
        <MdOutlineLiveTv />
        <span>Live streams</span>
      </div>
      <div>
        <GrSchedule />
        <span>Meetup</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 1.6rem;

  div {
    display: flex;
    color: #1e1d4e;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    gap: 0.8rem;
    background-color: #f3f2fb;
    padding: 0.8rem 1.2rem;
    border-radius: 2rem;
  }
`;

export default HeaderIcons;
