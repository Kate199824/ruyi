import React, { Component } from 'react';
import './style.scss';
import { Icon } from 'antd';

const item1 = {
  title: '课程详情',
  list: [
    { name: '古典油画临摹' },
    { name: '古典油画创作' },
    { name: '油画直接画法' },
    { name: '素描造型基础' },
    { name: '大师素描提高' },
    { name: '精微素描创作' },
    { name: '坦佩拉临摹' },
    { name: '坦佩拉创作' }
  ]
};
const item2 = {
  title: '新闻资讯',
  list: [{ name: '画室活动' }, { name: '国内资讯' }, { name: '国外资讯' }]
};
const item3 = {
  title: '学员作品',
  list: [
    { name: '古典油画临摹' },
    { name: '古典油画创作' },
    { name: '油画直接画法' },
    { name: '素描造型基础' },
    { name: '大师素描提高' },
    { name: '精微素描创作' },
    { name: '坦佩拉临摹' },
    { name: '坦佩拉创作' }
  ]
};
const item4 = {
  title: '教学环境',
  list: [{ name: '画室环境' }, { name: '公寓环境' }, { name: '资源库' }]
};
const item5 = {
  title: '关于我们',
  list: [{ name: '工作室简介' }, { name: '教师介绍' }]
};
const item6 = {
  title: '合作洽谈',
  list: [{ name: '合作洽谈' }]
};
const itemlist = [item1, item2, item3, item4, item5, item6];
const infoText =
  '南京如一艺术工作室 地址:南京市玄武区新街口街道丹凤街恒基公寓A座2单元1101室 南京如一艺术工作室';

function Item(props) {
  const { title, list = [] } = props;
  return (
    <div className="ry-footer-item">
      <div className="item-title">{title}</div>
      <div>
        {list.map(item => {
          return <div className="item-cnt">{item.name}</div>;
        })}
      </div>
    </div>
  );
}

export default class Footer extends Component {
  render() {
    return (
      <div className="ry-footer">
        <div className="ry-footer-top">
          {itemlist.map(item => {
            return <Item title={item.title} list={item.list} />;
          })}
        </div>
        <div className="ry-footer-mid">
          <div className="ry-footer-mid-text">
            <Icon type="phone" />
            报名热线
          </div>
          <div className="ry-footer-mid-phone">13675148010</div>
        </div>
        <div className="ry-footer-bottom">{infoText}</div>
        <a className="jinbingshu-ad" href="/me" target="_blank">
          关于本网站开发者
        </a>
      </div>
    );
  }
}
