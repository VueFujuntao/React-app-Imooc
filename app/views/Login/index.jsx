import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInfoActionsFromOtherFile from '@/redux/actions/userinfo.js';
// 组件
import Header from '@/components/Header/index.jsx';
import ComponentLogin from '@/components/Login/index.jsx';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checking: true
    }
  }
  render() {
    return (
      <div>
        <Header title='登录' />
        {
          this.state.checking
            ? <div>{/* 加载中 */}</div>
            : <ComponentLogin loginHandleFn={this.loginHandle}/>
        }
      </div>
    )
  }
  componentDidMount() {
    this.doCheck();
  }
  loginHandle = (username) => {
    const actions = this.props.userInfoActions;
    let userinfo = this.props.userinfo;
    userinfo.username = username;
    actions.update(userinfo);
    // 登入后路由跳转
    const router = this.props.match.params.router;
    if (router) {
      console.log(router)
      // 跳转到指定的页面
      this.props.history.push(decodeURIComponent(router));
  } else {
      // 跳转到用户主页
      this.goUserPage();
  }
  }
  doCheck() {
    const userinfo = this.props.userinfo;
    if (userinfo.username) {
      this.goUserPage();
    } else {
      this.setState({
        checking: false
      })
    }
  }
  goUserPage() {
    this.props.history.push(`/user`);
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}
function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
