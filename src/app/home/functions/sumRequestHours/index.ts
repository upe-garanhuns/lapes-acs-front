import { Certificate } from '../../../../services/request/types';

export function sumRequestHours(certificados: Certificate[]) {
  let hours = 0;
  certificados.map((certificado) => (hours += certificado.horas));
  return hours;
}
