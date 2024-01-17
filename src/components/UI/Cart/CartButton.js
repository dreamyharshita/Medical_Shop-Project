import React, { useContext, useState } from "react";
import './CartButton.css';
import CartContext from "../../store/cart-context";
import CartModal from "../Modal/CartModal";

const CartButton=()=>{

    const CartCTX=useContext(CartContext);
    const [showList,updateshowList]=useState(false);

    console.log(CartCTX.items);
    const ShowListHandler=(event)=>{
        event.preventDefault();
       
        updateshowList(true);}

    const hideListHandler=(event)=>{
        event.preventDefault();
        updateshowList(false);
    }
    
    const cartItems=
         <div>
            <h1>Items</h1>
            <div>{CartCTX.items.map((item)=><li>Name--{item.name} Price--{item.price} Quantity--{item.quantity}</li>)}</div>
            <button>Place Order</button>
            <button onClick={hideListHandler}>Close</button>
        </div>
    
return (<>
<button className="button" onClick={ShowListHandler}>Cart {CartCTX.totalAmount}</button>
        {showList && <CartModal onClose={hideListHandler}>{cartItems}</CartModal>}</>
)
}

export default CartButton;