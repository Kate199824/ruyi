import React from 'react';
import { Route } from 'react-router';
import PageLoadable from '../components/Loadable/PageLoadable';

const Home = PageLoadable(() => import('../pages/home'));
const IndexPage = PageLoadable(() => import('../pages/index'));

export default [
  <Route key={'home'} exact path={'/'} component={Home} />,
  <Route key={'index'} exact path={'/index'} component={IndexPage} />
];
