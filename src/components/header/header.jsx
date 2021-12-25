import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='header'>
			<div>
				<Link to='/'>Home</Link>
				<Link to='/Products'>Products</Link>
			</div>
			<div>
				<Link to='/Cart'>🛒</Link>
			</div>
		</div>
	);
};

export default Header;
