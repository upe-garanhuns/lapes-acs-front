import { errorToast } from '../../../functions/errorToast';
import { sucessToast } from '../../../functions/sucessToast';
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
  const { id, token, closeModal } = props;

  const handleArchive = async () => {
    try {
      if (props.type == true) {
        await DontArchived(token, id);
        sucessToast('Rascunho desarquivado com sucesso!');
      } else {
        await archived(token, id);
        sucessToast('Rascunho arquivado com sucesso!');
      }
      props.onSuccess();
      closeModal();
    } catch (error) {
      console.log(error);
      errorToast('Ocorreu um erro ao arquivar o rascunho');
    }
  };

  return (
    <S.ArchiveButton onClick={handleArchive}>
      {props.type === false ? 'Arquivar' : 'Desarquivar'}
    </S.ArchiveButton>
  );
}
