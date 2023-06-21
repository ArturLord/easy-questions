import styled from 'styled-components';

export const ResultDiv = styled.div`
  text-align: center;
`;

export const ImgRes = styled.img`
  width: 170px;
`;

export const TitleRes = styled.h1`
  padding-bottom: 10px;
  font-size: 28px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ResBtn = styled.button`
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  border-radius: 30px;
  border: 0;
  padding: 15px 30px;
  font-size: 20px;
  background: rgb(92, 238, 168);
  background: linear-gradient(90deg, rgba(92, 238, 168, 1) 0%, rgba(67, 176, 232, 1) 65%);
  color: #fff;
  margin-top: 20px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 15px 25px;
  }
`;
