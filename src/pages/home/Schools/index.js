import React, { Component } from 'react';
import { museum, university, artUniversity } from '../../../service/ossURL.js';
import './style.scss';

function Icon(props) {
  const { url, title } = props;
  return (
    <div className="school_icon">
      <img src={url} />
      <p>{title}</p>
    </div>
  );
}

const artUniversityTitle = Object.keys(artUniversity);
const artUniversityTitle1 = artUniversityTitle.slice(0, 4);
const artUniversityTitle2 = artUniversityTitle.slice(4, 8);
const artUniversityTitle3 = artUniversityTitle.slice(8, 12);
const artUniversityTitle4 = artUniversityTitle.slice(12, 16);

const universityTitle = Object.keys(university);
const universityTitle1 = universityTitle.slice(0, 2);
const universityTitle2 = universityTitle.slice(2, 4);
const universityTitle3 = universityTitle.slice(4, 6);
const universityTitle4 = universityTitle.slice(6, 8);

const museumTitle = Object.keys(museum);
const museumTitle1 = museumTitle.slice(0, 1);
const museumTitle2 = museumTitle.slice(1, 2);
const museumTitle3 = museumTitle.slice(2, 3);
const museumTitle4 = museumTitle.slice(3, 4);

export default class Schools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: 0
    };

    setInterval(() => {
      const { group } = this.state;
      this.setState({
        group: group === 0 ? 1 : 0
      });
    }, 6000);
  }

  render() {
    const { group } = this.state;

    const artg1 = group === 0 ? artUniversityTitle1 : artUniversityTitle3;
    const artg2 = group === 0 ? artUniversityTitle2 : artUniversityTitle4;
    const universityg1 = group === 0 ? universityTitle1 : universityTitle3;
    const universityg2 = group === 0 ? universityTitle2 : universityTitle4;
    const museumg1 = group === 0 ? museumTitle1 : museumTitle3;
    const museumg2 = group === 0 ? museumTitle2 : museumTitle4;

    return (
      <div className="schools_body">
        <div className="title">
          合作网站
          <div className="en">COOPERATION WEBSITE</div>
        </div>
        <div className="main_container">
          <div className="art">
            <div className="oneline">
              {artg1.map(title => {
                return (
                  <Icon title={title} url={artUniversity[title].imageUrl} />
                );
              })}
            </div>
            <div className="oneline">
              {artg2.map(title => {
                return (
                  <Icon title={title} url={artUniversity[title].imageUrl} />
                );
              })}
            </div>
          </div>
          <div className="split" />
          <div className="university">
            <div className="oneline">
              {universityg1.map(title => {
                return <Icon title={title} url={university[title].imageUrl} />;
              })}
            </div>
            <div className="oneline">
              {universityg2.map(title => {
                return <Icon title={title} url={university[title].imageUrl} />;
              })}
            </div>
          </div>
          <div className="split" />
          <div className="museum">
            <div className="oneline">
              {museumg1.map(title => {
                return <Icon title={title} url={museum[title].imageUrl} />;
              })}
            </div>
            <div className="oneline">
              {museumg2.map(title => {
                return <Icon title={title} url={museum[title].imageUrl} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
