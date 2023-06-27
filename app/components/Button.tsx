import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  font-weight: 700;
  border-radius: 5px;
  border: none;
  background-color: green;
  padding: 10px;
  text-transform: uppercase;
  max-width: 120px;
  width: 100%;
  @media screen and (max-width: 125px) {
    font-size: 10vw;
  }
`
