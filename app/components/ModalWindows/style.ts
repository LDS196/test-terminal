import styled from 'styled-components'
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`
export const ModalWindow = styled.div`
  @keyframes scale-up-top {
    0% {
      transform: scale(0.5);
      transform-origin: 50% 0;
    }
    100% {
      transform: scale(1);
      transform-origin: 50% 0;
    }
  }
  margin: 0 5px;
  background: #ffffff;
  padding: 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  max-width: 460px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: scale-up-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`
export const ModalWindowTitle = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 50px;
  }
  img {
    cursor: pointer;
    width: 28px;
    height: 28px;
  }
`
