import React, {useEffect} from 'react'
import { collection , getDocs , getFirestore } from "firebase/firestore";
import { useState } from 'react';
import Parcializador from '../parcializador/Parcializador';
import NavAdmin from '../navAdmin/NavAdmin'


const StockDia = () => {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const dataBase = getFirestore();
        const myCollection = collection(dataBase, 'locations')

        getDocs(myCollection).then((data) => {
          const auxCuadrillas = data.docs.map ((cuadrilla) => ({
                    ...cuadrilla.data(),
                    id: cuadrilla.id,
                  }))
          setLocations(auxCuadrillas);
        })
  
    }, []) ;

    
  return (
    <>
      < NavAdmin />
      <div className='container-fluid'>
        <div className="row text-center">
          <h1 className="col-md-12">Stocks Actualizados</h1>
        </div>
      </div>
      <div>
        {locations.map((location) => (
        <Parcializador location={location}  />
        ))}
      </div>
    </>
    
  )
}

export default StockDia