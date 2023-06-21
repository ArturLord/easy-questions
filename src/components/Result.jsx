import React from 'react';

import { ResultDiv, ImgRes, TitleRes, ResBtn } from '../styled/ResultStyled';

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
