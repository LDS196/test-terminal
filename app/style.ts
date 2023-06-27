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
    font-size: 3vw;
    padding: 5px;
    text-align: center;
  }
  border-radius: 5px;
  list-style: none;
  border: 1px solid black;
  max-width: 200px;
  width: 100%;
`
