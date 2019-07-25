import React, { Component } from 'react';
import { courseYellowBg } from '../../../../service/ossURL';
import './style.scss';

export default class UsSection extends Component {
  render() {
    const { url, textPicture } = this.props;
    return (
      <div className="us-section">
        <div className="picture">
          <img src={url} />
        </div>
        <div className="text">
          <img src={textPicture} />
        </div>
      </div>
    );
  }
}
