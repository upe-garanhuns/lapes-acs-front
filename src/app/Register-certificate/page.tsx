'use client';
import { useEffect, useState } from 'react';

import ConfirmationModal from '../../components/Confirmation/ConfirmationModal';
import { getActivities } from '../../services/activity';
import { Activity } from '../../services/activity/types';
import { createCertificate } from '../../services/registerCertificate';
import { CreateCertificate } from '../../services/registerCertificate/types';
import { getRequest } from '../../services/request';
import { Certificate } from '../../services/request/types';
import * as S from './style';

import Cookies from 'js-cookie';
import moment from 'moment';

export default function RegistePageTest() {
  const token = Cookies.get('token') ?? '';
  const requestId =
    typeof localStorage !== 'undefined'
      ? parseInt(localStorage.getItem('requestId') ?? '0')
      : 0;
  const certificates =
    typeof localStorage !== 'undefined'
      ? JSON.parse(localStorage.getItem('certificates') as string)
      : [];
  const [selectedEixo, setSelectedEixo] = useState('');
  const [certificateData, setCertificateData] = useState<Certificate[]>([]);
  const [activitiesData, setActivitiesData] = useState<Activity[]>([]);
  const [selectedAtividade, setSelectedAtividade] = useState<string>('0');
  const [titulo, setTitulo] = useState('');
  const [horas, setHoras] = useState<string>('0');
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const request = async () => {
      const requestResponse = await getRequest(requestId, token);
      console.log(requestResponse.certificados);
      setCertificateData(requestResponse.certificados ?? []);
    };

    const activity = async () => {
      const activityResponse = await getActivities(token);
      if (Array.isArray(activityResponse)) {
        setActivitiesData(activityResponse);
      } else {
        setActivitiesData([]);
      }
    };

    request();
    activity();

    //console.log(activitiesData);
  }, [requestId, token]);

  const handleAtividadeChange = (e: { target: { value: string } }) => {
    setSelectedAtividade(e.target.value);
    if (e.target.value != '0') {
      if (activitiesData != null) {
        const selectedAxis: Activity | undefined = activitiesData.find(
          (item) => item.id === parseInt(e.target.value)
        );
        if (selectedAxis !== undefined) {
          setSelectedEixo(selectedAxis.eixo);
        }
      }
    } else {
      setSelectedEixo('');
    }
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

  const handleIsCompleted = (): boolean => {
    if (certificateData.length > index) {
      return false;
    } else {
      return true;
    }
  };

  const createCerificateData: CreateCertificate = {
    titulo: titulo,
    dataIncial: moment(dataInicial).format('DD/MM/YYYY'),
    dataFinal: moment(dataFinal).format('DD/MM/YYYY'),
    quantidadeDeHoras: parseInt(horas),
    atividadeId: parseInt(selectedAtividade)
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
            <S.Input type="text" disabled value={selectedEixo} />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Atividade:</S.Label>
            <S.Select
              value={selectedAtividade}
              onChange={handleAtividadeChange}
            >
              <option value="0">Selecione</option>
              {activitiesData.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.descricao}
                </option>
              ))}
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
        <S.ContainerCertificates>
          {certificates.map((item: string, index: number) => (
            <S.CertificateItem key={index}>{item}</S.CertificateItem>
          ))}
        </S.ContainerCertificates>
        <S.ButtonsContainerCertificates>
          <S.Button>Voltar</S.Button>
          <ConfirmationModal handleIsCompleted={handleIsCompleted} />
        </S.ButtonsContainerCertificates>
      </S.CertificatesContainer>
    </S.Container>
  );
}
