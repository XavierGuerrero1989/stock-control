import { useState } from 'react'
import './App.scss'
import Navbar from './componentes/navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<  />} /> */}


        </Routes>
      </BrowserRouter>

  )
}
export default App
