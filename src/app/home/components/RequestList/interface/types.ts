export interface RequestCardInfo {
  icon: React.JSX.Element;
  description: string;
  viewOrEdit: React.JSX.Element;
  deleteOrArchive: 'delete' | 'archive' | 'none';
}
export interface DeleteOrArchive {
  [key: string]: React.JSX.Element;
}
export type ComponentProps = {
  status: string;
  id: number;
  initialDate: string;
  hours: number;
  token: string;
  isDraft: boolean;
  type: boolean;
  reloadRequestDelete: () => void;
  reloadRequestArchive: () => void;
};
