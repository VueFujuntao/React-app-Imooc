import React, { Component } from 'react';
import Header from '@/components/Header/index.jsx';
// 组件
import Info from './subpage/Info.jsx';
import Comment from './subpage/Comment.jsx';
import Buy from './subpage/buy.jsx';

export default class Detail extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Header title='商户详情' />
        <Info id={this.props.match.params.id} />
        <Buy id={this.props.match.params.id} />
        <Comment id={this.props.match.params.id} />
      </div>
    )
  }
}