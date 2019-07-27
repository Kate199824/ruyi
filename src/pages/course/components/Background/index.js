import React, { Component } from 'react';
import { coursePhoto } from '../../../../service/ossURL';
import './style.scss';

export default class Background extends Component {
  componentDidMount() {
    const ele = document.getElementById('ry-course-bg-img');
    // console.log(ele.scrollLeft);
  }

  render() {
    const { imageUrl } = this.props;
    return (
      <div className="ry-course-bg">
        <div className="logo-section">
          <p>以梦为马</p>
          <img src={coursePhoto.logo} />
          <p>始终如一</p>
        </div>
        <div className="img-bg-cnt">
          <img id="ry-course-bg-img" src={imageUrl} className="img-bg" />
        </div>
      </div>
    );
  }
}
