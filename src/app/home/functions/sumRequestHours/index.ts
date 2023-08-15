import { Certificate } from '../../../../services/request/types';

export function sumRequestHours(certificados: Certificate[]) {
  let hours = 0;
  if (certificados) {
    certificados.map((certificado) => (hours += certificado.cargaHoraria));
  }
  return hours;
}
