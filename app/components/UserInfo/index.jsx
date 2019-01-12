import React, { Component } from 'react';

// 样式
import './style.less';

class UserInfo extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="userinfo-container">
        <p>
          <i className="icon-user"></i>
          {this.props.username}
        </p>
        <p>
          <i className="icon-map-marker"></i>
          {this.props.city}
        </p>
      </div>
    )
  }
}

export default UserInfo;
