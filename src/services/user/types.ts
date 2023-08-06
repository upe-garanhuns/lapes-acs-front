export interface EditUserData {
  nomeCompleto: string;
  cpf: string;
  matricula: string;
  periodo: number;
  telefone: string;
  email: string;
  senha: string;
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  numero: number;
  cursoId: number;
  uf: string;
}
export interface UserData {
  id: number;
  nomeCompleto: string;
  matricula: string;
  telefone: string;
  email: string;
  perfis: string[];
  curso: {
    id: number;
    nome: string;
  };
  periodo: number;
  verificado: boolean;
}
