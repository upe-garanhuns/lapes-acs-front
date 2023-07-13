import { UserRequest } from '../request/types';

export interface pageValue {
  paginaAtual: number;
  requisicoes: UserRequest;
  totalItens: number;
  totalPaginas: number;
}
