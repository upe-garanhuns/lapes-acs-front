export interface PageValue {
  paginaAtual: number;
  requisicoes: Array<RequestPagination>;
  totalItens: number;
  totalPaginas: number;
}

export interface RequestPagination {
  id: number;
  dataDaSolicitacao: Date;
  quantidadeDeHoras: number;
  status: string;
}
