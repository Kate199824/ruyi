import React, { Component } from 'react';
import './style.scss';

export default class AniBackground extends Component {
  componentDidMount() {
    const ele = document.getElementById('abg_container');
    const ele2 = document.getElementById('abg_text_container');
    window.addEventListener('scroll', () => {
      const percent = 100 - window.scrollY / 10;
      ele.style.width = percent + '%';
      // console.log(percent);
      ele.style.opacity = percent / 150;
      if (percent > 90) {
        ele2.style.opacity = 1;
      } else {
        ele2.style.opacity = percent / 120;
      }
    });
  }
  render() {
    const { bg_url, text_url } = this.props;
    return (
      <div className="abg_body">
        <div className="abg_container" id="abg_container">
          <img src={bg_url} />
        </div>
        <div className="abg_title_container" id="abg_text_container">
          <img src={text_url} />
        </div>
      </div>
    );
  }
}
