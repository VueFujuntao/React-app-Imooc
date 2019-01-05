import React, { Component } from 'react';
// 样式
import './style.less';
// 组件
import Star from '@/components/Star/index.jsx';

export default class DetailInfo extends Component {
  constructor() {
    super()
  }
  render() {
    let data = this.props.data;
    console.log(data);
    return (
      <div id="detail-info-container">
        <div className="info-container clear-fix">
          <div className="info-img-container float-left">
            <img src={data.img} />
          </div>
          <div className="info-content">
            <h1>{data.title}</h1>
            <div className="star-container">
              {/* 引用 Star 组件 */}
              <Star star={data.star} />
              <span className="price">￥{data.price}</span>
            </div>
            <p className="sub-title">{data.subTitle}</p>
          </div>
        </div>
        {/* 设置 innerHTML */}
        <p dangerouslySetInnerHTML={{ __html: data.desc }} className="info-desc"></p>
      </div>
    )
  }
  componentDidMount() { }
}