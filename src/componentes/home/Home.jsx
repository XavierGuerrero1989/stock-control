import React from 'react'
import Navbar from '../navbar/Navbar'
import Admin from '../../assets/admin.png'
import Obra from '../../assets/obra.png'
import Back from '../../assets/construccion.jpg'
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom'


const Home = () => {

   


  return (
    <div className='Container-fluid home' style={{ 
        backgroundImage: `url(${Back})`
      }}>
        <Stack className='row align-items-center' direction="vertical" >
            
            <div className='col-md-2 home__img__ctn text-center'>
                <span className='home__titleName'>Login Administrador</span>
                <Link to='/admin'><img src={Admin} className='home__img'></img></Link>
            </div>
            
            
            <div className='col-md-2 home__img__ctn text-center'>
                <span className='home__titleName'>Login Jefe de Obra</span>
                <Link to='/jefe'><img src={Obra} className='home__img'></img></Link>
            </div>
            
        </Stack>

    </div>
  )
}

export default Home