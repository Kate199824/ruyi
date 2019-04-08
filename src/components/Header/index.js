import React, { Component } from 'react';
import HeaderIcon from './headerLogo.png';
import Dropdown from './Dropdown/index';
import { Link, withRouter } from 'react-router-dom';
import './style.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toTop: false
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
      this.setState({
        toTop: window.scrollY > 30
      });
    });

    window.addEventListener('touchmove', () => {
      // const ele = document.getElementById('ry-header').getBoundingClientRect();
      console.log(
        '--',
        document.documentElement.scrollTop,
        document.body.scrollTop,
        window.pageYOffset
      );
    });
    this.setState({
      toTop: document.body.scrollTop > 30
    });
  }
  render() {
    const { toTop } = this.state;
    const list1 = [
      { name: '油画直接画法', link: '/course' },
      { name: '古典油画临摹', link: '/course' },
      { name: '素描造型基础', link: '/course' },
      { name: '素描创作绘画', link: '/course' },
      { name: '超写实素描', link: '/course' }
    ];
    const list2 = [
      { name: '画室动态', link: '/news' },
      { name: '国内资讯', link: '/news' },
      { name: '国际资讯', link: '/news' }
    ];
    const classname = toTop ? 'ry-header ry-header__top' : 'ry-header';
    return (
      <div className={classname} id="ry-header">
        <Link className="ry-header-icon" to="/">
          <img src={HeaderIcon} />
        </Link>
        <div className="ry-header-ct">
          <Dropdown title={'课程详情'} list={list1} />
          <Dropdown title={'新闻咨询'} list={list2} />
          <Dropdown title={'学员心得'} ryLink="/student" />
          <Dropdown title={'教学环境'} ryLink="/studio" />
          <Dropdown title={'关于我们'} ryLink="/about" />
        </div>
        <div className="ry-header-right">136-7514-8010</div>
      </div>
    );
  }
}

export default withRouter(Header);
