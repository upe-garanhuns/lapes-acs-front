import { fetchWrapper } from '../api';
import { Course } from './types';

export const getCourses = async (token: string): Promise<Course> => {
  const response: Course = await fetchWrapper(`api/curso`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response;
};
