import React from 'react';
import styled from 'styled-components';

const Progress = styled.div`
  height: 10px;
  border-radius: 30px;
  background-color: rgb(223, 219, 219);
  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    height: 5px;
    margin-bottom: 15px;
  }
`;

const ProgressInner = styled.div`
  height: 100%;
  border-radius: 30px;
  width: 80%;
  background: rgb(18, 231, 48);
  transition: all 0.3s ease-in-out;
  background: linear-gradient(90deg, rgba(18, 231, 48, 1) 0%, rgba(0, 212, 255, 1) 100%);
`;

const TitleGame = styled.h1`
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

const ListGame = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListChild = styled.li`
  padding: 15px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 5px;
  }
`;

const Game = ({ question, listQuestions, step, onClickVariant }) => {
  const progress = Math.round((step / listQuestions.length) * 100);

  return (
    <>
      <Progress>
        <ProgressInner style={{ width: `${progress}%` }}></ProgressInner>
      </Progress>
      <TitleGame>{question.title}</TitleGame>
      <ListGame>
        {question.variants.map((text, i) => (
          <ListChild onClick={() => onClickVariant(i)} key={i}>
            {text}
          </ListChild>
        ))}
      </ListGame>
    </>
  );
};

export default Game;
