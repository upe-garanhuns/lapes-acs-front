'use client';

import ConfirmationModal from '../../components/ConfirmationModal';
import { RequestList } from '../../components/RequestList';

export default function page() {
  return (
    <div style={{ paddingLeft: 100 }}>
      <h1>Teste modal confirmação</h1>
      <ConfirmationModal />
      <RequestList
        status="Concluído"
        isDraft={false}
        label="Request 1"
        initialDate="2023-07-01"
        hours={8}
      />
      <RequestList
        status="Em análise"
        isDraft={false}
        label="Request 2"
        initialDate="2023-07-02"
        hours={4}
      />
      <RequestList
        status="Pendente"
        isDraft={true}
        label="Request 3"
        initialDate="2023-07-03"
        hours={6}
      />
      <RequestList
        status="Concluído"
        isDraft={false}
        label="Request 4"
        initialDate="2023-07-04"
        hours={5}
      />
      <RequestList
        status="Em análise"
        isDraft={false}
        label="Request 5"
        initialDate="2023-07-05"
        hours={7}
      />
      <RequestList
        status="Pendente"
        isDraft={true}
        label="Request 6"
        initialDate="2023-07-06"
        hours={3}
      />
      <RequestList
        status="Concluído"
        isDraft={false}
        label="Request 7"
        initialDate="2023-07-07"
        hours={9}
      />
      <RequestList
        status="Em análise"
        isDraft={false}
        label="Request 8"
        initialDate="2023-07-08"
        hours={2}
      />
      <RequestList
        status="Pendente"
        isDraft={true}
        label="Request 9"
        initialDate="2023-07-09"
        hours={4}
      />
      <RequestList
        status="Concluído"
        isDraft={false}
        label="Request 10"
        initialDate="2023-07-10"
        hours={6}
      />
    </div>
  );
}
