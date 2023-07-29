import { deleteRequest } from '../../../services/request';
import * as S from './styles';
export type DeleteRequestProps = {
  id: number;
  token: string;
  type: boolean;
  closeModal: () => void;
  failureWarning: () => void;
};
export function DeleteDraftButton(props: DeleteRequestProps) {
  const { id, token, type, closeModal, failureWarning } = props;
  const HandleDelete = async () => {
    try {
      await deleteRequest(id, token);

      closeModal();
    } catch (error) {
      console.log(error);
      failureWarning();
    }
  };

  return (
    <S.DeleteArchiveButton onClick={type ? HandleDelete : undefined}>
      {type ? 'Excluir' : 'Arquivar'}
    </S.DeleteArchiveButton>
  );
}
