import React, { Component } from 'react';
import './style.scss';

export default class AniBackground extends Component {
  componentDidMount() {
    const ele = document.getElementById('abg_container');
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
      const percent = 100 - window.scrollY / 5;
      ele.style.width = percent + '%';
    });
  }
  render() {
    const { bg_url } = this.props;
    return (
      <div className="abg_body">
        <div className="abg_container" id="abg_container">
          <img src={bg_url} />
        </div>
      </div>
    );
  }
}
