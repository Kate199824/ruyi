import React, { Component } from 'react';
import './style.scss';
import '../../../service/ossURL';

function Item(props) {
  const { url, title } = props;
  return (
    <div className="magic-item">
      <img src={url} />
      <div className="magic-poster-title">{title}</div>
    </div>
  );
}

export default class PictureSection extends Component {
  render() {
    const { previosPosterList } = this.props;
    return (
      <div className="news-picture-section">
        {previosPosterList.map(item => {
          return <Item url={item.url} title={item.title} kry={item.url} />;
        })}
      </div>
    );
  }
}
