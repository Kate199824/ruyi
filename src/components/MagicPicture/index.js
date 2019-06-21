import React, { Component } from 'react';
import './style.scss';

export default class MagicPicture extends Component {
  onHover = () => {
    const { id, handleHover = () => {} } = this.props;
    handleHover(id);
  };

  render() {
    const { url, yellow, id } = this.props;
    const classname = yellow ? 'cover yellow-cover ' : 'cover';
    return (
      <div className="magic-image" onMouseEnter={this.onHover}>
        <img src={url} className="image" id={`magic_image_${id}`} />
        <div className={classname} />
      </div>
    );
  }
}
