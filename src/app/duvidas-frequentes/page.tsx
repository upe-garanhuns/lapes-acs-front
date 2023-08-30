'use client';
import React, { useEffect, useState } from 'react';

import { getUserInformation } from '../../services/user';
import { UserInformation } from '../../services/user/types';
import { Question } from './components/Question/index';
import * as S from './styles';

import Cookies from 'js-cookie';

export default function FrequentQuestions() {
  const questionsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const [userInfo, setUserInfo] = useState<UserInformation>();
  const token = Cookies.get('token') || '';
  useEffect(() => {
    const userInfo = async () => {
      const userResponse = await getUserInformation(token);
      setUserInfo(userResponse);
    };
    userInfo();
  }, [token]);

  const questions = [
    {
      question: 'Pergunta Pergunta Pergunta Pergunta Pergunta?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Donec adipiscing tristique risus nec feugiat in. In mollis nunc sed id semper risus in. Purus in mollis nunc sed id semper risus.'
    },
    {
      question: 'Pergunta Pergunta Pergunta Pergunta Pergunta?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Donec adipiscing tristique risus nec feugiat in. In mollis nunc sed id semper risus in. Purus in mollis nunc sed id semper risus.'
    },
    {
      question: 'Pergunta Pergunta Pergunta Pergunta Pergunta?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Donec adipiscing tristique risus nec feugiat in. In mollis nunc sed id semper risus in. Purus in mollis nunc sed id semper risus.'
    },
    {
      question: 'Pergunta Pergunta Pergunta Pergunta Pergunta?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Donec adipiscing tristique risus nec feugiat in. In mollis nunc sed id semper risus in. Purus in mollis nunc sed id semper risus.'
    }
  ];

  const startIndex = currentPage * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = questions.slice(startIndex, endIndex);

  const handlePageChangeNext = () => {
    if (currentPage < Math.ceil(questions.length / questionsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageChangeBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <S.Container>
      <S.Body>
        <S.TitleDiv>
          {userInfo && (
            <S.UserName>
              {`Bem vindo(a)`}, {userInfo.nomeCompleto.split(' ')[0]}!
            </S.UserName>
          )}

          <S.Line />
        </S.TitleDiv>
        <S.Title>Dúvidas Frequentes</S.Title>
        <S.InputRequestDiv>
          <S.RegisterInput placeholder="Pesquisar" />
        </S.InputRequestDiv>
        <S.Div>
          {currentQuestions.map((question, index) => (
            <Question
              key={index}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </S.Div>

        <S.Empty>
          <S.PaginationDiv>
            <S.Empty>
              <S.LeftArrow
                size={24}
                color="#6060ff"
                onClick={handlePageChangeBack}
              />
            </S.Empty>

            <S.Empty>
              <S.CurrentPageNumber>
                <S.PageNumber>{currentPage + 1}/</S.PageNumber>
              </S.CurrentPageNumber>
            </S.Empty>
            <S.Empty>
              <S.CurrentPageNumber>
                <S.PageNumber>
                  {Math.ceil(questions.length / questionsPerPage)}
                </S.PageNumber>
              </S.CurrentPageNumber>
            </S.Empty>
            <S.Empty>
              <S.RightArrow
                size={24}
                color="#5555ff"
                onClick={handlePageChangeNext}
              />
            </S.Empty>
          </S.PaginationDiv>
        </S.Empty>
      </S.Body>
    </S.Container>
  );
}
