import React, { Component } from 'react';
import './style.scss';

export default class Me extends Component {
  render() {
    return (
      <div className="jbs-ad">
        <p>我叫靳炳淑，是南京大学软件学院2016级本科生</p>
        <p>在如一画室学习美术，网站照片中，穿红色裙子画素描的就是我</p>
        <p>如果你喜欢我做的网站，可以在下方扫码打赏⬇ ️</p>
        <div className="jbs-ad-qr">
          <img src="http://ruyiart.oss-cn-beijing.aliyuncs.com/advertise/wx.png" />
          <img src="http://ruyiart.oss-cn-beijing.aliyuncs.com/advertise/zfb.jpg" />
        </div>
        <p>如果你想要联系我，可以发送邮件到: jinbingshu_nju@qq.com ️</p>
        <p>我的github地址是: ️https://github.com/Kate199824</p>
        <p>感谢您的关注！ ️</p>
      </div>
    );
  }
}
