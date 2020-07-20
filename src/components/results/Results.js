import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  background-color: #DADAD9;
  margin: 2rem auto 0 auto;
  width: 85%;
  height: 500px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, .19);
  padding-bottom: 1rem;
  gap: 10px;
`;

const TextContainer = styled.div`

  padding: 5rem 0 0 5rem;

`;

export const Results = () => {
  return (
    <Container>
      <TextContainer>
        <h2>Datos</h2>
        <ul>
          <li>first</li>
          <li>second</li>
          <li>third</li>
          <li>four</li>
          <li>five</li>
        </ul>
      </TextContainer>
    </Container>
  )
}
