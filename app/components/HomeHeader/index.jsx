/*
 * @Author: fujuntao
 * @Date: 2018-12-26 20:11:28
 * @Last Modified by:   fujuntao
 * @Last Modified time: 2018-12-26 20:11:28
 */
import React from 'react';
import { Link } from 'react-router-dom'
import './style.less';

class HomeHeader extends React.Component{
  constructor(props, context) {
    super(props);
    console.log(this.props)
  }
  render() {
    return (
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <Link to="/city">
            <span>{this.props.cityName}</span>
            &nbsp;
            <i className="icon-angle-down"></i>
          </Link>
        </div>
        <div className="home-header-right float-right">
          <i className="icon-user"></i>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search"></i>
            <input type="text" placeholder="请输入关键字"/>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHeader