import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Comp/Home'
import About from '../Comp/About'
import Contact from '../Comp/Contact'
import Nav from './Nav'
import Error from '../NotFound/Error'
import Cart from '../Comp/Cart'

export default function Main() {
  return (
   <>
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Products" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="*" element={<Error/>}/>
   </Routes>
   </BrowserRouter>
   
   </>
  )
}
