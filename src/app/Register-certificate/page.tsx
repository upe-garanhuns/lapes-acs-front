'use client';
import { useEffect, useState } from 'react';

import ConfirmationModal from '../../components/Confirmation/ConfirmationModal';
import { createCertificate } from '../../services/registerCertificate';
import { CreateCertificate } from '../../services/registerCertificate/types';
import { getRequest } from '../../services/request';
import { Certificate } from '../../services/request/types';
import * as S from './style';

import Cookies from 'js-cookie';
import moment from 'moment';

export default function RegistePageTest() {
  const token = Cookies.get('token') ?? '';
  const requestId = parseInt(localStorage.getItem('requestId') ?? '0');
  const [selectedEixo, setSelectedEixo] = useState('');
  const [certificateData, setCertificateData] = useState<Certificate[]>([]);
  const [selectedAtividade, setSelectedAtividade] = useState<string>('');
  const [titulo, setTitulo] = useState('');
  const [horas, setHoras] = useState<string>('0');
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const request = async () => {
      const requestResponse = await getRequest(requestId, token);
      setCertificateData(requestResponse.certificados ?? []);
    };
    request();
  }, [requestId, token]);

  const handleEixoChange = (e: { target: { value: string } }) => {
    setSelectedEixo(e.target.value);
  };

  const handleAtividadeChange = (e: { target: { value: string } }) => {
    setSelectedAtividade(e.target.value);
  };

  const handleChangeTitulo = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setTitulo(value);
  };

  const handleChangeHoras = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setHoras(value);
  };

  const handleChangeDataInicial = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setDataInicial(value);
  };

  const handleChangeDataFinal = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setDataFinal(value);
  };

  const createCerificateData: CreateCertificate = {
    titulo: titulo,
    dataIncial: moment(dataInicial).format('DD/MM/YYYY'),
    dataFinal: moment(dataFinal).format('DD/MM/YYYY'),
    quantidadeDeHoras: parseInt(horas),
    atividadeId: 36
  };

  const registerCertificate = async () => {
    console.log('index antes do if' + index);
    if (certificateData.length > index) {
      try {
        console.log(createCerificateData);
        console.log('index antes: ' + index);
        await createCertificate(
          createCerificateData,
          certificateData[index].id ?? 0,
          token
        );
        alert('certificado cadastrado!');
        setIndex(index + 1);
        console.log('index depois: ' + index);
        //console.log(certificateData[index]);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    } else {
      alert('Todos os certificados já foram cadastrados');
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
          <ConfirmationModal />
        </S.ButtonsContainerCertificates>
      </S.CertificatesContainer>
    </S.Container>
  );
}
