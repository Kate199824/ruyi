import React, { Component } from 'react';
import { courseYellowBg, headerLogo } from '../../../../service/ossURL';
import './style.scss';

export default class IntroSection extends Component {
  render() {
    const { url, title = '标题', content = '..' } = this.props;
    return (
      <div className="intro-section">
        <div className="text">
          <div className="title">
            <img src={headerLogo} />
            <span>{title}</span>
          </div>
          <div className="content">{content}</div>
        </div>
        <div className="picture">
          <img src={url} />
        </div>
      </div>
    );
  }
}
