import request from '../request';
import { posters, studentsWork, photos } from './ossURL';
const prefix = '/api/home';

export const getPosterList = () => {
  return request(`${prefix}/posterList`);
  // return Promise.resolve(posters);
};

export const getStudentWorkList = () => {
  return request(`${prefix}/studentWorkList`);
  // return Promise.resolve(studentsWork);
};

export const getPhotoList = () => {
  return request(`${prefix}/photoList`);
  // return Promise.resolve(photos);
};
