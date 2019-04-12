import React, { Component } from 'react';
import { Icon, Popover } from 'antd';
import { qqQRChart, wechatQRChart } from '../../service/ossURL';
import './style.scss';

export default class Bar extends Component {
  render() {
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
    );
  }
}
