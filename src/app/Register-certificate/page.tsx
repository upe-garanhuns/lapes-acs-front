'use client';
import { useEffect, useState } from 'react';

import ConfirmationModal from '../../components/Confirmation/ConfirmationModal';
import { errorToast } from '../../functions/errorToast';
import { sucessToast } from '../../functions/sucessToast';
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
  const [horas, setHoras] = useState<string>('1');
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [certificateIndex, setCertificateIndex] = useState(0);
  const [isReadyToSent, setIsReadyToSent] = useState(false);

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
    if (certificateData.length > certificateIndex) {
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
    try {
      await createCertificate(
        createCerificateData,
        certificateData[certificateIndex].id ?? 0,
        token
      );
      sucessToast('Certificado cadastrado com sucesso!');
      setSelectedAtividade('0');
      setDataFinal('');
      setDataInicial('');
      setHoras('1');
      setTitulo('');
      setSelectedEixo('');
      setCertificateIndex(certificateIndex + 1);
      if (certificateData.length == certificateIndex + 1) {
        setIsReadyToSent(true);
      }
    } catch (error) {
      errorToast(
        'Ocorreu um erro ao criar um certificado! Tente novamente mais tarde!'
      );
    }
  };

  return (
    <S.Container>
      <S.Title>Etapa 2 de 3 - Preencher formulário</S.Title>
      <S.FormContainer>
        <S.InputArea>
          <S.InputGroup>
            <S.Label>Titulo:</S.Label>
            <S.Input
              type="text"
              onChange={handleChangeTitulo}
              value={titulo}
              disabled={isReadyToSent}
            />
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
              disabled={isReadyToSent}
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
              <S.Input
                type="date"
                onChange={handleChangeDataInicial}
                value={dataInicial}
                disabled={isReadyToSent}
              />
            </S.InputGroup>

            <S.InputGroup>
              <S.Label>Data final:</S.Label>
              <S.Input
                type="date"
                onChange={handleChangeDataFinal}
                value={dataFinal}
                disabled={isReadyToSent}
              />
            </S.InputGroup>
          </S.InputContainer>

          <S.InputContainer>
            <S.InputGroup>
              <S.Label>Quantidade de horas:</S.Label>
              <S.Input
                type="number"
                min={1}
                onChange={handleChangeHoras}
                value={horas}
                disabled={isReadyToSent}
              />
            </S.InputGroup>
          </S.InputContainer>

          <S.InputContainer></S.InputContainer>

          {!isReadyToSent ? (
            <S.ButtonsContainer>
              <S.SaveButton onClick={registerCertificate}>
                Salvar certificado
              </S.SaveButton>
              <S.ViewButton>Visualizar certificado</S.ViewButton>
            </S.ButtonsContainer>
          ) : (
            <></>
          )}
        </S.InputArea>
      </S.FormContainer>

      <S.CertificatesContainer>
        <S.TitleAnexados>Anexados</S.TitleAnexados>
        <S.ContainerCertificates>
          {certificateData.map((item, index) => (
            <S.CertificateItem
              key={item.id}
              color={certificateIndex == index ? '#4B629C' : '#253555'}
            >
              {certificates[index]}
            </S.CertificateItem>
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
