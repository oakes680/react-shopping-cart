import React, { createContext, useState } from 'react';
import data from '../data'



export const ProductContext = createContext();

const ProductContextProvider = props => {

  const [products] = useState(data);

  const [cart, setCart] = useState([]);

  const addItem = item => {
    // if item.id ? setcart : alert(you can only have one book)
    cart.find(itemObject => itemObject === item)
      ? setCart(cart)
      : setCart([...cart, item]);
    console.log('adddddddd', item.id);

    
  };

  const removeItem = id => {
    setCart(cart.filter(item => item.id !== id))
    console.log(id)
    console.log(cart)
  }


return (
  <ProductContext.Provider value={{products, cart, addItem, removeItem}} >
    {props.children}
  </ProductContext.Provider>
);
};

export default ProductContextProvider;