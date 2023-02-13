import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOjtgGwdlASkR96fDhV-JVw8VZbwOo0Bs",
  authDomain: "stock-control-7332d.firebaseapp.com",
  projectId: "stock-control-7332d",
  storageBucket: "stock-control-7332d.appspot.com",
  messagingSenderId: "531145489896",
  appId: "1:531145489896:web:f1d2ac2e2ca1c94f14785d"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode>  */}
  </>
  ,
)
