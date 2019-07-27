import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.scss';

class NaviBar extends React.Component {
  render() {
    const routeList = [
      { name: '画室动态', link: '/news/studio' },
      { name: '国内资讯', link: '/news/nation' },
      { name: '国际资讯', link: '/news/abroad' }
    ];
    const { activeIndex } = this.props;
    return (
      <div className="ry-navi">
        {routeList.map((item, index) => {
          return (
            <Link
              className={`ry-navi-item${
                index === activeIndex ? ' active' : ''
              }`}
              key={item.name}
              to={item.link}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default withRouter(NaviBar);
