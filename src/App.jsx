import { useState } from 'react'
import './App.scss'
import Navbar from './componentes/navbar/Navbar'
import Login from './componentes/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={< Login />} />


        </Routes>
      </BrowserRouter>

  )
}
export default App
