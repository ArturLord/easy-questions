import React from 'react';
import styled from 'styled-components';

import Game from './components/Game';
import Result from './components/Result';

import { listQuestions } from './questions';

const AppRoot = styled.div`
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

const Logo = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-size: 40px;
  text-align: center;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    font-size: 35px;
    margin-bottom: 40px;
  }
`;

const App = () => {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);

  const question = listQuestions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  console.log(question);

  return (
    <>
      <Logo>Easy Questions</Logo>
      <AppRoot>
        {step !== listQuestions.length ? (
          <Game
            question={question}
            listQuestions={listQuestions}
            step={step}
            onClickVariant={onClickVariant}
          />
        ) : (
          <Result correct={correct} listQuestions={listQuestions} />
        )}
      </AppRoot>
    </>
  );
};

export default App;
