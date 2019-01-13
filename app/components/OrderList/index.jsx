import React from 'react'

import Item from './Item'

import './style.less'

class OrderList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const data = this.props.data;
    const submitCommentFn = this.props.submitCommentFn;
    return (
      <div>
        {data.map((item, index) => <Item
          key={index}
          data={item}
          submitCommentFn={submitCommentFn}
        />
        )}
      </div>
    )
  }
}

export default OrderList