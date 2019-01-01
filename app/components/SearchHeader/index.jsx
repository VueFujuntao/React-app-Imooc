import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// 样式
import './style.less';
// 组件
import SearchInput from '@/components/SearchInput/index.jsx';

class SearchHeader extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div id="search-header" className="clear-fix">
        <span className="back-icon float-left" onClick={this.clickHandle}>
          <i className="icon-chevron-left"></i>
        </span>
        <div className="input-container">
          <i className="icon-search"></i>
          &nbsp;
          <SearchInput value={this.props.keyword || ''} enterHandleFn={this.enterHandle.bind(this)} />
        </div>
      </div>
    );
  }
  // 返回
  clickHandle = () => {
    this.props.history.goBack();
  }
  // 关键字搜索
  enterHandle = (value) => {
    this.props.history.push(`/search/all/${encodeURIComponent(value)}`);
  }
}

export default withRouter(SearchHeader);
