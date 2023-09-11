import { useState } from 'react';

import { Activity } from '../../../../services/activity/types';
import { Certificate } from '../../../../services/request/types';

export const useConfigs = () => {
  const [certificateData, setCertificateData] = useState<Certificate[]>([]);
  const [activitiesData, setActivitiesData] = useState<Activity[]>([]);
  const [minDate, setMinDate] = useState<string>('');
  const [certificateIndex, setCertificateIndex] = useState(0);
  const [isReadyToSent, setIsReadyToSent] = useState(false);
  // const [isPdfViewerVisible, setIsPdfViewerVisible] = useState(false);
  const [isLoadingCertificates, setIsLoadingCertificates] = useState(false);
  return {
    certificateData,
    setCertificateData,
    activitiesData,
    setActivitiesData,
    minDate,
    setMinDate,
    certificateIndex,
    setCertificateIndex,
    isReadyToSent,
    setIsReadyToSent,
    //isPdfViewerVisible, setIsPdfViewerVisible
    isLoadingCertificates,
    setIsLoadingCertificates
  };
};
