

import { Routes , Route } from 'react-router-dom'
import Header from './Header';
import Home from "./Home";
import Product from "./Product";
import Cart from "./Cart";
import Footer from "./Footer";
import Protected from './Protected';
import Login from './Login';
import React from 'react';
import NotFound from './NotFound';



function App() {
 
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Protected Cmp={Home} /> } />
    <Route path="/product" element={ <Protected Cmp={Product} />} />
    <Route path="/cart" element={ <Protected Cmp={Cart} />} />
    <Route path="/login" element={<Login/>} />
    <Route path="*" element={<NotFound/>} />
    </Routes> 
    <Footer/>

    </>
  )
}

export default App
