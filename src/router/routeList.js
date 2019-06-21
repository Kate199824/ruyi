import React from 'react';
import { Route } from 'react-router';
import PageLoadable from '../components/Loadable/PageLoadable';

const Home = PageLoadable(() => import('../pages/home'));
const Course = PageLoadable(() => import('../pages/course'));

const ClassicalOilReproduction = PageLoadable(() =>
  import('../pages/course/classicalOilReproduction')
);
const ClassicalOilProduce = PageLoadable(() =>
  import('../pages/course/classicalOilProduce')
);
const ClassicalOilDirect = PageLoadable(() =>
  import('../pages/course/classicalOilDirect')
);

const News = PageLoadable(() => import('../pages/news'));
const Student = PageLoadable(() => import('../pages/student'));
const Studio = PageLoadable(() => import('../pages/studio'));
const About = PageLoadable(() => import('../pages/about'));

export default [
  <Route key={'home'} exact path={'/'} component={Home} />,
  <Route key={'course'} exact path={'/course'} component={Course} />,

  <Route
    key={'classicalOilDirect'}
    exact
    path={'/course/古典油画临摹'}
    component={ClassicalOilReproduction}
  />,
  <Route
    key={'classicalOilProduce'}
    exact
    path={'/course/古典油画创作'}
    component={ClassicalOilProduce}
  />,
  <Route
    key={'classicalOilReproduction'}
    exact
    path={'/course/油画直接画法'}
    component={ClassicalOilDirect}
  />,
  <Route key={'news'} exact path={'/news/:type'} component={News} />,
  <Route key={'student'} exact path={'/student'} component={Student} />,
  <Route key={'studio'} exact path={'/studio'} component={Studio} />,
  <Route key={'about'} exact path={'/about'} component={About} />
];
