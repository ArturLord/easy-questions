import React from 'react';
import styled from 'styled-components';

const ResultDiv = styled.div`
  text-align: center;
`;

const ImgRes = styled.img`
  width: 170px;
`;

const TitleRes = styled.h1`
  padding-bottom: 10px;
  font-size: 28px;
`;

const ResBtn = styled.button`
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
`;

const Result = ({ correct, listQuestions }) => {

  const pluralize = (number, titles) => {
    const index = ((number % 100 >= 11 && number % 100 <= 14) || (number % 10 === 0) || (number % 10 >= 5)) ? 2 : (number % 10 === 1 ? 0 : 1);
    return number + ' ' + titles[index];
  };

  return (
    <ResultDiv>
      <ImgRes src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614548957_7-p-salyut-na-belom-fone-10.jpg" />
      <TitleRes>
        Вы отгадали {pluralize(correct, ['ответ', 'ответа', 'ответов'])} из {listQuestions.length}
      </TitleRes>
      <a href="/">
        <ResBtn>Попробовать снова</ResBtn>
      </a>
    </ResultDiv>
  );
};

export default Result;
