import React, { Component } from 'react';
import './style.scss';
import { Icon } from 'antd';

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
    const item1 = {
      title: '课程详情',
      list: [
        { name: '油画直接画法' },
        { name: '古典油画临摹' },
        { name: '素描造型基础' },
        { name: '素描创作绘画' },
        { name: '超写实素描' }
      ]
    };
    const item2 = {
      title: '新闻资讯',
      list: [{ name: '画室活动' }, { name: '国内资讯' }, { name: '国外资讯' }]
    };
    const item3 = {
      title: '公开课',
      list: [
        { name: '油画风景公开课' },
        { name: '油画人物公开课' },
        { name: '油画静物公开课' },
        { name: '素描人物公开课' },
        { name: '素描静物公开课' }
      ]
    };
    const item4 = {
      title: '教学环境',
      list: [{ name: '画室环境' }, { name: '公寓环境' }, { name: '资源库' }]
    };
    const item5 = {
      title: '关于我们',
      list: [{ name: '工作室简介' }, { name: '主教介绍' }]
    };
    const item6 = {
      title: '合作洽谈',
      list: [{ name: '合作洽谈' }]
    };
    const itemlist = [item1, item2, item3, item4, item5, item6];
    const infoText =
      '南京如一艺术工作室 地址:南京市玄武区新街口街道丹凤街恒基公寓A座2单元1101室 南京如一艺术工作室 苏ICP备1000000 技术指出 BBBBBYTS';
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
      </div>
    );
  }
}
