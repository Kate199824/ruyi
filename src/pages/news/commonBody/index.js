import React, { Component } from 'react';
import Bar from '../../../components/Bar';
import AniBackground from '../../../components/AniBackground';
import { newsBg } from '../../../service/ossURL';
import './style.scss';

export default class CommonBody extends Component {
  render() {
    const { type } = this.props;
    return (
      <div className="body" id="ry-body">
        <AniBackground bg_url={newsBg[type]} />
        <Bar />
      </div>
    );
  }
}
