import { getRequest } from '../../../services/request';
import * as S from './styles';

export type ArchiveRequestProps = {
  id: number;
  token: string;
  closeModal: () => void;
  failureWarning: () => void;
};

export function ArchiveDraftButton(props: ArchiveRequestProps) {
  const { id, token, closeModal, failureWarning } = props;

  const handleArchive = async () => {
    try {
      await getRequest(id, token);
      closeModal();
    } catch (error) {
      console.log(error);
      failureWarning();
    }
  };

  return (
    <S.ArchiveButton onClick={handleArchive}>
      Arquivar
    </S.ArchiveButton>
  );}