import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext'

// Components
import Product from './Product';


const Products = props => {
	const { products, addItem, cart } = useContext(ProductContext)
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					id2={Math.random()}
					addItem={addItem}
					
				/>
			))}
		</div>
	);
};

export default Products;
