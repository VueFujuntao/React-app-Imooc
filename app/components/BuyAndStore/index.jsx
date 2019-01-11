import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 样式
import './style.less';

class BuyAndStore extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    console.log(this.props.isStore);
    return (
      <div className="buy-store-container clear-fix">
        <div className="item-container float-left">
          {
            this.props.isStore
              ? <button className="selected" onClick={this.storeClickHandle}>已收藏</button>
              : <button onClick={this.storeClickHandle}>收藏</button>
          }
        </div>
        <div className="item-container float-right">
          <button onClick={this.buyClickHandle}>
            购买
          </button>
        </div>
      </div>
    )
  }
  componentDidMount() {
  }
  storeClickHandle = () => {
    this.props.storeHandleFn();
  }
  buyClickHandle = () => {
    this.props.buyHandleFn();
  }
}

BuyAndStore.proptypes = {
  isStore: PropTypes.bool
}

export default BuyAndStore;
