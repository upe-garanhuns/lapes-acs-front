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
      question: 'Como funciona a conexão com o SIG@UPE?',
      answer:
        'Atualmente o Sistema não tem uma conexão direta com o SIG@UPE, ele funciona como um facilitador entre as pessoas envolvidas na avaliação das solicitações, e ao final do processo os detalhes da solicitação são enviados para a escolaridade, que atualiza o SIG@UPE'
    },
    {
      question:
        'Por que minha contagem de horas não está em dia com o SIG@UPE?',
      answer:
        'A escolaridade demora um tempo para registrar as solicitações no sistema, e não tem um prazo definido, depende da demanda de trabalho. Por não ter conexão com o SIG@UPE, solicitações feitas por fora do sistema não são contabilizadas nele.'
    },
    {
      question: 'O que é o barema?',
      answer:
        'O barema é um arquivo fornecido pela universidade, com informações sobre eixos de horas extracurriculares que servirá de guia para preenchimento de dados sobre o certificado.'
    },
    {
      question: 'Como vou saber o status da solicitação?',
      answer:
        '	Automaticamente, quando o status da solicitação alterar para qualquer um dos outros possíveis status, será enviado um e-mail ao endereço cadastrado com a atualização de seu requerimento.'
    },
    {
      question:
        'Não tenho minhas informações completas do meu certificado, o que fazer?',
      answer:
        '	A requisição do certificado pode ser guardada como rascunho caso tenha informações incompletas do arquivo ou não tenha certeza de algum dado, e queira conferir para depois preencher.'
    },
    {
      question: 'O que acontece se eu arquivar uma solicitação?',
      answer:
        '	Essa funcionalidade existe para guardar as solicitações que já chegaram ao status final, na intenção de deixar a tela principal menos poluída, isso não muda o status da solicitação. Você pode encontrar as solicitações arquivadas clicando no ícone de arquivo na barra lateral.'
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
