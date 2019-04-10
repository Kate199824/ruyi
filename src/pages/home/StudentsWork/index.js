import React, { Component } from 'react';
import { Carousel } from 'antd';
import { bg_studentsWork } from '../../../service/ossURL';
import './style.scss';

function Item(props) {
  const { title = '古典油画临摹作画过程', pics = [] } = props;
  return (
    <div className="students-work-item">
      <div className="picture-container">lalal</div>
      <div className="work-title">{title}</div>
    </div>
  );
}

export default class StudentsWork extends Component {
  render() {
    return (
      <div className="students-work">
        <div className="sw-left-part">
          <img src={bg_studentsWork} />
        </div>
        <div className="sw-right-part">
          <div className="carousel-container">
            <Carousel>
              <Item />
              <Item />
              <Item />
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}
