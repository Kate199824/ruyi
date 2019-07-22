import React, { Component } from 'react';
import { about_photo } from '../../../../service/ossURL';
import './style.scss';

export default class Photo extends Component {
  render() {
    return (
      <div className="ry-about-photo">
        <div className="ry-about-photo-logoBg">
          <img src={about_photo.logoBg} />
        </div>
        <div className="ry-about-photo-title">
          <img src={about_photo.title} />
        </div>
        <div className="ry-about-photo-photo">
          <img src={about_photo.photo} />
        </div>
      </div>
    );
  }
}
