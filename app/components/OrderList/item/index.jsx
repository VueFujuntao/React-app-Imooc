import React, { Component } from 'react';
// 组件
import Star from '@/components/Star/index.jsx';
// 样式
import './style.less'

class Item extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      commentState: 2 // 0-未评价，1-评价中， 2-已评价
    }
  }
  render() {
    const data = this.props.data;
    return (
      <div className="clear-fix order-item-container">
        <div className="clear-fix">
          <div className="order-item-img float-left">
            <img src={data.img} />
          </div>
          <div className="order-item-comment float-right">
            {
              this.state.commentState === 0
                ? <button className="btn" onClick={this.showComment}>评价</button>
                :
                this.state.commentState === 1
                  ? ''
                  : <button className="btn unseleted-btn">已评价</button>
            }
          </div>
          <div className="order-item-content">
            <span>商户：{data.title}</span>
            <span>数量：{data.count}</span>
            <span>价格：￥{data.price}</span>
          </div>
        </div>
        {
          // “评价中”才会显示输入框
          this.state.commentState === 1
            ? <div className="comment-text-container">
              <textarea style={{ width: '100%', height: '80px' }} className="comment-text" ref="commentText"></textarea>
              <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                {/* <Star star="0" clickCallback={this.starClickCallback} /> */}
              </div>
              <button className="btn"
                onClick={this.submitClickHandle}>提交</button>
              &nbsp;
              <button className="btn unseleted-btn"
                onClick={this.hideComment}>取消</button>
            </div>
            : ''
        }
      </div>
    )
  }
  componentDidMount() {
    this.setState({
      commentState: this.props.data.commentState
    });
  }
  showComment = () => {
    this.setState({
      commentState: 1
    });
  }
  starClickCallback = () => {

  }
  commentOk = () => {
    this.setState({
      commentState: 2
    });
  }
  hideComment = () => {
    this.setState({
      commentState: 0
    });
  }
  submitClickHandle = () => {
    const submitComment = this.props.submitCommentFn;
    const id = this.props.data.id;
    const commentTextDom = this.refs.commentText;
    const value = commentTextDom.value.trim();
    if (!value) return;
    // 提交评价内容
    submitComment(id, value, this.commentOk);
  }
}

export default Item;
