import React, { Component } from 'react';
import { Carousel } from 'antd';
import { bg_studentsWork, studentsWork } from '../../../service/ossURL';
import './style.scss';

export default class StudentsWork extends Component {
  render() {
    return (
      <div className="students-work">
        <div className="sw-left-part">
          <img src={bg_studentsWork} />
        </div>
        <div className="sw-right-part">
          <div className="carousel-container">
            <Carousel autoplay>
              {studentsWork.map(item => {
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
