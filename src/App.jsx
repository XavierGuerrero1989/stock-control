import { useState } from 'react'
import './App.scss'
import Login from './componentes/login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from './componentes/admin/adminHome'
import JefeObraHome from './componentes/JefeObra/JefeObraHome'
import StockDia from './componentes/stockAlDia/StockDia';
import Consumos from './componentes/consumos/Consumos';
import Historicos from './componentes/historicos/Historicos';
import Costos from './componentes/costos/Costos';
import Parametros from './componentes/parametros/Parametros';


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Login />} />
          <Route path='/adminHome' element={< StockDia />} />
          <Route path='/jefeHome' element={< JefeObraHome />} />
          <Route path='/consumos' element={< Consumos />} />
          <Route path='/historicos' element={< Historicos />} />
          <Route path='/costos' element={< Costos />} />
          <Route path='/parametros' element={< Parametros />} />
        </Routes>
      </BrowserRouter>

  )
}
export default App
