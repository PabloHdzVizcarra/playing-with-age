import React, { useState } from 'react'
import { Title } from './components/title/Title';
import { FormsContainer } from './components/form/FormsContainer';
import { Results } from './components/results/Results';
import styled from 'styled-components';
import { GlobalContext } from '../src/context/GlobalContext'
import { useForm, useForm2 } from './hooks/useForm';

const Button = styled.button`
  width: 10%;
  grid-column: 1 / 7;
  justify-self: center;

  color: #36382e;
  cursor: pointer;
  font-size:16px;
  font-weight: 400;
  line-height: 45px;
  margin: 0 0 2em;
  max-width: 160px; 
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, .5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388; 
} 
`;


export const App = () => {

  const initialState = {
    name: 'pablo',
    dateOfBirth : '1992-07-13',
  }

  const initialState2 = {
    name: 'lucero',
    dateOfBirth : '1996-01-12',
  }

  const [formValues, handleInputChange, reset] = useForm(initialState);
  const [formValues2, handleInputChange2, reset2] = useForm2(initialState2);
  const [changeComponent, setChangeComponent] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [error, setError] = useState({
    error: false,
    msgError: ''
  });



  const [data, setData] = useState({});


  return (
    <GlobalContext.Provider value={{
      formValues,
      formValues2,
      changeComponent,
      showButton,
      error,
      data,

      handleInputChange,
      handleInputChange2,
      setChangeComponent,
      setShowButton,
      reset,
      reset2,
      setError,
      setData
    }}>
      <Title />
      {
        changeComponent
          ? <FormsContainer/>
          : <Results />
      }

      {
        showButton &&
          <Button>
            Regresar
          </Button>
      }
    </GlobalContext.Provider>
  )
}

