import {React, useState} from 'react';
import Header from '../Components/Header';
import './styles/Login.scss'

const Login = () => {
  useState()
  return(
    <body>
      <Header/>
    <div className="login">
      <div className="login-form">
        <h1>Inicia Sesión</h1>
        <form>
          <input type="text" name="user" placeholder="user"/>
          {/* value={useremail} onChange={updateUser} */}
          <input type="password" name="password" placeholder="password"/>
          {/* value={password} onChange={updatepassword} */}
          <button type="submit" value="Login" onClick="">Ingresar</button>
        </form>
        <p>¿No tienes una cuenta? Registrate</p>
      </div>
    </div>
    </body>
  )
};

export default Login;