import React, { Component } from 'react';
import './products.css';
import API from '../api/api';
import ProductItem from '../productItem/productItem';

class Products extends Component {
	constructor(props) {
		super(props);

		this.state = {
			store: [],
		};
	}
	componentDidMount = async () => {
		const store = await API.getProducts();
		this.setState({
			store,
		});
	};
	addToCart = (id) => {
		const item = this.state.store.find((item) => item.id === id);

		this.props.setCartCheck([...this.props.cartCheck, item]);
	};

	generateProducts = () => {
		return this.state.store.map((item) => {
			return (
				<ProductItem
					id={item.id}
					key={item.id}
					name={item.name}
					title={item.title}
					price={item.price}
					image={item.image}
					addToCart={this.addToCart}
				/>
			);
		});
	};

	render() {
		return <div className='products'>{this.generateProducts()}</div>;
	}
}

export default Products;
