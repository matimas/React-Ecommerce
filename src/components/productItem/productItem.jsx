import React from 'react';
import './productItem.css';

const ProductItem = ({ image, title, category, price, addToCart, id }) => {
	return (
		<div className='product-item'>
			<div
				className='image'
				style={{ background: `url(${image})no-repeat center center/cover` }}
			></div>
			<div>title :{title}</div>
			<div>Price :{price}</div>
			<button value={id} onClick={(e) => addToCart(e.target.value)}>
				Add to cart
			</button>
		</div>
	);
};

export default ProductItem;
