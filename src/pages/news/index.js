import React, { Component } from 'react';
import './style.scss';
import CommonBody from './commonBody';
import {
  getNationNewsList,
  getStudioNewsList,
  getAbroadNewsList,
  getCurrentPoster,
  getPreviosPosterList
} from '../../service/newsSvc';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studioNewsList: [],
      nationNewsList: [],
      abroadNewsList: [],
      currentPoster: [],
      previosPosterList: []
    };
  }

  componentDidMount() {
    Promise.all([
      getStudioNewsList(),
      getNationNewsList(),
      getAbroadNewsList(),
      getCurrentPoster(),
      getPreviosPosterList()
    ]).then(values => {
      const studioNewsList = values[0];
      const nationNewsList = values[1];
      const abroadNewsList = values[2];
      const currentPoster = values[3];
      const previosPosterList = values[4];
      this.setState({
        studioNewsList,
        nationNewsList,
        abroadNewsList,
        currentPoster,
        previosPosterList
      });
    });
  }

  render() {
    const { type } = this.props.match.params;
    const {
      studioNewsList,
      nationNewsList,
      abroadNewsList,
      currentPoster,
      previosPosterList
    } = this.state;

    if (type === 'studio') {
      return (
        <CommonBody
          type={'studio'}
          newsList={studioNewsList}
          currentPoster={currentPoster}
          previosPosterList={previosPosterList}
          className="ry-body"
        />
      );
    } else if (type === 'nation') {
      return (
        <CommonBody
          type={'nation'}
          newsList={nationNewsList}
          className="ry-body"
        />
      );
    } else if (type === 'abroad') {
      return (
        <CommonBody
          type={'abroad'}
          newsList={abroadNewsList}
          className="ry-body"
        />
      );
    }
  }
}
