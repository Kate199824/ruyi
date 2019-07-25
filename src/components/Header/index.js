import React, { Component } from 'react';
import { headerLogo } from '../../service/ossURL';
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
      // console.log(window.scrollY);
      this.setState({
        toTop: window.scrollY > 10
      });
    });
  }
  render() {
    const { toTop } = this.state;
    const list1 = [
      { name: '古典油画临摹', link: '/course/古典油画临摹' },
      { name: '古典油画创作', link: '/course/古典油画创作' },
      { name: '油画直接画法', link: '/course/油画直接画法' },
      { name: '素描造型基础', link: '/course/素描造型基础' },
      { name: '大师素描提高', link: '/course/大师素描提高' },
      { name: '精微素描创作', link: '/course/精微素描创作' },
      { name: '坦佩拉临摹', link: '/course/坦佩拉临摹' },
      { name: '坦佩拉创作', link: '/course/坦佩拉创作' }
    ];
    const list2 = [
      { name: '画室动态', link: '/news/studio' },
      { name: '国内资讯', link: '/news/nation' },
      { name: '国际资讯', link: '/news/abroad' }
    ];

    const classname = toTop ? 'ry-header ry-header__top' : 'ry-header';
    return (
      <div className={classname} id="ry-header">
        <Link className="ry-header-icon" to="/">
          <img src={headerLogo} />
        </Link>
        <div className="ry-header-ct">
          <Dropdown title={'课程详情'} list={list1} />
          <Dropdown title={'新闻咨询'} list={list2} />
          {/* <Dropdown title={'学员作品'} ryLink="/student" />
          <Dropdown title={'教学环境'} ryLink="/studio" /> */}
          <Dropdown title={'关于我们'} ryLink="/about" />
        </div>
        <div className="ry-header-right">136-7514-8010</div>
      </div>
    );
  }
}

export default withRouter(Header);
