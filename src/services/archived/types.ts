import { UserRequest } from '../request/types';

export interface ArchiveInterface {
  token: string;
  id: number;
}

export interface ResponseArchiveInterface {
  requisicoes: Array<UserRequest>;
}
