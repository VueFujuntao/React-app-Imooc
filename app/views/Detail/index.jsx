import React, { Component } from 'react';
import Header from '@/components/Header/index.jsx';
// 组件
import Info from './subpage/Info.jsx';
import Comment from './subpage/Comment.jsx';

export default class Detail extends Component {
  constructor() {
    super()
  }
  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <Header title='商户详情' />
        <Info id={this.props.match.params.id} />
        <Comment />
      </div>
    )
  }
}