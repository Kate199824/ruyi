import React, { Component } from 'react';
import Bar from '../../../components/Bar';
import AniBackground from '../../../components/AniBackground';
import NewsSection from '../NewsSection';
import { newsBg, newsBgText } from '../../../service/ossURL';
import './style.scss';

export default class CommonBody extends Component {
  render() {
    const { type } = this.props;
    const fake_news = [
      { title: '边老师去荷兰啦', date: '2019-04-12', link: '' },
      { title: '边老师去荷兰啦', date: '2019-04-12', link: '' },
      { title: '边老师去荷兰啦', date: '2019-04-12', link: '' },
      { title: '边老师去荷兰啦', date: '2019-04-12', link: '' },
      { title: '边老师去荷兰啦', date: '2019-04-12', link: '' },
      { title: '边老师去荷兰啦', date: '2019-04-12', link: '' },
      { title: '边老师去荷兰啦', date: '2019-04-12', link: '' },
      { title: '边老师去荷兰啦', date: '2019-04-12', link: '' },
      { title: '边老师去荷兰啦', date: '2019-04-12', link: '' },
      { title: '边老师去荷兰啦', date: '2019-04-12', link: '' }
    ];
    return (
      <div className="ry-body" id="ry-body">
        <AniBackground bg_url={newsBg[type]} text_url={newsBgText[type]} />
        <div className="split">— 新闻资讯 —</div>
        <NewsSection newsList={fake_news} />
        <Bar />
      </div>
    );
  }
}
