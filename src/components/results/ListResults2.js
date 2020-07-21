import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import styled from 'styled-components';

export const ListResults2 = () => {

  const ContainData = styled.div`
    grid-column: 2 / 3;
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
      margin: 5px 0 5px 0;
      list-style: none;
      font-size: 15px;
    }

    span {
      font-weight: bold;
      font-size: 1.2rem;
    }

    @media (max-width:750px) {
      grid-column: 1 / 5;

      li {
        font-size: 14px;
        width: auto;
        margin-right: 20px;
      }
    }
    
  `;

  const { data } = useContext(GlobalContext);
  const { data2} = data;
  const { days, hours, minutes, months, name, years } = data2;
  return (
    <ContainData>
      <h2>Datos de {name}</h2>
      <ul>
        <li>Han pasado <span>{minutes}</span>  minutos desde que naciste</li>
        <li>Han pasado <span>{hours}</span> horas desde que naciste</li>
        <li>Han pasado <span>{days}</span> dias desde que naciste</li>
        <li>Han pasado <span>{months}</span> meses desde que naciste</li>
        <li>Han pasado <span>{years}</span> años desde que naciste</li>
      </ul>
    </ContainData>
  )
}