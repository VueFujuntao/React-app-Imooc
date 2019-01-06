import React, { Component } from 'react';
import proptypes from 'prop-types';
// 样式
import './style.less';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: ''
    }
  }
  render() {
    return (
      <div id="login-container">
        <div className="input-container phone-container">
          <i className="icon-tablet"></i>
          <input
            type="text"
            placeholder="输入手机号"
            onChange={this.changeHandle}
            value={this.state.phone}
            style={{border: 'none'}}
          />
        </div>
        <div className="input-container password-container">
          <i className="icon-key"></i>
          <button>发送验证码</button>
          <input type="text" placeholder="输入验证码" style={{border: 'none'}}/>
        </div>
        <button className="btn-login" onClick={this.clickHandle}>登入</button>
      </div >
    )
  }
  changeHandle = (e) => {
    this.setState({
      phone: e.target.value
    });
  }
  clickHandle = () => {
    const username = this.state.phone;
    this.props.loginHandleFn(username);
  }
}

Login.proptypes = {
  loginHandleFn: proptypes.func
}
