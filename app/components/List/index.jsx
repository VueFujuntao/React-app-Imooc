import React, { Component } from 'react';
import './style.less';
import Item from '@/components/List/item/index.jsx';

class List extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div>
				{
					this.props.data.map((item, index) => {
						return <Item item={item} key={index}></Item>
					})
				}
			</div>
		);
	}
}

export default List;
