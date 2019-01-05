import React, { Component } from 'react';
import LoadMore from '@/components/LoadMore';
import ListComponent from '@/components/CommentList/index.jsx';
// 样式
import './style.less';

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hasMore: false,
      isLoadingMore: false,
      page: 0
    }
  }
  render() {
    return (
      <div className="detail-comment-subpage">
        <h2>用户点评</h2>
        {
          this.state.data.length
            ? <ListComponent data={this.state.data} />
            : <div>{/* 加载中... */}</div>
        }
        {
          this.state.hasMore
            ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreDataFn={this.loadMoreData} />
            : ''
        }
      </div>
    )
  }
  componentDidMount() {
    this.loadFirstPageData();
  }
  // 获取首页数据
  loadFirstPageData() {
    this.resultHandle();
  }
  loadMoreData = () => {
    this.setState({
      isLoadingMore: true
    })
    this.resultHandle();
    // 增加 page 技术
    this.setState({
      isLoadingMore: false
    })
  }
  resultHandle() {
    const hasMore = true;
    const data = [
      {
        username: '133****3355',
        comment: '非常好吃，棒棒的，下次再来',
        star: 5
      },
      {
        username: '135****3452',
        comment: '羊肉够分量，不错',
        star: 4
      },
      {
        username: '137****1242',
        comment: '有自助的水果，非常喜欢',
        star: 4
      },
      {
        username: '131****3980',
        comment: '桌子环境有点糟糕，不喜欢',
        star: 2
      },
      {
        username: '135****3565',
        comment: '基本还可以，中规中矩吧，虽然没有啥惊喜',
        star: 3
      },
      {
        username: '130****9879',
        comment: '感觉很棒，服务员态度非常好',
        star: 5
      },
      {
        username: '186****7570',
        comment: '要是能多给开点发票就好了，哈哈啊',
        star: 4
      }
    ];
    this.setState({
      hasMore: hasMore,
      data: this.state.data.concat(data)
    })
  }
}