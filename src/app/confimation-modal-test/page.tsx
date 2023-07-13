'use client';

import ConfirmationModal from '../../components/ConfirmationModal';
import { RequestList } from '../../components/RequestList';

export default function page() {
  return (
    <div style={{ paddingLeft: 100 }}>
      <h1>Teste modal confirmação</h1>
      <ConfirmationModal />
      <RequestList
        id={'123456'}
        status="Indeferido"
        isDraft={false}
        initialDate="2023-07-01"
        hours={8}
      />
      <RequestList
        id={'789012'}
        status="Em análise"
        isDraft={false}
        initialDate="2023-07-02"
        hours={4}
      />
      <RequestList
        id={'345678'}
        status="Pendente"
        isDraft={true}
        initialDate="2023-07-03"
        hours={6}
      />
      <RequestList
        id={'901234'}
        status="Concluído"
        isDraft={false}
        initialDate="2023-07-04"
        hours={5}
      />
    </div>
  );
}
