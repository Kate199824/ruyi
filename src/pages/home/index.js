import React, { Component } from 'react';
import { Carousel, Icon, Popover } from 'antd';
import RyMap from '../../components/RyMap';
import MagicPicture from './MagicPicture';
import Poster1 from './pic/poster1.png';
import Poster2 from './pic/poster2.png';
import Poster3 from './pic/poster3.png';
import Poster4 from './pic/poster4.png';
import photo1 from './pic/photo1.png';
import photo2 from './pic/photo2.png';
import photo3 from './pic/photo3.png';
import photo4 from './pic/photo4.png';
import photo5 from './pic/photo5.png';
import photo6 from './pic/photo6.png';
import photo7 from './pic/photo7.png';
import photo8 from './pic/photo8.png';

import IntroLogo from './pic/logo/introLogo.png';
import MapIcon from './pic/logo/mapLogo.png';
import Teacher1 from './pic/teacher1.png';
import QQ from './pic/qq.png';
import Wechat from './pic/wechat.png';
import './style.scss';

export default class Home extends Component {
  render() {
    const introText =
      '盼望着，盼望着，东风来了，春天的脚步近了。一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水涨起来了，太阳的脸红起来了。山朗润起来了，水涨起来了，太阳的脸红起来了,坐着，躺着，山朗润起来了，水涨起来了，太阳的脸红起来了,山朗润起来了，水涨起来了，太阳的脸红起来了打两个滚，踢几脚球，赛几趟跑，捉几回迷藏。';
    const atmosphereText =
      '盼望着，盼望着，东风来了，春天的脚步近了。一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水涨起来了，太阳的脸红起来了。山朗润起来了，水涨起来了，太阳的脸红起来了,坐着，躺着，山朗润起来了，水涨起来了，太阳的脸红起来了,山朗润起来了，水涨起来了，太阳的脸红起来了打两个滚，踢几脚球，赛几趟跑，捉几回迷藏。';
    const locationText1 = '南京市 玄武区 新街口街道 丹凤街';
    const locationText2 = '恒基公寓A座2单元1101室';
    const posterList = [Poster1, Poster2, Poster3, Poster4];
    const teacherList = [Teacher1, Teacher1];
    const QQcontent = (
      <div>
        <img src={QQ} style={{ width: 160 }} />
      </div>
    );
    const wechatContent = (
      <div>
        <img src={Wechat} style={{ width: 160 }} />
      </div>
    );
    return (
      <div className="ry-body">
        <div className="carouselSection">
          <Carousel autoplay>
            {posterList.map(item => {
              return <img src={item} />;
            })}
          </Carousel>
        </div>
        <div className="introSection">
          <div className="logo">
            <img src={IntroLogo} />
          </div>
          <div className="text">{introText}</div>
        </div>
        <div className="carouselSection">
          <Carousel autoplay>
            {teacherList.map(item => {
              return <img src={item} />;
            })}
          </Carousel>
        </div>
        <div className="photoSection">
          <div className="left-part">
            <div className="photo-title">
              <span>Lesson</span>
              <span className="yellow">Demeanor</span>
              <span className="chinese">课</span>
              <span className="yellow chinese">堂</span>
              <span className="chinese">内</span>
              <span className="yellow chinese">外</span>
            </div>
            <div className="photoContainer">
              <div className="oneline">
                <MagicPicture url={photo1} id={1} />
                <MagicPicture url={photo2} yellow id={2} />
                <MagicPicture url={photo3} id={3} />
                <MagicPicture url={photo4} yellow id={4} />
              </div>
              <div className="oneline">
                <MagicPicture url={photo5} id={5} />
                <MagicPicture url={photo6} yellow id={6} />
                <MagicPicture url={photo7} id={7} />
                <MagicPicture url={photo8} yellow id={8} />
              </div>
            </div>
          </div>
          <div className="right-part">
            <div className="title">
              Classroom Atmosphere <p className="chinese">画室氛围</p>
            </div>
            <div className="content">{atmosphereText}</div>
          </div>
        </div>
        <div className="mapSection">
          <img className="logo" src={MapIcon} />
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
          <Popover
            content={QQcontent}
            title="扫描二维码添加QQ"
            trigger="hover"
            placement="top"
          >
            <Icon
              className="icon"
              type="qq"
              style={{ fontSize: '40px', color: '#eeeeee' }}
            />
          </Popover>

          <Icon
            className="icon"
            type="weibo"
            style={{ fontSize: '40px', color: '#eeeeee' }}
          />

          <Popover
            content={wechatContent}
            title="扫描二维码添加微信"
            trigger="hover"
            placement="top"
          >
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
