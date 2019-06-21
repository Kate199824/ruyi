import request from '../request';
import { currentActivity, previosActivity, fake_news } from './ossURL';
const prefix = '/api/news';

export const getCurrentPoster = () => {
  // return request(`${prefix}/currentPoster`);
  return Promise.resolve(currentActivity);
};

export const getPreviosPosterList = () => {
  // return request(`${prefix}/previosPosterList`);
  return Promise.resolve(previosActivity);
};

export const getStudioNewsList = () => {
  // return request(`${prefix}/studioNewsList`);
  return Promise.resolve(fake_news);
};

export const getNationNewsList = () => {
  // return request(`${prefix}/nationNewsList`);
  return Promise.resolve(fake_news);
};

export const getAbroadNewsList = () => {
  // return request(`${prefix}/abroadNewsList`);
  return Promise.resolve(fake_news);
};
