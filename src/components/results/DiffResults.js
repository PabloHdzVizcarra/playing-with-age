import React, { useContext } from 'react'
import styled from 'styled-components';
import { GlobalContext } from '../../context/GlobalContext';

export const DiffResults = () => {

  const ContainData = styled.div`
    grid-column: 1 / 5;
    justify-self: center;

    h2 {
      text-align: center;
      /* color: #f06449; */
      font-weight: 100;
      font-size: 1.8rem;
    }

    li {
      font-weight: 100;
      font-size: 17px;
      margin: 5px 10px 5px 10px;
      list-style: none;
      
    }

    span {
      font-weight: bold;
      font-size: 1.2rem;
    }
    
  `;
  
  const { data: { dataDifference } } = useContext(GlobalContext);
  const { differenceDays, differenceHours, differenceMinutes, differenceMonths, differenceYears } = dataDifference;

 

  return (
    <ContainData>
      <h2>Diferencia de datos</h2>
      <li>Tienen {differenceMinutes} Minutos de diferencia</li>
      <li>Tienen {differenceHours} Horas de diferencia</li>
      <li>Tienen {differenceDays} Dias de diferencia</li>
      <li>Tienen {differenceMonths} Meses de diferencia</li>
      <li>Tienen {differenceYears} Años de diferencia</li>
    </ContainData>
  )
}
