import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  gap: 20px 0;
  flex-direction: column;
  align-items: center;
`
export const Item = styled.li`
  a {
    display: block;
    text-transform: uppercase;
    font-size: 22px;
    padding: 5px;
    text-align: center;
    @media screen and (max-width: 768px){
      font-size: 18px;
    }
    @media screen and (max-width: 460px){
      font-size: 16px;
    }
  }
  border-radius: 5px;
  list-style: none;
  border: 1px solid black;
  max-width: 350px;
  width: 100%;
`
