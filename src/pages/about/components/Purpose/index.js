import React, { Component } from 'react';
import { about_purpose } from '../../../../service/ossURL';
import './style.scss';

export default class Purpose extends Component {
  render() {
    return (
      <div className="ry-about-purpose">
        <div className="ry-about-purpose-img-cnt">
          <img src={about_purpose.bg} />
        </div>
        <div className="ry-about-purpose-text">
          <img src={about_purpose.title1} className="title1" />
          <img src={about_purpose.title2} className="title2" />
          <img src={about_purpose.title3} className="title3" />
          <img src={about_purpose.text} className="text" />
        </div>
      </div>
    );
  }
}
