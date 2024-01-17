import React from "react";


const CartContext = React.createContext({

    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    buyItem:(item)=>{},
 

});


export default CartContext;