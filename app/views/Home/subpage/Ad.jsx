import React, { Component } from 'react';
import HomeAd from '@/components/HomeAd/index.jsx';

class Ad extends Component {
  constructor() {
    super();
    this.state = {
      ad: [
        {
          title: '暑假5折',
          img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016191639092-2000037796.png',
          link: 'http://www.imooc.com/wap/index'
        },
        {
          title: '特价出国',
          img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016191648124-298129318.png',
          link: 'http://www.imooc.com/wap/index'
        },
        {
          title: '亮亮车',
          img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016191653983-1962772127.png',
          link: 'http://www.imooc.com/wap/index'
        },
        {
          title: '学钢琴',
          img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016191700420-1584459466.png',
          link: 'http://www.imooc.com/wap/index'
        },
        {
          title: '电影',
          img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016191706733-367929553.png',
          link: 'http://www.imooc.com/wap/index'
        },
        {
          title: '旅游热线',
          img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016191713186-495002222.png',
          link: 'http://www.imooc.com/wap/index'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        {
          this.state.ad.length
            ? <HomeAd ad={this.state.ad} />
            : <div>加载中....</div>
        }
      </div>
    );
  }
}

export default Ad;
