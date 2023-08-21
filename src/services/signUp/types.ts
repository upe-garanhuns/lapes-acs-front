export interface CreateUser {
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
  complemento?: string;
}
