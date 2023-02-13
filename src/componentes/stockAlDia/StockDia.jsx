import React, {useEffect} from 'react'
import { collection , getDocs , getFirestore } from "firebase/firestore";


const StockDia = () => {

    useEffect(() => {
        const dataBase = getFirestore();
        const myCollection = collection(dataBase, 'cuadrilla1')

        getDocs(myCollection).then((data) => {
            console.log(data.docs[0].data())
        })


    }, []) ;

    
  return (
    <div>StockDia</div>
  )
}

export default StockDia