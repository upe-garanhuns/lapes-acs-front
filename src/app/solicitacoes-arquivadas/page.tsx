'use client';

import { useEffect, useState } from 'react';

import { getArchived } from '../../services/archived';
import { UserRequest } from '../../services/request/types';
import { RequestList } from '../home/components/RequestList';
import * as S from './styles';

import { Funnel } from '@phosphor-icons/react';
import Cookies from 'js-cookie';
import moment from 'moment';

export default function SolicitacoesArquivadas() {
  const [requestList, setRequestList] = useState<Array<UserRequest>>([]);

  const token = Cookies.get('token') || '';

  useEffect(() => {
    const archiveRequest = async () => {
      const requestResponse2 = await getArchived(token);
      setRequestList(requestResponse2);
    };
    archiveRequest();
  }, [token]);

  return (
    <S.Container>
      <S.Content>
        <S.TitleDiv>
          <S.Title>Solicitações Arquivadas</S.Title>
          <S.Line />
        </S.TitleDiv>
        <S.FilterDiv>
          <S.InputRequestDiv>
            <S.RegisterInput placeholder="Pesquisar" />
            <S.IconButton>
              <Funnel size={28} weight="fill" />
            </S.IconButton>
          </S.InputRequestDiv>
        </S.FilterDiv>
        <S.RequestDiv>
          {requestList !== undefined ? (
            <>
              {requestList.map((item) => (
                <RequestList
                  status={item.requisicaoStatus}
                  id={item.id}
                  initialDate={moment(item.data).format('DD/MM/YYYY')}
                  hours={item.quantidadeDeHoras}
                  key={item.id}
                  token={token}
                  isDraft={true}
                  reloadRequestDelete={function (): void {
                    throw new Error('Function not implemented.');
                  }}
                />
              ))}
            </>
          ) : (
            <>Nao exite nenhum rrequisicao arquivada</>
          )}
        </S.RequestDiv>
      </S.Content>
    </S.Container>
  );
}
