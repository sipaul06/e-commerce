import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Product from './components/Product';
import Cart from './pages/Cart';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/product/:id" element={<Detail/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/carts" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App