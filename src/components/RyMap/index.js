import React, { Component } from 'react';

import './style.scss';

export default class RyMap extends Component {
  componentDidMount() {
    var BMap = window.BMap;
    var map = new BMap.Map('allmap'); // 创建Map实例
    var point = new BMap.Point(118.793457, 32.060257);
    var cpoint = new BMap.Point(118.79557, 32.059031);

    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    map.centerAndZoom(cpoint, 100); // 初始化地图,设    置中心点坐标和地图级别
    map.setCurrentCity('南京'); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(false); //开启鼠标滚轮缩放
  }

  render() {
    return (
      <div>
        <div
          id="allmap"
          style={{
            width: '100vw',
            height: '100vh'
          }}
        />
      </div>
    );
  }
}
