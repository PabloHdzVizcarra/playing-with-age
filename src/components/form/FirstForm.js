import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../context/GlobalContext';

const Form = styled.form`

  padding: 3rem;
  width: 40%;
  grid-column: 1 / 3;
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

export const FirstForm = () => {

  const { formValues, handleInputChange } = useContext(GlobalContext);
  
  const { name, dateOfBirth } = formValues;

  return (
    <Form>
      <legend>Coloca tus datos</legend>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          name='name'
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Fecha de Nacimiento</label>
        <input
          type="date"
          name='dateOfBirth'
          value={dateOfBirth}
          onChange={handleInputChange}
        />
      </div>
    </Form>
  )
}
