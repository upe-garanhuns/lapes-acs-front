export type ComponentProps = {
  statusCertificado: string;
  titulo: string;
  hours: number | undefined;
  eixoAtividade: string;
  atividade: string;
  requestId: number | undefined;
  certificateId: number | undefined;
};
export interface CertificateStatus {
  [key: string]: string;
}
