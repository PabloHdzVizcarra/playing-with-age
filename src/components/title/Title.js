import React from 'react'
import styled from 'styled-components';


const Contain = styled.div`

  background-color: #DADAD9;
  display: flex;
  justify-content: center;
  margin: 2rem auto 0 auto;
  width: 85%;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, .19);

  h1 {
    font-family: 'Rowdies', cursive;
    font-weight: 200;
  }
  
`;


export const Title = () => {
  return (
    <Contain>
      <h1>Datos curiosos sobre tu fecha de nacimiento</h1>
    </Contain>
  )
}
