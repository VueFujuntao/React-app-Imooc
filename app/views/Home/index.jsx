import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LocalStore from '@/util/localStore.js';
import { CITYNAME } from '@/config/localStoreKey.js';
import * as userInfoActionsFromOtherFile from '@/redux/actions/userinfo.js';
// 组件
import HomeHeader from '@/components/HomeHeader/index.jsx';
import Category from '@/components/Category/index.jsx';
import Ad from './subpage/Ad.jsx';
import List from './subpage/List.jsx';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      initDone: false
    }
  }
  render() {
    return (
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName} />
        <Category />
        <div style={{ height: '15px' }}></div>
        <Ad />
        <List cityName={this.props.userinfo.cityName} />
      </div>
    );
  }
  componentDidMount() {
    // 获取位置信息
    let cityName = LocalStore.getItem(CITYNAME)
    if (cityName == null) {
      cityName = '北京';
    }
    this.props.userInfoActions.update({
      cityName: cityName
    })
    // 更改状态
    this.setState({
      initDone: true
    });
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
