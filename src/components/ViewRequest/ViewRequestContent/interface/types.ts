import { Certificate } from '../../../../services/request/types';
export type ViewRequestProps = {
  id?: number;
  dataDeSubmissao?: Date;
  requisicaoStatus?: string;
  observacao?: string;
  certificados?: Array<Certificate>;
};
export interface StatusCheckInterface {
  [key: string]: string;
}
