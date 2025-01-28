import React from 'react';
import FoodCardList from './foodCards/FoodCardList'
import { CartProvider } from "./foodCards/CartContext";
import './app.scss'
const App = () => {
  return (
    <div className='app'>
      <CartProvider>
      <FoodCardList/>
      </CartProvider>
    </div>
  );
};

export default App;