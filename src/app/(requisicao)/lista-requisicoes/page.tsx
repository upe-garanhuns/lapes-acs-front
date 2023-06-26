'use client';
import { Solicitacao } from '../../../components/Solicitacao';
export default function TablePage() {
  return (
    <div>
      <h1>Página de requisições</h1>
      <Solicitacao
        status="Concluído"
        isDraft={true}
        label="Titulo Título Título Título Título Título titulo titulo"
        initialDate="26/05/2023"
        hours={45}
      />
      <Solicitacao
        status="Em análise"
        isDraft={false}
        label="Titulo"
        initialDate="26/05/2023"
        hours={45}
      />
      <Solicitacao
        status="Rascunho"
        isDraft={false}
        label="Titulo"
        initialDate="26/05/2023"
        hours={45}
      />
    </div>
  );
}
