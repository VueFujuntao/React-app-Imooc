import React, { Component } from 'react';
import proptypes from 'prop-types';
// 样式
import './style.less';
// 组建
import ListComponent from '@/components/List/index.jsx';
import LoadMore from '@/components/LoadMore/index.jsx';

class List extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [],// 存储列表信息
      hasMore: false, // 计入当前状态下，还有没有更多的数据可供加载
      isLoadingMore: false,
      page: 1 // 下一页的页码
    }
  }
  render() {
    return (
      <div>
        <h2 className='home-list-title'>猜你喜欢</h2>
        {/* 列表 */}
        {
          this.state.data.length > 0
            ? <ListComponent data={this.state.data} />
            : <div>加载中...</div>
        }
        {/* loadmore */}
        {
          this.state.hasMore
            ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreDataFn={this.loadMoreData} />
            : ''
        }
      </div>
    );
  }
  componentDidMount() {
    this.loadFirstPageData();
  }
  loadFirstPageData() {
    const cityName = this.props.cityName;
    const data = [
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145742279-606202974.jpg',
        title: '河束人家',
        subTitle: '南锣鼓巷店',
        price: '150',
        distance: '120m',
        mumber: '389',
        id: Math.random().toString().slice(2)
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145750123-1745839503.jpg',
        title: '漫漫火锅',
        subTitle: '[王府井]自助火锅',
        price: '113',
        distance: '140m',
        mumber: '689',
        id: Math.random().toString().slice(2)
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145755545-1770557408.jpg',
        title: '北方涮肉',
        subTitle: '什刹海店',
        price: '92',
        distance: '160',
        mumber: '106',
        id: Math.random().toString().slice(2)
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145800732-576947550.jpg',
        title: '姓高火锅',
        subTitle: '知春里店',
        price: '90',
        distance: '160',
        mumber: '58',
        id: Math.random().toString().slice(2)
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145806201-1193851669.jpg',
        title: '八重牛府',
        subTitle: '最好吃的牛丸',
        price: '85',
        distance: '160',
        mumber: '1426',
        id: Math.random().toString().slice(2)
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022150855185-1659375763.jpg',
        title: '蜀乡涮锅',
        subTitle: '[王府井]自助火锅',
        price: '113',
        distance: '140m',
        mumber: '689',
        id: Math.random().toString().slice(2)
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145800732-576947550.jpg',
        title: '满楼福火锅',
        subTitle: '知春路店',
        price: '90',
        distance: '160',
        mumber: '58',
        id: Math.random().toString().slice(2)
      }
    ]
    const hasMore = true;
    this.resultHandle(data, hasMore);
  }
  resultHandle(result, hasMore) {
    this.setState({
      hasMore: hasMore,
      data: this.state.data.concat(result)
    });
  }
  // 加载更多数据
  loadMoreData = () => {
    // 用到 this.resultHandle();
    // 计入状态
    this.setState({
      isLoadingMore: true
    });
    const cityName = this.props.cityName;
    const page = this.state.page;
    const hasMore = true;
    const data = [
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145742279-606202974.jpg',
        title: '河束人家',
        subTitle: '南锣鼓巷店',
        price: '150',
        distance: '120m',
        mumber: '389',
        id: Math.random().toString().slice(2)
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145750123-1745839503.jpg',
        title: '漫漫火锅',
        subTitle: '[王府井]自助火锅',
        price: '113',
        distance: '140m',
        mumber: '689',
        id: Math.random().toString().slice(2)
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145755545-1770557408.jpg',
        title: '北方涮肉',
        subTitle: '什刹海店',
        price: '92',
        distance: '160',
        mumber: '106',
        id: Math.random().toString().slice(2)
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145800732-576947550.jpg',
        title: '姓高火锅',
        subTitle: '知春里店',
        price: '90',
        distance: '160',
        mumber: '58',
        id: Math.random().toString().slice(2)
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145806201-1193851669.jpg',
        title: '八重牛府',
        subTitle: '最好吃的牛丸',
        price: '85',
        distance: '160',
        mumber: '1426',
        id: Math.random().toString().slice(2)
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022150855185-1659375763.jpg',
        title: '蜀乡涮锅',
        subTitle: '[王府井]自助火锅',
        price: '113',
        distance: '140m',
        mumber: '689',
        id: Math.random().toString().slice(2)
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145800732-576947550.jpg',
        title: '满楼福火锅',
        subTitle: '知春路店',
        price: '90',
        distance: '160',
        mumber: '58',
        id: Math.random().toString().slice(2)
      }
    ];
    // 增加page的计数
    this.setState({
      page: page + 1,
      isLoadingMore: false
    });
    this.resultHandle(data, hasMore);
  }
}

List.proptypes = {
  cityName: proptypes.number
}

export default List;
