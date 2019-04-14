import React, { Component } from 'react';
import './style.scss';

function Item(props) {
  const { title, date, link } = props;
  return (
    <a href={link} target="_blank">
      <div>{title}</div>
      <div>{date}</div>
    </a>
  );
}

export default class NewsSection extends Component {
  render() {
    const { newsList } = this.props;
    return (
      <div className="newsSection">
        {newsList.map(item => {
          return <Item title={item.title} date={item.date} link={item.link} />;
        })}
      </div>
    );
  }
}
