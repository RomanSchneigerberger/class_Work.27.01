import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodCardList from './foodCards/FoodCardList'
import SnacksList from './pages/snacks/SnacksList'
import HotDogList from './pages/hot-dogs/HotDogList';
import ComboList from './pages/combo/ComboList';
import ShawarmaList from './pages/shawarma/ShawarmaList';
import SingleItem from './pages/singleItem/SingleItem';

import { CartProvider } from "./CartContext";
import './app.scss'
import Nav from './nav/Nav';
import Banner from './banner/Banner'
import Footer from './footer/Footer'
import Cart from './cart/Cart'
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Banner />
        <Nav />
        <CartProvider>
          <div className='provider'>
            <Cart />
            <Routes>
              <Route path='/' index element={<FoodCardList />} />
              <Route path='/burgers' index element={<FoodCardList />} />
              <Route path='/burger/:id'  element={<SingleItem />} />
              <Route path='/snacks' element={<SnacksList />} />
              <Route path='/snack/:id'  element={<SingleItem />} />
              <Route path='/hot-dogs' element={<HotDogList />} />
              <Route path='/hot-dog/:id'  element={<SingleItem />} />
              <Route path='/combo' element={<ComboList />} />
              <Route path='/combo/:id'  element={<SingleItem />} />
              <Route path='/shawarma' element={<ShawarmaList />} />
              <Route path='/shawerma/:id'  element={<SingleItem />} />
              <Route path='/pizza' element={<FoodCardList />} />
              <Route path='/pizza/:id'  element={<SingleItem />} />
              <Route path='/wok' element={<FoodCardList />} />
              <Route path='/wok/:id'  element={<SingleItem />} />
              <Route path='/deserts' element={<FoodCardList />} />
              <Route path='/desert/:id'  element={<SingleItem />} />
              <Route path='/souces' element={<FoodCardList />} />
              <Route path='/souce/:id'  element={<SingleItem />} />
            </Routes>
          </div>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;