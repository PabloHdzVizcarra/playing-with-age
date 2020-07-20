import React, { useContext } from 'react'
import styled from 'styled-components';
import { GlobalContext } from '../../context/GlobalContext';

const Form = styled.form`

  grid-column: 3 / 5;
  padding: 3rem;
  width: 40%;
  justify-self: center;
  width: 90%;
  padding: 1rem;
  

  legend {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.4rem;
  }

  div {
    display: grid;
    flex-direction: column;
    padding: 5px;

    label {
      margin-bottom: 5px;
      font-size: 1.2rem;
    }

    input {
      border: none;
      padding: 10px;
      background-color: transparent;
      border-bottom: 2px solid white;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      

      transition: border-bottom .3s ease;

      &:hover {
        border-bottom: 2px solid #F06449;
      }

      &:focus {
        outline: none;
      }
    }
  }
`;


export const SecondForm = () => {

  const { formValues2, handleInputChange2 } = useContext(GlobalContext);
  const { name, dateOfBirth } = formValues2;
  
  

  return (
    <Form>
      <legend>Coloca los datos de alguien mas</legend>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          name='name'
          value={name}
          onChange={handleInputChange2}
        />
      </div>
      <div>
        <label>Fecha de Nacimiento</label>
        <input
          type="date"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={handleInputChange2}
          
        />
      </div>
    </Form>
  )
}