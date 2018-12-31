import React from 'react';
// 样式
import './style.less'

class LoadMore extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      timeOutId: null
    }
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
    window.addEventListener('scroll', (res) => {
      if (this.props.isLoadingMore) return;
      if (this.state.timeOutId) {
        clearTimeout(this.state.timeOutId);
      }
      this.setState({
        timeOutId: setTimeout(callBack, 50)
      })
    }, false);
  }
  componentWillUnmount() {
    clearTimeout(this.state.timeOutId);
    this.setState({
      timeOutId: null
    })
  }
}

export default LoadMore;
