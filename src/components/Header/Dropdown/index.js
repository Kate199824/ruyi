import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import './style.scss';

class Dropdown extends Component {
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
    const { title, list = [], ryLink } = this.props;
    const { showList } = this.state;
    return (
      <div
        className="ry-dropdown"
        onMouseEnter={this.onShowList}
        onMouseLeave={this.onHideList}
      >
        {ryLink ? (
          <Link className="ry-dropdown-title" to={ryLink}>
            {title}{' '}
            <Icon type="down" style={{ fontSize: '10px', color: '#555' }} />
          </Link>
        ) : (
          <div className="ry-dropdown-title">
            {title}{' '}
            <Icon type="down" style={{ fontSize: '10px', color: '#555' }} />
          </div>
        )}
        {list.length > 0 && showList && (
          <div className="ry-dropdown-list">
            {list.map(item => {
              return (
                <Link className="ry-dpd-item" key={item.name} to={item.link}>
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Dropdown);
