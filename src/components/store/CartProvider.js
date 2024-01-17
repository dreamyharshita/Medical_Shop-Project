import CartContext from './cart-context';
import React,{useState} from 'react';

const CartProvider=props=>{

    const [items,updateItem]=useState([]); 
    const [amount,updateAmount]=useState(0);

 const buyItemToCartHandler=(item)=>{
  updateAmount(parseInt(amount)+1);

 }
 const addItemToCartHandler=(item)=>{
  updateItem([...items,item])
 }

const cartContext={
    
    items:items,
    totalAmount:amount,
    buyItem:buyItemToCartHandler,
    addItem:addItemToCartHandler
}

return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
};

export default CartProvider;