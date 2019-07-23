import React, { Component } from 'react';
import { about_location, about_traffic } from '../../../../service/ossURL';
import './style.scss';

export default class Location extends Component {
  render() {
    return (
      <div className="ry-about-location">
        <div className="ry-about-location-location">
          <div className="title">
            <img src={about_location.title} />
          </div>
          <img
            className="ry-about-location-location-map"
            src={about_location.map}
          />
        </div>
        <div className="ry-about-location-traffic">
          <img className="title" src={about_traffic.title} />
          <div className="subtitle">
            <img src={about_traffic.sub1} />
          </div>
          <img className="text1" src={about_traffic.text1} />
          <div className="subtitle">
            <img src={about_traffic.sub2} />
          </div>
          <img className="text2" src={about_traffic.text2} />
        </div>
      </div>
    );
  }
}
