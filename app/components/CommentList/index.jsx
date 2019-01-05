import React, { Component } from 'react';
import Item from './Item/index.jsx';
import './style.less';

class CommentList extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    // 获取数据
    const data = this.props.data;
    return (
      <div className="comment-list">
        {data.map((item, index) => {
          return <Item key={index} data={item} />
        })}
      </div>
    )
  }
}

export default CommentList;
