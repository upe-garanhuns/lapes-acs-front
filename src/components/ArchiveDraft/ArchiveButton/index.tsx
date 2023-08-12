import { archived } from '../../../services/archived';
import * as S from './styles';

export type ArchiveRequestProps = {
  id: number;
  token: string;
  closeModal: () => void;
  failureWarning: () => void;
  onSuccess: () => void;
};

export function ArchiveButton(props: ArchiveRequestProps) {
  const { id, token, closeModal, failureWarning } = props;

  const handleArchive = async () => {
    try {
      await archived(token, id);
      props.onSuccess();
      closeModal();
    } catch (error) {
      console.log(error);
      failureWarning();
    }
  };

  return <S.ArchiveButton onClick={handleArchive}>Arquivar</S.ArchiveButton>;
}
