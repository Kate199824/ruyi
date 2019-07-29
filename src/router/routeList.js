import React from 'react';
import { Redirect, Route } from 'react-router';
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
const SketchFoundation = PageLoadable(() =>
  import('../pages/course/sketchFoundation')
);
const SketchMaster = PageLoadable(() => import('../pages/course/sketchMaster'));
const SketchSubtle = PageLoadable(() => import('../pages/course/sketchSubtle'));
const TampereProduce = PageLoadable(() =>
  import('../pages/course/TampereProduce')
);
const TampereReproduction = PageLoadable(() =>
  import('../pages/course/TampereReproduction')
);

const News = PageLoadable(() => import('../pages/news'));
const Student = PageLoadable(() => import('../pages/student'));
const Studio = PageLoadable(() => import('../pages/studio'));
const Building = PageLoadable(() => import('../pages/building'));
const About = PageLoadable(() => import('../pages/about'));
const Me = PageLoadable(() => import('../pages/me'));

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

  <Route
    key={'sketchFoundation'}
    exact
    path={'/course/素描造型基础'}
    component={SketchFoundation}
  />,
  <Route
    key={'sketchMaster'}
    exact
    path={'/course/大师素描提高'}
    component={SketchMaster}
  />,
  <Route
    key={'sketchSubtle'}
    exact
    path={'/course/精微素描创作'}
    component={SketchSubtle}
  />,
  <Route
    key={'tampereReproduction'}
    exact
    path={'/course/坦佩拉临摹'}
    component={TampereReproduction}
  />,
  <Route
    key={'tampereProduce'}
    exact
    path={'/course/坦佩拉创作'}
    component={TampereProduce}
  />,

  <Route key={'news'} exact path={'/news/:type'} component={News} />,
  <Route key={'student'} exact path={'/student'} component={Student} />,
  <Route key={'studio'} exact path={'/studio'} component={Studio} />,
  <Route key={'building'} exact path={'/building'} component={Building} />,
  <Route key={'about'} exact path={'/about'} component={About} />,
  <Route key={'me'} exact path={'/me'} component={Me} />,
  <Redirect from="*" to="/" />
  //<Route key={'home'} path={'*'} component={Home} />
];
