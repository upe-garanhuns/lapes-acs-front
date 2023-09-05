'use client';

import * as S from './styles';

export default function LoginInformation() {
  return (
    <S.Container>
      <S.TextContainer>
        <p>
          <strong>Bem-vindo ao ACs-UPE:</strong>
          Facilitando sua Experiência! Feito para ser seu novo parceiro para
          tornar todo o processo de registro e avaliação de atividades
          complementares mais simples e eficiente.
        </p>
        <p>
          <strong>Para Alunos:</strong> Você, discente, vai adorar como o
          ACs-UPE facilita a sua vida. Agora, você pode registrar suas
          solicitações de forma mais simplificada. Esqueça os processos manuais
          e burocráticos. Aqui, você pode acompanhar o status das suas
          requisições em tempo real, receber feedbacks e até mesmo consultar
          todo o histórico das suas atividades realizadas. E a melhor parte?
          Tudo é transparente! Você terá acesso claro aos critérios de avaliação
          e aos resultados.
        </p>
        <p>
          <strong>Para Membros Avaliadores: </strong>
          Para nossos membros avaliadores, o ACs-UPE oferece ferramentas que
          tornam o processo de avaliação mais eficaz. Com uma interface
          intuitiva e recursos que facilitam o compartilhamento de informação,
          que contribuem para uma avaliação justa e consistente. Além disso, o
          sistema gera relatórios e estatísticas para ajudar no acompanhamento
          de desempenho tanto dos alunos quanto dos avaliadores.
        </p>
      </S.TextContainer>
    </S.Container>
  );
}
