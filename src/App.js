import React from 'react';
import { Route } from 'react-router-dom';


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContextProvider from './context/ProductContext'




function App() {
	// const [products] = useState(data);
	// const [cart, setCart] = useState([]);

	// const addItem = item => {
	// 	setCart(...cart, item)
	// };

	return (
		<ProductContextProvider>
	
			<div className="App">
				<Navigation />

				{/* Routes */}
				<Route
					exact
					path="/"
					render={() => (
						<Products
							
						/>
					)}
				/>

				<Route
					path="/cart"
					render={() => <ShoppingCart />}
				/>
			</div>
	
		</ProductContextProvider>
	);
}

export default App;
