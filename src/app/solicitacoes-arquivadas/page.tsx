'use client';

import { useRouter } from 'next/navigation';
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
  const [reloadEffect, setReloadEffect] = useState<number>(0);
  const [archive, setArchive] = useState<boolean>(false);
  const router = useRouter();
  const token = Cookies.get('token') || '';

  useEffect(() => {
    const archiveRequest = async () => {
      const requestResponse = await getArchived(token);
      setRequestList(requestResponse);
    };
    setArchive(true);
    archiveRequest();
  }, [token, reloadEffect]);

  function backHome() {
    router.push('/home');
  }

  function reloadPag() {
    setReloadEffect((prev) => prev + 1);
  }

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
          <S.BackDiv>
            <S.BackButton label="Voltar" onClick={backHome} />
          </S.BackDiv>
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
                  reloadRequestArchive={reloadPag}
                  type={archive}
                />
              ))}
            </>
          ) : (
            <>
              <p>Nao exite nenhuma requisicao arquivada</p>
            </>
          )}
        </S.RequestDiv>
      </S.Content>
    </S.Container>
  );
}
