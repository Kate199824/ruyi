import request from '../request';
import { studentsWork } from './ossURL';
const prefix = '/api/course';

export const getStudentWorkList = id => {
  //return request(`${prefix}/course/studentWorkList/${id}`);
  return Promise.resolve(studentsWork);
};
