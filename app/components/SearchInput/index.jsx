import React, { Component } from 'react';
// 样式
import './style.less';

class SearchInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <input
        className='search-input'
        placeholder="请输入关键字"
        value={this.state.value}
        onChange={this.changeHandle}
        onKeyUp={this.keyUpHandle}
        type="text" />
    );
  }
  componentDidMount() {
    this.setState({
      value: this.props.value || ''
    });
  }
  changeHandle = (e) =>{
    this.setState({
      value:  e.target.value
    });
  }
  keyUpHandle = (e) => {
    if (e.keyCode !== 13) return;
    this.props.enterHandleFn(e.target.value);
  }
}

export default SearchInput;
