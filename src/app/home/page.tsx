'use client';

import { useEffect, useState } from 'react';

//import { request } from '../../services/request';
//import { UserRequest } from '../../services/request/types';

import { pagination } from '../../services/pagination';
import { pageValue } from '../../services/pagination/types';
import HourCount from './components/HourCount';
import { NewRequest } from './components/NewRequest';
import { RequestList } from './components/RequestList';
import { sumRequestHours } from './functions/sumRequestHours';
import * as S from './style';

import { FileText, Funnel, XCircle } from '@phosphor-icons/react';
import Cookies from 'js-cookie';
import moment from 'moment';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  //const [requests, setRequests] = useState<UserRequest[]>([]);
  const [requestsPag, setRequestsPag] = useState<pageValue>();
  const [currentPage, setCurrentPage] = useState<number>(0);

  const token = Cookies.get('token');

  useEffect(() => {
    /*const userRequest = async () => {
      const requestResponse = await request(token);
      setRequests(requestResponse);
    };*/
    const requestPagination = async (page: number) => {
      const paginationResponse = await pagination({
        token,
        pag: page,
        value: 3
      });
      setRequestsPag(paginationResponse);
    };

    //userRequest();
    requestPagination(currentPage);
  }, [token, currentPage]);

  function openNewRequestModal() {
    setIsOpen(true);
  }

  function closeNewRequestModal() {
    setIsOpen(false);
  }

  const handlePageChangeNext = () => {
    if (currentPage < requestsPag.totalPaginas - 1) {
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
      <S.ContentDiv>
        <S.TitleDiv>
          <S.UserName>Bem vindo, Fulano!</S.UserName>
          <S.Line />
        </S.TitleDiv>
        <S.FunctionContainer>
          <div>
            <HourCount gesHours={3} extHours={10} pesHours={30} ensHours={5} />
          </div>

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
                {requestsPag && requestsPag.totalPaginas > 1 ? (
                  <>
                    {requestsPag.requisicoes.map((item) => (
                      <RequestList
                        status={item.requisicaoStatus}
                        id={item.id}
                        initialDate={moment(item.data).format('DD/MM/YYYY')} //new Date(item.data).toLocaleDateString('pt-br')
                        hours={sumRequestHours(item.certificados)}
                        key={item.id}
                        token={token}
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
                children={<NewRequest cancelRequest={closeNewRequestModal} />}
                closeText={<XCircle size={32} color="#FF0000" />}
              ></S.NewRequestModal>
            </S.Div>
          </S.Div>
        </S.FunctionContainer>
      </S.ContentDiv>
    </S.Container>
  );
}
