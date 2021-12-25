import React from 'react';
import './cart.css';
import CartItem from '../cartItem/cartItem';
export default class Cart extends React.Component {
	stat = {
		counter: 0,
	};
	totalAmount = () => {
		let total = 0;
		this.props.cartCheck.forEach((element) => {
			total += +element.price;
		});
		return total;
	};
	deleteItem = (id) => {
		const newListItem = this.props.cartCheck.filter((item) => {
			return item.id !== id;
		});
		this.props.setCartCheck(newListItem);
	};
	showCartList = () => {
		if (this.props.cartCheck) {
			return this.props.cartCheck.map((item, index) => {
				return (
					<CartItem
						key={index}
						id={item.id}
						title={item.title}
						price={item.price}
						image={item.image}
						deleteItem={this.deleteItem}
					/>
				);
			});
		}
	};

	render() {
		return (
			<div className='cart'>
				<div>{this.showCartList()}</div>
				<div className='pay'>
					total amount:{this.totalAmount()}
					<span>
						<button
							onClick={() => {
								if (this.props.cartCheck.length > 0)
									this.props.setCartCheck([]);
							}}
						>
							PAY NOW
						</button>
					</span>
				</div>
			</div>
		);
	}
}
