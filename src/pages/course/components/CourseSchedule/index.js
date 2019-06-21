import React, { Component } from 'react';
import { scheduleTitle } from '../../../../service/ossURL';
import './style.scss';

function Item(props) {
  const { url, text } = props;
  return (
    <div className="course-schedule-item">
      <div className="picture">
        <img src={url} />
      </div>
      <div className="text">{text}</div>
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
            <Item url={item.url} text={item.text} key={item.url} />
          ))}
        </div>
      </div>
    );
  }
}
