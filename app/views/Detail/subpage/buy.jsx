import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as storeActionsFromFile from '@/redux/actions/store.js';
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
  componentDidMount() {
    this.checkStoreState();
  }
  // 检验当前商户是否已经被收藏
  checkStoreState = () => {
    const id = this.props.id;
    const store = this.props.store;
    store.forEach(element => {
      if (item.id === id) {
        this.setState({
          isStore: true
        });
        // 跳出循环
        return true;
      }
    });
  }
  // 购买事件
  buyHandle = () => {
    const loginFlag = this.loginCheck();
    console.log(loginFlag);
    if (!loginFlag) {
      return;
    }
    // 购买流程
    // 跳转到用户主页
    this.props.history.push('/user');
  }
  // 收藏事件
  storeHandle = () => {
    const loginFlag = this.loginCheck();
    if (!loginFlag) {
      return;
    }
    const id = this.props.id;
    const storeActions = this.props.storeActions;
    if (this.state.isStore) {
      // 当前商户已经被收藏
      storeActions.rm({ id: id });
    } else {
      // 当前商户没有被收藏
      storeActions.add({ id: id });
    }
    // 修改状态
    this.setState({
      isStore: !this.state.isStore
    });
  }
  // 验证登入
  loginCheck() {
    const id = this.props.id;
    const userinfo = this.props.userinfo;
    if (!userinfo.username) {
      // console.log(this.props);
      this.props.history.push('/login/' + encodeURIComponent('/detail/' + id));
      return false;
    }
    return true;
  }
}
function mapStateToPropps(state) {
  return {
    userinfo: state.userinfo,
    store: state.store
  }
}
function mapDispatchToProps(dispatch) {
  return {
    storeActions: bindActionCreators(storeActionsFromFile, dispatch)
  }
}
export default withRouter(connect(
  mapStateToPropps,
  mapDispatchToProps
)(Buy));
