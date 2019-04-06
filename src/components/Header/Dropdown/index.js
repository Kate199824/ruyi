import React, { Component } from 'react';
import { Icon } from 'antd';
import './style.scss';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false
    };
  }

  onShowList = () => {
    this.setState({
      showList: true
    });
  };

  onHideList = () => {
    this.setState({
      showList: false
    });
  };

  render() {
    const { title, list = [] } = this.props;
    const { showList } = this.state;
    return (
      <div
        className="ry-dropdown"
        onMouseEnter={this.onShowList}
        onMouseLeave={this.onHideList}
      >
        <div className="ry-dropdown-title">
          {title}{' '}
          <Icon type="down" style={{ fontSize: '10px', color: '#555' }} />
        </div>
        {list.length > 0 && showList && (
          <div className="ry-dropdown-list">
            {list.map(item => {
              return (
                <div className="ry-dpd-item" key={item.name}>
                  {item.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
