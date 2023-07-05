'use client';
import { RequestList } from '../../../components/RequestList';
export default function TablePage() {
  return (
    <div>
      <RequestList
        status="Concluído"
        isDraft={false}
        label="Titulo Título Título Título Título Título titulo titulo"
        initialDate="26/05/2023"
        hours={45}
      />
      <RequestList
        status="Em análise"
        isDraft={false}
        label="Titulo"
        initialDate="26/05/2023"
        hours={45}
      />
      <RequestList
        status="Rascunho"
        isDraft={true}
        label="Titulo"
        initialDate="26/05/2023"
        hours={45}
      />
      <RequestList
        status="Concluído"
        isDraft={false}
        label="Titulo Título Título Título Título Título titulo titulo"
        initialDate="26/05/2023"
        hours={45}
      />
      <RequestList
        status="Rascunho"
        isDraft={true}
        label="Titulo Título Título Título Título Título titulo titulo"
        initialDate="26/05/2023"
        hours={45}
      />
      <RequestList
        status="Observação"
        isDraft={false}
        label="Titulo Título Título Título Título Título titulo titulo"
        initialDate="26/05/2023"
        hours={45}
      />
    </div>
  );
}
