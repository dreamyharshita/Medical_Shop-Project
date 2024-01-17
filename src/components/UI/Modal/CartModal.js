import React from "react";
import './CartModal.css';

import ReactDOM from 'react-dom';

const BackDrop=(props)=>{
    return <div className="backdrop" onClick={props.onClose}></div>
}

const Overlay=(props)=>{
    return <div className="modal" >{props.children}</div>
    
}

const CartModal=(props)=>{
return (
    <React.Fragment>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,document.getElementById('backdrop'))}
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,document.getElementById('Overlay'))}
    </React.Fragment>
)
}

export default CartModal;