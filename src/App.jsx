

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import Products from './components/Products'
import { useState,createContext } from 'react'
export const cartContext = createContext();
function App() {
  const [cart, setCart]= useState([]);

  return (
    
    <cartContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
      <Header />

      <div className="container">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Products' element={<Products />}/>

          <Route path='/Cart' element={<Cart />}/>

        </Routes>
      </div>
      </BrowserRouter>
      
    </cartContext.Provider>
      

  
    
  )
}

export default App
