'use client';

import { useEffect, useState } from 'react';

//import { request } from '../../services/request';
//import { UserRequest } from '../../services/request/types';

import { pagination } from '../../services/pagination';
import { PageValue } from '../../services/pagination/types';
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
  const [isOpen, setIsOpen] = useState(false);
  const [hours, setHours] = useState<UserHours>();
  const [requestsPag, setRequestsPag] = useState<PageValue>();
  const [currentPage, setCurrentPage] = useState<number>(0);

  const token = Cookies.get('token');

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
    requestPagination(currentPage);
    userHours();
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
