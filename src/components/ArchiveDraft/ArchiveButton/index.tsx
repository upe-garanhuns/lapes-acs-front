import { DontArchived, archived } from '../../../services/archived';
import * as S from './styles';

export type ArchiveRequestProps = {
  id: number;
  token: string;
  type: boolean;
  closeModal: () => void;
  failureWarning: () => void;
  onSuccess: () => void;
};

export function ArchiveButton(props: ArchiveRequestProps) {
  const { id, token, closeModal, failureWarning } = props;

  const handleArchive = async () => {
    console.log(props.type);
    try {
      if (props.type == true) {
        await DontArchived(token, id);
      } else {
        await archived(token, id);
      }
      props.onSuccess();
      closeModal();
    } catch (error) {
      console.log(error);
      failureWarning();
    }
  };

  return (
    <S.ArchiveButton onClick={handleArchive}>
      {props.type === false ? 'Arquivar' : 'Desarquivar'}
    </S.ArchiveButton>
  );
}
