import React from 'react'
import Navbar from '../navbar/Navbar'
import Admin from '../../assets/admin.png'
import Obra from '../../assets/obra.png'
import Back from '../../assets/construccion.jpg'
import { Link } from 'react-router-dom'


const Home = () => {

   


  return (
    <div className='Container-fluid home' style={{ 
        backgroundImage: `url(${Back})`
      }}>
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-2 home__img__ctn text-center'>
                <span>Login Administrador</span>
                <Link to='/admin'><img src={Admin} className='home__img'></img></Link>
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-2'></div>
            <div className='col-md-2 home__img__ctn text-center'>
                <span>Login Jefe de Obra</span>
                <Link to='/jefe'><img src={Obra} className='home__img'></img></Link>
            </div>
            <div className='col-md-2'></div>
        </div>

    </div>
  )
}

export default Home