import styled from 'styled-components'

export const InputContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  max-width: 380px;
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    height: 56px;
    width: 100%;
    padding: 17px;
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 4px;
    @media screen and (max-width: 460px){
      height: 30px;
      padding: 10px;
    }
  }
  input:hover {
    outline: none;
    border: 1px solid black;
  }
  input:focus {
    outline: none;
    border: 2px solid #1976d2;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  .error-message {
    min-height: 16px;
    display: block;
    color: red;
    margin-bottom: 20px;
    @media screen and (max-width: 460px){
     font-size: 12px;
    }
  }
`
