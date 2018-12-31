import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInfoActionsFromOtherFile from '@/redux/actions/userinfo.js';
import LocalStore from '@/util/localStore.js';
import { CITYNAME } from '@/config/localStoreKey.js';
// 组价
import Header from '@/components/Header/index.jsx';
import CurrentCity from '@/components/CurrentCity/index.jsx';
import CityList from '@/components/CityList/index.jsx';

class City extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header title='选择城市' />
        <CurrentCity cityName={this.props.userinfo.cityName} />
        <CityList changeCityFn={this.changeCity} />
      </div>
    );
  }
  changeCity = (newCity) => {
    console.log(newCity);
    if (newCity == null) return;
    // 修改redux
    this.props.userinfo.cityName = newCity;
    this.props.userInfoActions.update(this.props.userinfo);
    // 修改localstorge
    LocalStore.setItem(CITYNAME, newCity);
    // 返回首页
    this.props.history.goBack();
    console.log(this.props.history);
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
)(City);
