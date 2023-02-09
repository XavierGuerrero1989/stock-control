import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Obra from '../../assets/construccion.jpg'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'admin') {
      navigate('/adminHome');
    } else if (username === 'jefe' && password === 'jefe') {
      navigate('/jefeHome');
    } else {
      setErrorMessage('Usuario o Contraseña incorrectos.');
    }
  };

  return (
    <div>
      <Navbar />
      <Stack gap={3} className="container-fluid loginBack" style={{ backgroundImage:`url(${Obra})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
        <form onSubmit={handleSubmit} className="row input__row">
          <div className="form-group col-md-2 input text-center">
            <label htmlFor="username">Nombre de Usuario:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group col-md-2 input text-center">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage !== '' && (
            <div className="alert col-md-2 alert-danger text-center" role="alert">
              {errorMessage}
            </div>
          )}
          
            <button type="submit" className="btn col-md-1 btn-primary text-center">
            Ingresar
            </button>
          
        </form>
      </Stack>
    </div>
  );
};

export default Login;

