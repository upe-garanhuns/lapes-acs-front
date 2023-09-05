'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

import ConfirmationModal from '../../../components/Confirmation/ConfirmationModal';
import { errorToast } from '../../../functions/errorToast';
import { sucessToast } from '../../../functions/sucessToast';
import { getActivities } from '../../../services/activity';
import { Activity } from '../../../services/activity/types';
import { createCertificate } from '../../../services/registerCertificate';
import { CreateCertificate } from '../../../services/registerCertificate/types';
import { getRequest } from '../../../services/request';
import PdfViewer from '../PDFViewer/PDFViewer';
import { delay } from './functions/delay/delay';
import { getMaxDate } from './functions/getMaxDate';
import { useCertificate } from './hooks/useCertficate';
import { useConfigs } from './hooks/useConfigs';
import { useErros } from './hooks/useErros';
import * as S from './style';

import { Check, DownloadSimple } from '@phosphor-icons/react';
import Cookies from 'js-cookie';
interface idProps {
  params: { requestID: string };
}

export default function RegistePageTest({ params }: idProps) {
  const token = Cookies.get('token') ?? '';
  const requestId = parseInt(params.requestID);
  const initialDate = '2015-01-01';
  const router = useRouter();

  const {
    certificateData,
    setCertificateData,
    activitiesData,
    setActivitiesData,
    minDate,
    setMinDate,
    certificateIndex,
    setCertificateIndex,
    isReadyToSent,
    setIsReadyToSent,
    //isPdfViewerVisible, setIsPdfViewerVisible
    isLoadingCertificates,
    setIsLoadingCertificates
  } = useConfigs();

  const {
    errorSelectedAtividade,
    setErrorSelectedAtividade,
    errorTitulo,
    setErrorTitulo,
    errorDataInicial,
    setErrorDataInicial,
    errorDataFinal,
    setErrorDataFinal,
    errorHoras,
    setErrorHoras
  } = useErros();

  const {
    selectedAtividade,
    setSelectedAtividade,
    titulo,
    setTitulo,
    horas,
    setHoras,
    dataInicial,
    setDataInicial,
    dataFinal,
    setDataFinal,
    selectedEixo,
    setSelectedEixo
  } = useCertificate();

  const isValidInputTest = () => {
    setErrorSelectedAtividade(selectedAtividade === '0');
    setErrorTitulo(titulo === '');
    setErrorDataInicial(
      dataInicial === '' ||
        getMaxDate() < dataInicial ||
        dataInicial < initialDate
    );
    setErrorDataFinal(
      dataFinal === '' || dataInicial > dataFinal || dataFinal > getMaxDate()
    );
    setErrorHoras(
      parseInt(horas) < 1 || horas === '' || parseInt(horas) > 5000
    );
  };

  const request = useCallback(async () => {
    try {
      setIsLoadingCertificates(true);
      const requestResponse = await getRequest(requestId, token);
      setCertificateData(requestResponse.certificados ?? []);
      setIsLoadingCertificates(false);
    } catch (error) {
      setIsLoadingCertificates(false);
      console.log(error);
      errorToast('Requisição não encontrada');
      router.push('/home');
    }
  }, [requestId, router, setCertificateData, setIsLoadingCertificates, token]);

  useEffect(() => {
    const activity = async () => {
      try {
        const activityResponse = await getActivities(token);
        if (Array.isArray(activityResponse)) {
          setActivitiesData(activityResponse);
        } else {
          setActivitiesData([]);
        }
      } catch (error) {
        errorToast('Ocorreu um erro');
      }
    };

    request();
    activity();
  }, [request, requestId, router, setActivitiesData, token]);

  useEffect(() => {
    setDataInicial(
      certificateData[certificateIndex]?.dataInicial != null
        ? String(certificateData[certificateIndex].dataInicial)
        : ''
    );
    setDataFinal(
      certificateData[certificateIndex]?.dataFinal != null
        ? String(certificateData[certificateIndex].dataFinal)
        : ''
    );
    setTitulo(
      certificateData[certificateIndex]?.titulo != null
        ? String(certificateData[certificateIndex].titulo)
        : ''
    );
    setHoras(
      certificateData[certificateIndex]?.cargaHoraria != null
        ? String(certificateData[certificateIndex].cargaHoraria)
        : '1'
    );

    const selectedAxis: Activity | undefined = activitiesData.find(
      (item) => item.descricao === certificateData[certificateIndex]?.atividade
    );

    setSelectedAtividade(
      selectedAxis?.id != null ? String(selectedAxis?.id) : '0'
    );
  }, [
    activitiesData,
    certificateData,
    certificateIndex,
    setDataFinal,
    setDataInicial,
    setHoras,
    setSelectedAtividade,
    setTitulo
  ]);

  delay(5).then(() => isValidInputTest());

  const handleAtividadeChange = (e: { target: { value: string } }) => {
    setSelectedAtividade(e.target.value);
    setErrorSelectedAtividade(false);
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
      setErrorSelectedAtividade(true);
      setSelectedEixo('');
    }
  };

  const handleChangeTitulo = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setTitulo(value);
    setErrorTitulo(false);
  };

  const handleChangeHoras = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setHoras(value);
    setErrorHoras(false);
  };

  const handleChangeDataInicial = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setDataInicial(value);
    setErrorDataInicial(false);
    setMinDate(value);
  };

  const handleChangeDataFinal = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setDataFinal(value);
    setErrorDataFinal(false);
  };

  const handleEditButton = () => {
    setIsReadyToSent(false);
    setCertificateIndex(0);
    request();
    router.refresh();
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
    dataIncial: dataInicial,
    dataFinal: dataFinal,
    quantidadeDeHoras: parseInt(horas),
    atividadeId: parseInt(selectedAtividade)
  };

  const verifyInputs = () => {
    setErrorSelectedAtividade(selectedAtividade === '0');
    setErrorTitulo(titulo === '');
    setErrorDataInicial(dataInicial === '');
    setErrorDataFinal(dataFinal === '');
    setErrorDataFinal(dataInicial > dataFinal);
    setErrorHoras(
      parseInt(horas) < 1 || horas === '' || parseInt(horas) > 5000
    );

    const isValidInputs =
      !errorSelectedAtividade &&
      !errorTitulo &&
      !errorDataInicial &&
      !errorDataFinal &&
      !errorHoras;

    if (isValidInputs) {
      registerCertificate();
    }

    if (errorDataFinal) {
      errorToast('Selecione uma data final posterior a data inicial.');
    }
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
      setMinDate('');
      setCertificateIndex(certificateIndex + 1);
      // setIsPdfViewerVisible(false); // Definir como falso após salvar o certificado
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
        <S.InputGroup>
          <S.Label>Titulo:</S.Label>
          <S.Input
            type="text"
            onChange={handleChangeTitulo}
            value={titulo}
            disabled={isReadyToSent}
            required
          />
          {errorTitulo ? (
            <S.ErrorSpan>*Digite um título</S.ErrorSpan>
          ) : (
            <S.InvisibleBox />
          )}
        </S.InputGroup>
        <S.InputContainer>
          <S.InputGroup>
            <S.Label>Data inicial:</S.Label>
            <S.DateInput
              type="date"
              onChange={handleChangeDataInicial}
              value={dataInicial}
              disabled={isReadyToSent}
              max={getMaxDate()}
              min={initialDate}
            />
            {errorDataInicial ? (
              <S.ErrorSpan>*Selecione uma data válida</S.ErrorSpan>
            ) : (
              <S.InvisibleBox />
            )}
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Data final:</S.Label>
            <S.DateInput
              type="date"
              onChange={handleChangeDataFinal}
              value={dataFinal}
              disabled={isReadyToSent}
              max={getMaxDate()}
              min={minDate}
            />
            {errorDataFinal ? (
              <S.ErrorSpan>*Selecione uma data válida</S.ErrorSpan>
            ) : (
              <S.InvisibleBox />
            )}
          </S.InputGroup>
        </S.InputContainer>
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
          {errorSelectedAtividade ? (
            <S.ErrorSpan>*Selecione uma opção</S.ErrorSpan>
          ) : (
            <S.InvisibleBox />
          )}
        </S.InputGroup>
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
            {errorHoras ? (
              <S.ErrorSpan>*Entrada inválida</S.ErrorSpan>
            ) : (
              <S.InvisibleBox />
            )}
          </S.InputGroup>
        </S.InputContainer>
        <S.InputGroup>
          <S.Label>Eixo de ensino:</S.Label>
          <S.Input type="text" disabled value={selectedEixo} />
        </S.InputGroup>

        {!isReadyToSent ? (
          <S.ButtonsContainer>
            <S.SaveButton onClick={verifyInputs}>
              <S.SaveIcon>
                <DownloadSimple size={24} />
              </S.SaveIcon>
              Salvar este certificado
            </S.SaveButton>
          </S.ButtonsContainer>
        ) : (
          <S.ButtonsContainer>
            <S.SaveButton onClick={handleEditButton}>
              Editar Certificados
            </S.SaveButton>
          </S.ButtonsContainer>
        )}
      </S.FormContainer>
      <S.ContainerPdf>
        {certificateData.length > 0 && (
          <S.PdfImage>
            <PdfViewer pdfId={certificateData[certificateIndex]?.id} />
          </S.PdfImage>
        )}

        {/* pdfId={certificateData[certificateIndex]?.id.toString()} */}
      </S.ContainerPdf>
      <S.CertificatesContainer>
        <S.TitleAnexados>Anexados</S.TitleAnexados>
        <S.ContainerCertificates>
          {isLoadingCertificates ? (
            <S.CertificateItem>Carregando...</S.CertificateItem>
          ) : (
            certificateData.map((item, index) => (
              <S.CertificateItem
                key={item.id}
                color={certificateIndex === index ? '#4B629C' : '#253555'}
              >
                {`Certificado ${item.id}`}
                &nbsp;
                {certificateIndex > index ? <Check /> : <></>}
              </S.CertificateItem>
            ))
          )}
        </S.ContainerCertificates>
        <S.ButtonsContainerCertificates>
          <S.Button onClick={() => router.push('/home')}>Voltar</S.Button>
          <ConfirmationModal
            handleIsCompleted={handleIsCompleted}
            requestId={requestId}
          />
        </S.ButtonsContainerCertificates>
      </S.CertificatesContainer>
    </S.Container>
  );
}
