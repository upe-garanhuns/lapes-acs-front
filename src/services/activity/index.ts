import { fetchWrapper } from '../api';
import { Activity } from './types';

export const getActivities = async (token: string): Promise<Activity> => {
  const response: Activity = await fetchWrapper(`api/atividade`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response;
};
