import React, { Component } from 'react';
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
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201638030-473660627.png',
        title: '汉堡大大',
        subTitle: '叫我汉堡大大，还你多彩口味',
        price: '28',
        distance: '120m',
        mumber: '389'
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png',
        title: '北京开源饭店',
        subTitle: '[望京]自助晚餐',
        price: '98',
        distance: '140m',
        mumber: '689'
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201652952-1050532278.png',
        title: '服装定制',
        subTitle: '原价xx元，现价xx元，可修改一次',
        price: '1980',
        distance: '160',
        mumber: '106'
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201700186-1351787273.png',
        title: '婚纱摄影',
        subTitle: '免费试穿，拍照留念',
        price: '2899',
        distance: '160',
        mumber: '58'
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201708124-1116595594.png',
        title: '麻辣串串烧',
        subTitle: '双人免费套餐等你抢购',
        price: '0',
        distance: '160',
        mumber: '1426'
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
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201638030-473660627.png',
        title: '汉堡大大',
        subTitle: '叫我汉堡大大，还你多彩口味',
        price: '28',
        distance: '120m',
        mumber: '389'
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png',
        title: '北京开源饭店',
        subTitle: '[望京]自助晚餐',
        price: '98',
        distance: '140m',
        mumber: '689'
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201652952-1050532278.png',
        title: '服装定制',
        subTitle: '原价xx元，现价xx元，可修改一次',
        price: '1980',
        distance: '160',
        mumber: '106'
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201700186-1351787273.png',
        title: '婚纱摄影',
        subTitle: '免费试穿，拍照留念',
        price: '2899',
        distance: '160',
        mumber: '58'
      },
      {
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201708124-1116595594.png',
        title: '麻辣串串烧',
        subTitle: '双人免费套餐等你抢购',
        price: '0',
        distance: '160',
        mumber: '1426'
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

export default List;
