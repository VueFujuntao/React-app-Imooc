import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// 样式
import './style.less';
// 组件
import SearchInput from '@/components/SearchInput/index.jsx';

class HomeHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      kwd: ''
    }
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
            <SearchInput type="text" value='' enterHandleFn={this.enterHandle}/>
          </div>
        </div>
      </div>
    )
  }
  enterHandle = (value) => {
    this.props.history.push(`/search/all/${encodeURIComponent(value)}`)
  }
}

export default withRouter(HomeHeader);
