import React, { Component } from 'react';
import './style.scss';
import Bar from '../../components/Bar';
import AniBackground from '../../components/AniBackground';
import CommonBody from './commonBody';

export default class News extends Component {
  render() {
    const { type } = this.props.match.params;
    console.log(type);

    if (type === 'studio') {
      return <CommonBody type={'studio'} className="ry-body" />;
    } else if (type === 'nation') {
      return <CommonBody type={'nation'} className="ry-body" />;
    } else if (type === 'abroad') {
      return <CommonBody type={'abroad'} className="ry-body" />;
    }
  }
}
