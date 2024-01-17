import React from 'react';
import MedicalShop from './components/MedicalShop';
import './App.css';
import CartButton from './components/UI/Cart/CartButton';
import CartProvider from './components/store/CartProvider';

function App() {

  

  return (
    <CartProvider >
      <div className="app">
    <h1>Medical Shop</h1>
    <CartButton></CartButton>
    </div>
    
    <MedicalShop></MedicalShop>
    </CartProvider>
  );
}

export default App;
