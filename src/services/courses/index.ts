import { fetchWrapper } from '../api';
import { Course } from './types';

export const getCourses = async (): Promise<Course> => {
  const response: Course = await fetchWrapper(`api/curso`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response;
};
