import { UserRequest } from '../request/types';

export interface pageValue {
  paginaAtual: number;
  requisicoes: Array<UserRequest>;
  totalItens: number;
  totalPaginas: number;
}
