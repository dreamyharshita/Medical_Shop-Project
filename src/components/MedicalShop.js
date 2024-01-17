import React,{useState,useContext} from "react";
import './MedicalShop.css';
import Button from "./UI/Button/Button";
import Display from './Display.js';
import CartContext from "./store/cart-context";

const MedicalShop=(props)=>{


const [showItems,setShowItems]= useState(false);

const ctx=useContext(CartContext);

const InfoHandler=(event)=>{
   event.preventDefault();
    setShowItems(true);
const name=document.getElementById('med').value;
const desc=document.getElementById('desc').value;
const price=document.getElementById('price').value;

const obj={name:name,
            description:desc,
           price:price,
            quantity:0}


ctx.addItem(obj);

}

    return <div className="shop">
        <div className="labels">
        <label >Medicine</label>
        <label >Description</label>
        <label >Price</label></div>
        <br/>
        <div className="inputs">
        <input type='text' id="med"></input>
        <input type='text' id="desc"></input>
        <input type='number' id="price"></input>
        <Button onClick={InfoHandler}>Add Medicine</Button>
        </div>
        
       {showItems && <Display></Display>} 
    </div>

}

export default MedicalShop;