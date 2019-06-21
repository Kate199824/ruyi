import React, { Component } from 'react';
import MagicPicture from '../MagicPicture';
import './style.scss';

export default class Material extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  handleHover = index => {
    this.setState({
      current: index
    });
  };

  render() {
    const { materialList } = this.props;
    const { current } = this.state;
    return (
      <div className="ry-material">
        <div className="left-part">
          <div className="photoContainer">
            <div className="oneline">
              <MagicPicture
                url={materialList[0].url}
                id={0}
                handleHover={this.handleHover}
              />
              <MagicPicture
                url={materialList[1].url}
                yellow
                id={1}
                handleHover={this.handleHover}
              />
              <MagicPicture
                url={materialList[2].url}
                id={2}
                handleHover={this.handleHover}
              />
            </div>
            <div className="oneline">
              <MagicPicture
                url={materialList[3].url}
                yellow
                id={3}
                handleHover={this.handleHover}
              />
              <MagicPicture
                url={materialList[4].url}
                id={4}
                handleHover={this.handleHover}
              />
              <MagicPicture
                url={materialList[5].url}
                yellow
                id={5}
                handleHover={this.handleHover}
              />
            </div>
          </div>
          <div className="introText">{materialList[current].text}</div>
        </div>
        <div className="title">
          <div className="title-ch">画材介绍</div>
          <div className="title-en">PAINTING MATERIALS</div>
          <div className="title-en">INTRODUCTION OF</div>
        </div>
      </div>
    );
  }
}
