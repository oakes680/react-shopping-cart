import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext'



const Product = ({product, addItem}) => {
	const { cart } = useContext(ProductContext)
	
	return (
		<div className="product">
			<img src={product.image} alt={`${product.title} book`} />

			<h1 className="title">{product.title}</h1>

			<p className="price">${product.price}</p>

			<button onClick={() => addItem(product)}>
				{cart.find(itemObject => itemObject === product)
					? 'This item is in your cart'
					: 'Add to cart'}
			</button>
		</div>
	);
};

export default Product;
