import React, { useContext } from 'react';
import styled from 'styled-components';
import { FirstForm } from './FirstForm';
import { SecondForm } from './SecondForm';
import { GlobalContext } from '../../context/GlobalContext';
import { getData } from '../../helpers/getData';


const Forms = styled.div`

  background-color: #DADAD9;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  margin: 2rem auto 0 auto;
  width: 85%;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, .19);
  height: auto;
  padding-bottom: 1rem;

`;

const ErrorWarning = styled.div`

  grid-column: 1 / 5;
  justify-self: center;
  background-color: rgb(255 5 5 / 72%);
  width: 300px;
  color: white;
  text-transform: uppercase;
  font-weight: 900;
  border-radius: 5px;
  margin-top: 10px;

  p {
    text-align: center;
  }
`;


const Button = styled.button`
  width: 10%;
  grid-column: 1 / 5;
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

export const FormsContainer = () => {

  const { formValues, formValues2, setError, error } = useContext(GlobalContext);
  
  const { name: firstName, dateOfBirth: firstDateOfBirth } = formValues;
  const { name: secondName, dateOfBirth: secondDateOfBirth } = formValues2;
  const { error: stateError, msgError } = error;


  const handleClick = (event) => {
    event.preventDefault();
  
    if (firstName === '' || secondName === '' ) {
      setError({
        error: true,
        msgError: 'EL nombre no es valido'
      })

      return 
    } else if (firstDateOfBirth === 0 || secondDateOfBirth === 0 ) {
      setError({
        error: true,
        msgError: 'La fecha no es valida'
      })

      return
    }

    setError({
      error: false,
      msgError: ''
    });

    console.log(getData(firstDateOfBirth, secondDateOfBirth));
    
  }



  return (
    <>
      <Forms>
        {stateError && <ErrorWarning><p>{msgError}</p></ErrorWarning>}
        <FirstForm/>
        <SecondForm/>
        <Button
          onClick={handleClick}
        >
          Enviar
        </Button>
      </Forms>
    </>
  )
}
