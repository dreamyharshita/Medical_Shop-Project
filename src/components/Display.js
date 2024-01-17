import React, { useContext } from "react";
import CartContext from "./store/cart-context";

const Display=(props)=>{
    const cartCtx=useContext(CartContext);

    console.log(cartCtx.items);

   // const buyHandler=(event)=>{
   // event.preventDefault();
    //    event.target.value+=1;
    //    const quantity=event.target.value;
    //    cartCtx.buyItem(event.target.value);
     //   console.log("bought 1");
    //}
    
return (
    <div>
       
{cartCtx.items.map((item,index)=><li key={index}>Name : {item.name} Description: {item.description} Price: {item.price}
<button value="0" id={'buy_'+ index} onClick={()=>{
    let val=parseInt(document.getElementById('buy_'+ index).value);
    val+=1;
    document.getElementById('buy_'+ index).value=val;
    cartCtx.buyItem(val)
    item.quantity=val;
    console.log("item quantity" , val)
}} > Buy</button>
 <br></br>
</li>


)
}

    </div>
 
    

)}

export default Display;