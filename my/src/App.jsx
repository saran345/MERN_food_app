import React from "react";
import Pizza from "./Comp/Pizza";
import {BrowserRouter as Routers, Routes, Route,Link} from 'react-router-dom'
import Home from "./Comp/Home";
import Burger from "./Comp/Burger";
import Snacks from "./Comp/Snacks";
import Register from "./Comp/Register";
import Login from './Comp/Login'
import Cart from './Comp/Cart'
import TestConnection from "../src/TestConnection"
export default function App(){
  return(
    <> 
   <TestConnection />

    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizzas" element={<Pizza />} />
        <Route path="/burgers" element={<Burger />} />
        <Route path="/snacks" element={<Snacks/> } />
        <Route path="/user" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Routers>

      </>
  )
} 