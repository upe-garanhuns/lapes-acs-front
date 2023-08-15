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
  const { id, token, closeModal, failureWarning } = props;
  const HandleDelete = async () => {
    try {
      await deleteRequest(id, token);
      props.onSuccess();
      closeModal();
    } catch (error) {
      console.log(error);
      failureWarning();
    }
  };

  return (
    <S.DeleteArchiveButton onClick={HandleDelete}>
      Excluir
    </S.DeleteArchiveButton>
  );
}
