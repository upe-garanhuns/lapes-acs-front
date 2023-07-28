'use client';
import { useState } from 'react';

import { createCertificate } from '../../services/registerCertificate';
import { CreateCertificate } from '../../services/registerCertificate/types';
import * as S from './style';

import Cookies from 'js-cookie';
import moment from 'moment';

export default function RegistePageTest() {
  const token = Cookies.get('token');
  const [selectedEixo, setSelectedEixo] = useState();
  const [selectedAtividade, setSelectedAtividade] = useState<number>();
  const [titulo, setTitulo] = useState('');
  const [horas, setHoras] = useState<number>();
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');

  const handleEixoChange = (event) => {
    setSelectedEixo(event.target.value);
  };

  const handleAtividadeChange = (event) => {
    setSelectedAtividade(event.target.value);
  };

  const handleChangeTitulo = (e) => {
    const { value } = e.target;
    setTitulo(value);
  };

  const handleChangeHoras = (e) => {
    const { value } = e.target;
    setHoras(value);
  };

  const handleChangeDataInicial = (e) => {
    const { value } = e.target;
    setDataInicial(value);
  };

  const handleChangeDataFinal = (e) => {
    const { value } = e.target;
    setDataFinal(value);
  };

  const createCerificateData: CreateCertificate = {
    titulo: titulo,
    dataIncial: moment(dataInicial).format('MM/DD/YYYY'),
    dataFinal: moment(dataFinal).format('MM/DD/YYYY'),
    quantidadeDeHoras: horas,
    atividadeId: 36
  };

  const registerCertificate = async () => {
    try {
      const fetchCertificate = await createCertificate(
        createCerificateData,
        154,
        token
      );
      alert('certificado cadastrado!');
      console.log(fetchCertificate);
    } catch (error) {
      alert('Houve algum erro ao tentar cadastrar!');
    }
  };

  return (
    <S.Container>
      <S.Title>Etapa 2 de 3 - Preencher formulário</S.Title>
      <S.FormContainer>
        <S.InputArea>
          <S.InputGroup>
            <S.Label>Titulo:</S.Label>
            <S.Input type="text" onChange={handleChangeTitulo} />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Eixo de ensino:</S.Label>
            <S.Select value={selectedEixo} onChange={handleEixoChange}>
              <option value="">Selecione</option>
              <option value="eixo1">Eixo 1</option>
              <option value="eixo2">Eixo 2</option>
              <option value="eixo3">Eixo 3</option>
            </S.Select>
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Atividade:</S.Label>
            <S.Select
              value={selectedAtividade}
              onChange={handleAtividadeChange}
            >
              <option value="">Selecione</option>
              <option value="37">Cursos de capacitação profissional</option>
            </S.Select>
          </S.InputGroup>
        </S.InputArea>

        <S.InputArea>
          <S.InputContainer>
            <S.InputGroup>
              <S.Label>Data inicial:</S.Label>
              <S.Input type="date" onChange={handleChangeDataInicial} />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label>Data final:</S.Label>
              <S.Input type="date" onChange={handleChangeDataFinal} />
            </S.InputGroup>
          </S.InputContainer>

          <S.InputContainer>
            <S.InputGroup>
              <S.Label>Quantidade de horas:</S.Label>
              <S.Input type="number" onChange={handleChangeHoras} />
            </S.InputGroup>
          </S.InputContainer>

          <S.InputContainer></S.InputContainer>

          <S.ButtonsContainer>
            <S.SaveButton onClick={registerCertificate}>
              Salvar certificado
            </S.SaveButton>
            <S.ViewButton>Visualizar certificado</S.ViewButton>
          </S.ButtonsContainer>
        </S.InputArea>
      </S.FormContainer>

      <S.CertificatesContainer>
        <S.TitleAnexados>Anexados</S.TitleAnexados>
        <S.CertificateItem>Nome do Arquivo 1</S.CertificateItem>
        <S.CertificateItem>Nome do Arquivo 2</S.CertificateItem>
        <S.ButtonsContainerCertificates>
          <S.Button>Voltar</S.Button>
          <S.ButtonEnviar>Enviar solicitação</S.ButtonEnviar>
        </S.ButtonsContainerCertificates>
      </S.CertificatesContainer>
    </S.Container>
  );
}
