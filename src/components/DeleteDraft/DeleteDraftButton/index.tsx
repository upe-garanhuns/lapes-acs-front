import { errorToast } from '../../../functions/errorToast';
import { sucessToast } from '../../../functions/sucessToast';
import { deleteRequest } from '../../../services/request';
import * as S from './styles';
export type DeleteRequestProps = {
  id: number;
  token: string;
  closeModal: () => void;
  failureWarning: () => void;
  onSuccess: () => void;
};
export function DeleteDraftButton(props: DeleteRequestProps) {
  const { id, token, closeModal } = props;
  const HandleDelete = async () => {
    try {
      await deleteRequest(id, token);
      props.onSuccess();
      closeModal();
      sucessToast('Rascunho excluído com sucesso!');
    } catch (error) {
      console.log(error);
      errorToast('Ocorreu um erro ao excluir o rascunho');
    }
  };

  return (
    <S.DeleteArchiveButton onClick={HandleDelete}>
      Excluir
    </S.DeleteArchiveButton>
  );
}
