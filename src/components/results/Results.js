import React from 'react'
import styled from 'styled-components';
import { ListResults } from './ListResults';
import { ListResults2 } from './ListResults2';
import { DiffResults } from './DiffResults';

const Container = styled.div`
  background-color: #DADAD9;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem auto 0 auto;
  width: 85%;
  height: 500px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, .19);
  padding: 1rem;

  @media (max-width:750px) {
    height: 95%;
    width: 90%;
    margin-bottom: 10px;
  }
`;

export const Results = () => {
  return (
    <Container
      className='animate__animated animate__fadeIn'
    >
      <ListResults />
      <ListResults2 />
      <DiffResults />
    </Container>
  )
}
