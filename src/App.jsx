import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import Product from './components/product/Product.jsx';
import Cart from './components/product/Cart/Cart.jsx';


function App() {

  const [token, setToken] = useState("")

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [])

  return <>
      <Routes>
        {token !== null ? (
        <Route path="/" element={<Product />}
          />
        ) : (
        <Route path="/" element={<Form />}/>
        )}
        <Route path="/registration" element={<Form />}/>
        <Route path='/Cart' element={<Cart />}/>
      </Routes>
  </>
}

export default App;
