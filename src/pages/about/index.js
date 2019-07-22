import React, { Component } from 'react';
import AniBackground from '../../components/AniBackground';
import Bar from '../../components/Bar';
import Expectation from './components/Expectation';
import Location from './components/Location';
import Photo from './components/Photo';
import Purpose from './components/Purpose';

import { bg_about, bg_about_text } from '../../service/ossURL';
import './style.scss';
import { isMoment } from 'moment';

export default class About extends Component {
  render() {
    return (
      <div className="body">
        <AniBackground bg_url={bg_about} text_url={bg_about_text} />
        <div className="ry-split">— 关于我们 —</div>
        <Purpose />
        <Expectation />
        <Photo />
        <Location />
        <Bar />
      </div>
    );
  }
}
