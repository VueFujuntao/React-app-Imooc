import React, { Component } from 'react';
import OrderListComponent from '@/components/OrderList/index.jsx';
import './style.less';

class OrderList extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  render() {
    return (
      <div className="order-list-container">
        <h2>您的订单</h2>
        {
          this.state.data.length
            ? <OrderListComponent data={this.state.data} />
            : <div>{/* loading */}</div>
        }
      </div>
    )
  }
  componentDidMount() {
    // 获取订单数据
    const username = this.props.username
    if (username) {
      this.loadOrderList(username)
    }
  }
  loadOrderList = (username) => {
    this.setState({
      data: [
        {
          img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201638030-473660627.png',
          title: '汉堡大王',
          count: 3,
          price: '167'
        },
        {
          img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201708124-1116595594.png',
          title: '麻辣香锅',
          count: 1,
          price: '188'
        },
        {
          img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png',
          title: '好吃自出餐',
          count: 2,
          price: '110'
        }
      ]
    })
  }
}

export default OrderList;
