import React from 'react';
import { Route } from 'react-router';
import PageLoadable from '../components/Loadable/PageLoadable';

const Home = PageLoadable(() => import('../pages/home'));
const Course = PageLoadable(() => import('../pages/course'));
const News = PageLoadable(() => import('../pages/news'));
const Student = PageLoadable(() => import('../pages/student'));
const Studio = PageLoadable(() => import('../pages/studio'));
const About = PageLoadable(() => import('../pages/about'));

export default [
  <Route key={'home'} exact path={'/'} component={Home} />,
  <Route key={'course'} exact path={'/course'} component={Course} />,
  <Route key={'news'} exact path={'/news'} component={News} />,
  <Route key={'Student'} exact path={'/student'} component={Student} />,
  <Route key={'Studio'} exact path={'/studio'} component={Studio} />,
  <Route key={'About'} exact path={'/about'} component={About} />
];
