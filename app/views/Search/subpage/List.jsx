import React from 'react';
import { connect } from 'react-redux';
// 组件
import LoadMore from '@/components/LoadMore/index.jsx';
import ListCompoent from '@/components/List';

// 初始化一个组件的 state
const initialState = {
  data: [],
  hasMore: false,
  isLoadingMore: false,
  page: 0
}
class SearchList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = initialState;
  }
  render() {
    return (
      <div>
        {
          this.state.data.length
            ? <ListCompoent data={this.state.data} />
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
  loadFirstPageData() {
    const cityName = this.props.userinfo.cityName;
    const keyword = this.props.keyword || '';
    const category = this.props.category;
    const result = [
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
    this.resultHandle(result);
  }
  loadMoreData = () => {
    // 记录状态
    this.setState({
      isLoadingMore: true
    });
    const cityName = this.props.userinfo.cityName;
    const page = this.state.page;
    const keyword = this.props.keyword || '';
    const category = this.props.category;
    const result = [
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
    this.resultHandle(result);

    // 更新状态
    this.setState({
      isLoadingMore: false
    })
  }
  resultHandle(result) {
    // 增加 page 计数
    const page = this.state.page
    this.setState({
      page: page + 1
    });
    this.setState({
      hasMore: true,
      // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
      data: this.state.data.concat(result)
    })
  }
  // 处理重新搜索
  componentDidUpdate(prevProps, prevState) {
    const keyword = this.props.keyword;
    const category = this.props.category;
    // 搜索条件完全相等时，忽略。重要！！！
    if (keyword === prevProps.keyword && category === prevProps.category) {
      return;
    }
    // 重置 state
    this.setState({
      data: [],
      hasMore: false,
      isLoadingMore: false,
      page: 0
    });
    // 重新加载数据
    const cityName = this.props.userinfo.cityName;
    const result = [
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
    const page = this.state.page
    this.setState({
      page: page + 1
    });
    this.setState({
      hasMore: true,
      data: result
    })
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList);
