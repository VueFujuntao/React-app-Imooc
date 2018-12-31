import React from 'react';
// 样式
import './style.less'

class LoadMore extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="load-more" ref="wrapper">
        {
          this.props.isLoadingMore
            ? <span>加载中...</span>
            : <span onClick={this.loadMoreHandle}>加载更多</span>
        }
      </div>
    )
  }
  loadMoreHandle = () => {
    this.props.loadMoreDataFn();
  }
  componentDidMount() {
    const loadMoreFn = this.props.loadMoreDataFn;
    const wrapper = this.refs.wrapper;
    function callBack() {
      const top = wrapper.getBoundingClientRect().top;
      const windowHeight = window.screen.height;
      if (top && top < windowHeight) {
        loadMoreFn();
      }
    }
    let timeOutId = null;
    window.addEventListener('scroll', (res) => {
      if (this.props.isLoadingMore) return;
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
      timeOutId = setTimeout(callBack, 50);
    }, false);
  }
  componentWillUnmount() {
  }
}

export default LoadMore;
