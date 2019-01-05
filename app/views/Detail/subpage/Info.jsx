import React, { Component } from 'react';
import DetailInfo from '@/components/DetailInfo/index.jsx';

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: false
    }
  }
  render() {
    return (
      <div>
        {
          this.state.info
            ? <DetailInfo data={this.state.info} />
            : ''
        }
      </div>
    )
  }
  componentDidMount() {
    this.setState({
      info: {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png',
        title: '天下第一锅',
        star: 4,
        price: '88',
        subTitle: '重庆 & 四川 麻辣火锅',
        desc: '营业时间 11:00 - 21:00 <br> 电话订购 11:00 - 19:00 <br> 网络订购 11:00 - 19:00'
      }
    })
  }
}