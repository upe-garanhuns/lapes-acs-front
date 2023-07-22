import { deleteRequest } from '../../services/request';
import * as S from './styles';
export type DeleteRequestProps = {
  id: number;
  token: string;
  type: boolean;
};
export function DeleteRequest(props: DeleteRequestProps) {
  const { id, token, type } = props;
  const Delete = async () => {
    try {
      await deleteRequest(id, token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.DeleteArchiveButton onClick={type ? Delete : null}>
      {type ? 'Excluir' : 'Arquivar'}
    </S.DeleteArchiveButton>
  );
}
