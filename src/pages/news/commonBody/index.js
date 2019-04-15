import React, { Component } from 'react';
import Bar from '../../../components/Bar';
import AniBackground from '../../../components/AniBackground';
import NewsSection from '../NewsSection';
import PictureSection from '../PictureSection';
import { newsBg, newsBgText } from '../../../service/ossURL';
import './style.scss';

export default class CommonBody extends Component {
  render() {
    const { type } = this.props;
    const fake_news = [
      {
        title: '1边老师去荷兰啦边边老师去荷兰啦边老师去荷兰啦',
        date: '2019.4.12',
        link: ''
      },
      {
        title: '2边老师去荷兰边老师去荷兰啦啦边老师去荷兰啦边老师去荷兰啦',
        date: '2019.4.12',
        link: ''
      },
      {
        title: '3边老师去荷兰啦边老师去荷兰啦边老师去荷兰啦',
        date: '2019.4.12',
        link: ''
      },
      {
        title: '4边老师去荷兰啦边老师去荷兰啦边老师去荷兰啦边老师去荷兰啦',
        date: '2019.4.12',
        link: ''
      },
      {
        title: '边老师去荷兰啦边老师去荷师去荷兰啦',
        date: '2019.4.12',
        link: ''
      },
      {
        title: '5边老师去师去荷兰啦边老师去荷兰啦',
        date: '2019.4.12',
        link: ''
      },
      {
        title: '6边老师去荷兰啦边边老师老师去荷兰啦边老师去荷兰啦',
        date: '2019.4.12',
        link: ''
      },
      {
        title: '边老师去荷兰啦边老师去荷师去荷兰啦',
        date: '2019.4.12',
        link: ''
      },
      {
        title: '5边老师去师去荷兰啦边老师去荷兰啦',
        date: '2019.4.12',
        link: ''
      },
      {
        title: '6边老师去荷兰啦边边老师老师去荷兰啦边老师去荷兰啦',
        date: '2019.4.12',
        link: ''
      },
      {
        title: '7边老师去荷兰啦边老师去荷师去荷兰啦',
        date: '2019.4.12',
        link: ''
      },
      {
        title: '8边老师去师去荷兰啦边老师去荷兰啦',
        date: '2019.4.12',
        link: ''
      },
      {
        title: '9边老师去荷兰啦边边老师老师去荷兰啦边老师去荷兰啦',
        date: '2019.4.12',
        link: ''
      }
    ];
    return (
      <div className="ry-body" id="ry-body">
        <AniBackground bg_url={newsBg[type]} text_url={newsBgText[type]} />
        <div className="split">
          — {type === 'studio' ? '当前活动' : '新闻资讯'} —
        </div>
        {type === 'studio' && <div className="split">— 以往活动 —</div>}
        {type === 'studio' && <PictureSection />}

        <NewsSection newsList={fake_news} />
        <Bar />
      </div>
    );
  }
}
