import React, { Component } from 'react';
import { Carousel } from 'antd';
import { studentsWorkTitle, studentsWorkLogo } from '../../service/ossURL';
import './style.scss';

export default class StudentsWork extends Component {
  render() {
    const { studentWorkList } = this.props;
    return (
      <div className="c-students-work">
        <div className="sw-left-part">
          <div className="sw-left-part-1">
            <img src={studentsWorkLogo} />
          </div>
          <div className="sw-left-part-2">
            <img src={studentsWorkTitle} />
          </div>
        </div>
        <div className="sw-right-part">
          <div className="carousel-container">
            <Carousel autoplaySpeed={5000} autoplay>
              {studentWorkList.map(item => {
                return (
                  <div key={item} className="carousel-item">
                    <img src={item} />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}
