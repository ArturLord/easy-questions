import React from 'react';

import Game from './components/Game';
import Result from './components/Result';

import { GlobalStyle, Logo, AppRoot } from './styled/AppStyled';

import { listQuestions } from './questions';

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
      <GlobalStyle />
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
