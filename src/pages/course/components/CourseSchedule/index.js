import React, { Component } from 'react';
import { scheduleTitle } from '../../../../service/ossURL';
import './style.scss';

function Item(props) {
  const { url, text1, text2, text3, title } = props;
  return (
    <div className="course-schedule-item">
      <div className="picture">
        <img src={url} />
      </div>
      <div className="title">{title}</div>
      <div className="text">{text1}</div>
      <div className="text">{text2}</div>
      <div className="text">{text3}</div>
    </div>
  );
}

export default class CourseSchedule extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="course-schedule">
        <div className="title">
          <img src={scheduleTitle} />
        </div>
        <div className="content">
          {list.map(item => (
            <Item
              url={item.url}
              text1={item.text1}
              text2={item.text2}
              text3={item.text3}
              title={item.title}
              key={item.url}
            />
          ))}
        </div>
      </div>
    );
  }
}
