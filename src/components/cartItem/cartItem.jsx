import React from 'react';
import './cartItem.css';

export default function cartItem(props) {
	return (
		<div className='cart-wrapper'>
			<div className='cart-item'>
				<div
					className='image'
					style={{
						background: `url(${props.image})no-repeat center center/cover`,
					}}
				></div>
				<div>title:{props.title}</div>
				<div>price:{props.price}</div>
			</div>
			<div>
				<div>
					<button
						value={props.id}
						onClick={(e) => props.deleteItem(e.target.value)}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}
