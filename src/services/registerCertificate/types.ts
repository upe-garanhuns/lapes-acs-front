export interface CreateCertificate {
  titulo: string;
  dataIncial: string;
  dataFinal: string;
  quantidadeDeHoras: number | undefined;
  atividadeId: number;
}
