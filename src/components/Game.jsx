import React from 'react';

import { Progress, ProgressInner, TitleGame, ListGame, ListChild } from '../styled/GameStyled';

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
