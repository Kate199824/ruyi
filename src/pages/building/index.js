import React, { Component } from 'react';
import AniBackground from '../../components/AniBackground';
import Bar from '../../components/Bar';
import {
  studio_bg,
  studio_bg_text,
  studio_building_picture_list
} from '../../service/ossURL';
import './style.scss';

export default class Building extends Component {
  render() {
    return (
      <div className="body">
        <AniBackground bg_url={studio_bg} text_url={studio_bg_text} />
        <div className="ry-split">— 公寓环境 —</div>
        {studio_building_picture_list.map(item => {
          return <img src={item} className="picture-section" />;
        })}
        <Bar />
      </div>
    );
  }
}
