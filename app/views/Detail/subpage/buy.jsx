import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActionsFromFile from '@/redux/actions/store.js'
// 组件
import BuyAndStore from '@/components/BuyAndStore/index.jsx';

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStore: false
    }
  }
  render() {
    return (
      <div>
        <BuyAndStore
        isStore={this.state.isStore}
        buyHandleFn={this.buyHandle}
        storeHandleFn={this.storeHandle}
        />
      </div>
    )
  }
  buyHandle = () => {
    const loginFlag = this.loginCheck();
    if (!loginFlag) {
      return;
    }
    // 购买流程
    // 跳转到用户主页
  }
  storeHandle = () => {}
  // 验证登入
  loginCheck() {
    const id = this.props.id;
    const userinfo = this.props.userinfo;
    if (!userinfo.username) {
      console.log(this.props);
      return false;
    }
    return true;
  }
}
function mapStateToPropps(state) {
  return {
    userinfo: state.userinfo
  }
}
function mapDispatchToProps(dispatch) {
  return {}
}
export default connect(
  mapStateToPropps,
  mapDispatchToProps
)(Buy);
