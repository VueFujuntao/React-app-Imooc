import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BuyAndStore extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.isStore)
    return (
      <div>{this.props.isStore}</div>
    )
  }
}

BuyAndStore.proptypes = {
  isStore: PropTypes.bool
}

export default BuyAndStore;
