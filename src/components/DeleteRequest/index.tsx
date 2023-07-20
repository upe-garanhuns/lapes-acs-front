import { deleteRequest } from '../../services/request';

import { Trash } from '@phosphor-icons/react';
export type DeleteRequestProps = {
  id: number;
  token: string;
};
export function DeleteRequest(props: DeleteRequestProps) {
  const { id, token } = props;
  const iconSize = 24;
  const Delete = async () => {
    try {
      await deleteRequest(id, token);
    } catch (error) {
      console.log(error);
    }
  };
  return <Trash size={iconSize} onClick={Delete} />;
}
