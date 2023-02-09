import { useState } from 'react'
import './App.scss'
import Login from './componentes/login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from './componentes/admin/adminHome'
import JefeObraHome from './componentes/JefeObra/JefeObraHome'


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Login />} />
          <Route path='/adminHome' element={< AdminHome />} />
          <Route path='/jefeHome' element={< JefeObraHome />} />
        </Routes>
      </BrowserRouter>

  )
}
export default App
