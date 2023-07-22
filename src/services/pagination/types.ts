import { UserRequest } from '../request/types';

export interface PageValue {
  paginaAtual: number;
  requisicoes: Array<UserRequest>;
  totalItens: number;
  totalPaginas: number;
}
