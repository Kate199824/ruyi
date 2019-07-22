import React, { Component } from 'react';
import { about_expectation } from '../../../../service/ossURL';
import './style.scss';

export default class Expectation extends Component {
  render() {
    return (
      <div className="ry-about-expectation">
        <div className="ry-about-expectation-img-cnt">
          <img src={about_expectation.bg} />
        </div>
        <div className="ry-about-expectation-text">
          <img src={about_expectation.title1} className="title1" />
          <img src={about_expectation.title2} className="title2" />
          <img src={about_expectation.text} className="text" />
        </div>
      </div>
    );
  }
}
