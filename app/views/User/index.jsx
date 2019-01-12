import React from 'react';
import { connect } from 'react-redux';
// 组件
import Header from '@/components/Header/index.jsx';
import UserInfo from '@/components/UserInfo/index.jsx';
import OrderList from './subpage/OrderList'

class User extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <Header title="用户主页" backRouter="/" />
        <UserInfo
          username={this.props.userinfo.username}
          city={this.props.userinfo.cityName}
        />
        <OrderList username={this.props.userinfo.username} />
      </div>
    )
  }
  componentDidMount() {
    if (!this.props.userinfo.username) {
      this.props.history.push('/login')
    }
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
