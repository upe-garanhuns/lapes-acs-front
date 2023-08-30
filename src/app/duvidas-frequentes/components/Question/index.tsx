import React from 'react';

import * as S from './styles';

export type ComponentProps = {
  question: string;
  answer: string;
};

export const Question: React.FC<ComponentProps> = ({ question, answer }) => {
  return (
    <S.Container>
      <S.Question>
        <S.QuestionTitle>{question}</S.QuestionTitle>
        <S.QuestionAnswer>{answer}</S.QuestionAnswer>
      </S.Question>
    </S.Container>
  );
};
