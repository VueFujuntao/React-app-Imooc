import React, { Component } from 'react';
// 样式
import './style.less';

export default class CurrentCity extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="current-city">
        <h2>{this.props.cityName}</h2>
      </div>
    )
  }
}
