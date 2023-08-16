import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap');

  html {
    background: rgb(155, 242, 200);
  }

body {
  margin: 0;
  font-family: 'Nunito', sans-serif;
  background: linear-gradient(90deg, rgba(155, 242, 200, 1) 0%, rgba(86, 180, 229, 1) 65%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

}
`;

export const AppRoot = styled.div`
  max-width: 500px;
  border-radius: 30px;
  padding: 40px;
  background-color: #fff;
  position: relative;

  &:before,
  &:after {
    content: '';
    display: block;
    height: 50px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &:before {
    width: 95%;
    bottom: -10px;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 0;
  }

  &:after {
    width: 90%;
    bottom: -20px;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 1;
  }

  @media (max-width: 768px) {
    max-width: 80vw;
    padding: 20px;
    border-radius: 15px;

    &:before,
    &:after {
      height: 20px;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }

    &:before {
      width: 100%;
      bottom: -5px;
    }

    &:after {
      width: 95%;
      bottom: -10px;
    }
  }
`;

export const Logo = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-size: 40px;
  text-align: center;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    font-size: 35px;
    margin-bottom: 40px;
  }
`;
