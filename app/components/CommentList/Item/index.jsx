import React, { Component } from 'react';
// 组件
import Star from '@/components/Star/index.jsx';
// 样式
import './style.less';

class CommentItem extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        // 获取数据
        const item = this.props.data

        return (
            <div className="comment-item">
                <h3>
                    <i className="icon-user"></i>
                    &nbsp;
                    {item.username}
                </h3>
                <Star star={item.star}/>
                <p>{item.comment}</p>
            </div>
        )
    }
}

export default CommentItem;
