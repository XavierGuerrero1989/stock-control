import { useState } from 'react'
import './App.scss'
import Navbar from './componentes/navbar/Navbar'
import Login from './componentes/login/Login'
import Home from './componentes/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from './componentes/admin/adminHome'
import JefeObraHome from './componentes/JefeObra/JefeObraHome'
import LoginJefe from './componentes/LoginJefe/LoginJefe'

function App() {

  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/admin' element={< Login />} />
          <Route path='/jefe' element={< LoginJefe />} />
          <Route path='/adminHome' element={< AdminHome />} />
          <Route path='/JefeHome' element={< JefeObraHome />} />
        </Routes>
      </BrowserRouter>

  )
}
export default App
