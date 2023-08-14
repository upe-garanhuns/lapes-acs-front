'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

//import { request } from '../../services/request';
//import { UserRequest } from '../../services/request/types';

import { errorToast } from '../../functions/errorToast';
import { sucessToast } from '../../functions/sucessToast';
import { newRequest } from '../../services/newRequest';
import { pagination } from '../../services/pagination';
import { PageValue } from '../../services/pagination/types';
import { getUserInformation } from '../../services/user';
import { UserInformation } from '../../services/user/types';
import { getUserHours } from '../../services/userHours';
import { UserHours } from '../../services/userHours/types';
import HourCount from './components/HourCount';
import { NewRequest } from './components/NewRequest';
import { RequestList } from './components/RequestList';
import * as S from './style';

import { FileText, Funnel, XCircle } from '@phosphor-icons/react';
import Cookies from 'js-cookie';
import moment from 'moment';

export default function Home() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [hours, setHours] = useState<UserHours>();
  const [requestsPag, setRequestsPag] = useState<PageValue>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [requestId, setRequestId] = useState<number>(0);
  const [userInfo, setUserInfo] = useState<UserInformation>();
  const [reloadEffect, setReloadEffect] = useState<number>(0);
  const [disableButton, setDisableButton] = useState(true);

  const token = Cookies.get('token') || '';

  useEffect(() => {
    const userHours = async () => {
      const userHoursResponse = await getUserHours(token);
      setHours(userHoursResponse);
    };
    const requestPagination = async (page: number) => {
      const paginationResponse = await pagination({
        token,
        pag: page,
        value: 3
      });
      setRequestsPag(paginationResponse);
    };
    const userInfo = async () => {
      const userResponse = await getUserInformation(token);
      setUserInfo(userResponse);
    };
    requestPagination(currentPage);
    userHours();
    userInfo();
  }, [token, currentPage, reloadEffect]);

  useEffect(() => {
    blockUserButton();
  }, []);

  const fetchRequest = async () => {
    try {
      const createNewRequest = await newRequest(token);
      setRequestId(createNewRequest);
      setIsOpen(true);
      sucessToast('Rascunho criado com sucesso');
      reloadPag();
    } catch (error) {
      errorToast('Ocorreu um erro! Só é permitido possuir dois rascunhos');
      setIsOpen(false);
    }
  };

  function openNewRequestModal() {
    fetchRequest();
  }

  function closeNewRequestModal() {
    setIsOpen(false);
  }

  function reloadPag() {
    setReloadEffect((prev) => prev + 1);
  }

  const handlePageChangeNext = () => {
    if (requestsPag !== undefined) {
      if (currentPage < requestsPag.totalPaginas - 1) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  const handlePageChangeBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const confirmationScreen = () => {
    router.push('/confirmacao-cadastro');
  };
  const blockUserButton = () => {
    if (userInfo && userInfo.verificado) {
      setDisableButton(false);
      console.log(userInfo.verificado);
    } else {
      setDisableButton(true);
    }
  };
  return (
    <S.Container>
      <S.ContentDiv>
        <S.TitleDiv>
          {userInfo && (
            <S.UserName>
              {`Bem vindo(a)`}, {userInfo.nomeCompleto.split(' ')[0]}!
            </S.UserName>
          )}

          <S.Line />
        </S.TitleDiv>
        <S.FunctionContainer>
          {userInfo && userInfo.verificado == false ? (
            <S.VerifyDiv>
              <S.VerifyMessage>
                Para acessar as funcionalidades,
                <S.VerifyBut onClick={confirmationScreen}>
                  verifique sua conta.
                </S.VerifyBut>
              </S.VerifyMessage>
            </S.VerifyDiv>
          ) : (
            <></>
          )}

          <S.Div>
            {hours ? (
              <HourCount
                gesHours={hours.horasGestao}
                extHours={hours.horasExtensao}
                pesHours={hours.horasPesquisa}
                ensHours={hours.horasEnsino}
              />
            ) : (
              <HourCount gesHours={0} extHours={0} pesHours={0} ensHours={0} />
            )}
          </S.Div>

          <S.Div>
            <S.RequestDiv>
              <S.H2Title>Solicitações em Andamento</S.H2Title>
              <S.IconButton>
                <FileText size={24} weight="bold" />
                <S.Text>Barema</S.Text>
              </S.IconButton>
            </S.RequestDiv>
            <S.NewRequestDiv>
              <S.NewRequestButton
                label="Nova Solicitação"
                onClick={openNewRequestModal}
                disabled={disableButton}
              />
              <S.InputRequestDiv>
                <S.RegisterInput placeholder="Pesquisar" />
                <S.IconButton>
                  <Funnel size={28} weight="fill" />
                </S.IconButton>
              </S.InputRequestDiv>
            </S.NewRequestDiv>

            <S.Div>
              <S.Div>
                {requestsPag && requestsPag.totalPaginas > 0 ? (
                  <>
                    {requestsPag.requisicoes.map((item) => (
                      <RequestList
                        status={item.status}
                        id={item.id}
                        initialDate={moment(item.dataDaSolicitacao).format(
                          'DD/MM/YYYY'
                        )}
                        hours={item.quantidadeDeHoras}
                        key={item.id}
                        token={token}
                        isDraft={false}
                        reloadRequestDelete={reloadPag}
                      />
                    ))}
                  </>
                ) : (
                  <S.H3Title>Nenhuma solicitação registrada...</S.H3Title>
                )}
              </S.Div>
              <S.Div>
                {requestsPag && requestsPag.totalPaginas > 1 ? (
                  <S.PaginationDiv>
                    <S.Div>
                      <S.LeftArrow
                        size={24}
                        color="#6060ff"
                        onClick={handlePageChangeBack}
                      />
                    </S.Div>

                    <S.Div>
                      <S.CurrentPageNumber>
                        <S.PageNumber>
                          {requestsPag.paginaAtual + 1}
                        </S.PageNumber>
                      </S.CurrentPageNumber>
                    </S.Div>
                    <S.Div>/</S.Div>
                    <S.Div>
                      <S.CurrentPageNumber>
                        <S.PageNumber>{requestsPag.totalPaginas}</S.PageNumber>
                      </S.CurrentPageNumber>
                    </S.Div>
                    <S.Div>
                      <S.RightArrow
                        size={24}
                        color="#5555ff"
                        onClick={handlePageChangeNext}
                      />
                    </S.Div>
                  </S.PaginationDiv>
                ) : (
                  <S.Div></S.Div>
                )}
              </S.Div>

              <S.NewRequestModal
                closeModalArea={closeNewRequestModal}
                isOpen={isOpen}
                closeModal={closeNewRequestModal}
                // eslint-disable-next-line react/no-children-prop
                children={
                  <NewRequest
                    cancelRequest={closeNewRequestModal}
                    requestId={requestId}
                    token={token}
                    isNewRequest={true}
                  />
                }
                closeText={<XCircle size={32} color="#FF0000" />}
              ></S.NewRequestModal>
            </S.Div>
          </S.Div>
        </S.FunctionContainer>
      </S.ContentDiv>
    </S.Container>
  );
}
