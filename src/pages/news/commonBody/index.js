import React, { Component } from 'react';
import Bar from '../../../components/Bar';
import AniBackground from '../../../components/AniBackground';
import NewsSection from '../NewsSection';
import PictureSection from '../PictureSection';
import { newsBg, newsBgText } from '../../../service/ossURL';
import './style.scss';

function CurrentPoster(props) {
  const { url, text } = props;
  return (
    <div className="current-poster">
      <img src={url} />
    </div>
  );
}

export default class CommonBody extends Component {
  render() {
    const { type, newsList, currentPoster, previosPosterList } = this.props;
    return (
      <div className="ry-body" id="ry-body">
        <AniBackground bg_url={newsBg[type]} text_url={newsBgText[type]} />
        <div className="ry-split">
          — {type === 'studio' ? '当前活动' : '新闻资讯'} —
        </div>
        {type === 'studio' && (
          <CurrentPoster url={currentPoster.url} text={currentPoster.text} />
        )}
        {type === 'studio' && <div className="ry-split">— 以往活动 —</div>}
        {type === 'studio' && (
          <PictureSection previosPosterList={previosPosterList} />
        )}

        <NewsSection newsList={newsList} />
        <Bar />
      </div>
    );
  }
}
