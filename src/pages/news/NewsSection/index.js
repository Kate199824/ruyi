import React, { Component } from 'react';
import { Icon, Pagination } from 'antd';
import './style.scss';

function Item(props) {
  const { title, date, link } = props;
  return (
    <div className="newsItem">
      <a href={link} target="_blank">
        <Icon type="caret-down" style={{ color: '#444a', fontSize: '16px' }} />
        <div className="news-title">{title}</div>
      </a>
      <div className="news-date">{date}</div>
    </div>
  );
}

export default class NewsSection extends Component {
  constructor(props) {
    super(props);
    const { newsList } = props;
    this.state = {
      newsList,
      currentPage: 1,
      pageSize: 6
    };
  }

  onChange = page => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { currentPage, newsList, pageSize } = this.state;
    const list = newsList.slice(
      pageSize * (currentPage - 1),
      pageSize * currentPage
    );
    return (
      <div className="newsSection">
        {list.map(item => {
          return <Item title={item.title} date={item.date} link={item.link} />;
        })}
        <Pagination
          size="small"
          className="page"
          current={currentPage}
          pageSize={pageSize}
          defaultCurrent={1}
          onChange={this.onChange}
          total={newsList.length}
        />
      </div>
    );
  }
}
