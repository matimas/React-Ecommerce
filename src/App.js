import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './components/homePage/homePage';
import Products from './components/products/products';
import Cart from './components/cart/cart';

function App() {
	const [cartCheck, setCartCheck] = useState([]);

	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/products'>
						<Products cartCheck={cartCheck} setCartCheck={setCartCheck} />
					</Route>
					<Route exact path='/cart'>
						<Cart cartCheck={cartCheck} setCartCheck={setCartCheck} />
					</Route>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
