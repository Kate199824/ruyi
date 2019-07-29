import React, { Component } from 'react';
import { Carousel, Icon, Popover } from 'antd';
import RyMap from '../../components/RyMap';
import MagicPicture from '../../components/MagicPicture';
import Schools from './Schools';
import StudentsWork from '../../components/StudentsWorkHome';
import {
  getPosterList,
  getPhotoList,
  getStudentWorkList
} from '../../service/homeSvc';
import {
  teachers,
  yellowWithChar,
  whiteWithChar,
  qqQRChart,
  wechatQRChart
} from '../../service/ossURL';
import './style.scss';

const introText =
  '如一工作室致力于素描造型基础、古典油画临摹与创作、坦培拉临摹与创作的研究与教学。面向广大高中生、本科生、研究生、高中美术老师以及想要研习造型基础及古典油画技法的爱好者们。';
const atmosphereText =
  '量身打造精品课程，专业老师1对1辅导，系统授课循环指导，专门面向工作考学';
const locationText1 = '南京市 玄武区 新街口街道 丹凤街';
const locationText2 = '恒基公寓A座2单元1101室';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posterList: [],
      photoList: [],
      studentWorkList: []
    };
  }
  componentDidMount() {
    Promise.all([getPosterList(), getPhotoList(), getStudentWorkList()]).then(
      values => {
        const posterList = values[0];
        const photoList = values[1];
        const studentWorkList = values[2];
        this.setState({
          posterList,
          photoList,
          studentWorkList
        });
      }
    );
  }
  render() {
    const { posterList, photoList, studentWorkList } = this.state;
    const teacherList = teachers;
    const QQcontent = (
      <div>
        <img src={qqQRChart} style={{ width: 160 }} />
      </div>
    );
    const wechatContent = (
      <div>
        <img src={wechatQRChart} style={{ width: 160 }} />
      </div>
    );
    return (
      <div className="ry-body" id="ry-body">
        <div className="carouselSection">
          <Carousel autoplay autoplaySpeed={4000}>
            {posterList.map(item => {
              return <img src={item} />;
            })}
          </Carousel>
        </div>
        <div className="introSection">
          <div className="logo">
            <img src={yellowWithChar} />
          </div>
          <div className="text">{introText}</div>
        </div>
        <div className="teacherSection">
          <Carousel autoplay autoplaySpeed={4000}>
            {teacherList.map(item => {
              return <img src={item} />;
            })}
          </Carousel>
        </div>
        <div className="studentsWorkSection">
          <StudentsWork studentWorkList={studentWorkList} />
        </div>
        <div className="photoSection">
          <div className="left-part">
            <div className="photo-title">
              <span className="yellow">LESSON DEMEANOR</span>
              <span className="chinese">课堂内外</span>
            </div>
            <div className="photoContainer">
              <div className="oneline">
                <MagicPicture url={photoList[0]} id={1} />
                <MagicPicture url={photoList[1]} yellow id={2} />
                <MagicPicture url={photoList[2]} id={3} />
                <MagicPicture url={photoList[3]} yellow id={4} />
              </div>
              <div className="oneline">
                <MagicPicture url={photoList[4]} yellow id={5} />
                <MagicPicture url={photoList[5]} id={6} />
                <MagicPicture url={photoList[6]} yellow id={7} />
                <MagicPicture url={photoList[7]} id={8} />
              </div>
            </div>
          </div>
          <div className="right-part">
            <div className="title">
              CLASSROOM ATMOSPHERE<p className="chinese">画室氛围</p>
            </div>
            <div className="content">{atmosphereText}</div>
          </div>
        </div>
        <div className="schoolSection">
          <Schools />
        </div>
        <div className="mapSection">
          <img className="logo" src={whiteWithChar} />
          <div className="text">
            <div className="title">联系方式</div>
            <div className="line" />
            <div className="section">
              <div className="subTitle">地址:</div>
              <div className="content">
                {locationText1}
                <br />
                {locationText2}
              </div>
            </div>
            <div className="section">
              <div className="subTitle">电话:</div>
              <div className="content">
                025-85385300
                <br /> 136-75148-010
              </div>
            </div>
          </div>
          <div className="mapContainer">
            <RyMap />
          </div>
        </div>
        <div className="barSection">
          <Popover content={QQcontent} trigger="hover" placement="top">
            <a
              href="https://user.qzone.qq.com/1576087369/infocenter"
              target="_blank"
            >
              <Icon
                className="icon"
                type="qq"
                style={{ fontSize: '40px', color: '#eeeeee' }}
              />
            </a>
          </Popover>

          <Icon
            className="icon"
            type="weibo"
            style={{ fontSize: '40px', color: '#eeeeee' }}
          />

          <Popover content={wechatContent} trigger="hover" placement="top">
            <Icon
              className="icon"
              type="wechat"
              style={{ fontSize: '40px', color: '#eeeeee' }}
            />
          </Popover>
        </div>
      </div>
    );
  }
}
