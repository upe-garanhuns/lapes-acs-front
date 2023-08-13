export interface UserInformation {
  id: number;
  nomeCompleto: string;
  matricula: string;
  telefone: string;
  email: string;
  perfis: Array<string>;
  curso: object;
  periodo: string;
  verificado: boolean;
}
