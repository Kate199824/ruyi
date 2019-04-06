import React, { Component } from 'react';
import HeaderIcon from './header-icon.png';
import Dropdown from './Dropdown/index';
import './style.scss';

export default class Header extends Component {
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
      { name: '油画直接画法' },
      { name: '古典油画临摹' },
      { name: '素描造型基础' },
      { name: '素描创作绘画' },
      { name: '超写实素描' }
    ];
    const list2 = [
      { name: '画室动态' },
      { name: '国内资讯' },
      { name: '国际资讯' }
    ];
    const classname = toTop ? 'ry-header ry-header__top' : 'ry-header';
    return (
      <div className={classname} id="ry-header">
        <div className="ry-header-icon">
          <img src={HeaderIcon} />
        </div>
        <div className="ry-header-ct">
          <Dropdown title={'课程详情'} list={list1} />
          <Dropdown title={'新闻咨询'} list={list2} />
          <Dropdown title={'学员心得'} />
          <Dropdown title={'教学环境'} />
          <Dropdown title={'关于我们'} />
        </div>
        <div className="ry-header-right">136-7514-8010</div>
      </div>
    );
  }
}
