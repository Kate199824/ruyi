import React, { Component } from 'react';
import AniBackground from '../../components/AniBackground';
import Bar from '../../components/Bar';
import {
  student_bg,
  student_bg_text,
  student_work_list
} from '../../service/ossURL';
import './style.scss';

function Item(props) {
  const { type, imageUrl, text, title } = props;
  if (type === 0) {
    return (
      <div className="ry-student-item">
        <div className="ry-student-item-pic">
          <img src={imageUrl} />
        </div>
        <div className="ry-student-item-content">
          <div className="ry-student-item-title">{title}</div>
          <div className="ry-student-item-text">{text}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ry-student-item-2">
        <div className="ry-student-item-content">
          <div className="ry-student-item-title">{title}</div>
          <div className="ry-student-item-text">{text}</div>
        </div>
        <div className="ry-student-item-pic">
          <img src={imageUrl} />
        </div>
      </div>
    );
  }
}

export default class Student extends Component {
  render() {
    return (
      <div className="body">
        <AniBackground bg_url={student_bg} text_url={student_bg_text} />
        <div className="ry-split">— 学员心得 —</div>
        {student_work_list.map((item, index) => (
          <Item
            type={index % 2}
            imageUrl={item.url}
            text={item.text}
            title={item.title}
          />
        ))}
        <Bar />
      </div>
    );
  }
}
