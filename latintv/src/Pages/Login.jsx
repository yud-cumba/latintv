import {React, useState} from 'react'


const Login = () => {
  useState()
  return(
    <div className="login">
      <div className="login-form">
        <h1>Inicia Sesión</h1>
        <form>
          <input type="text" name="user" placeholder="user" value={useremail} onChange={updateUser}/>
          <input type="password" name="password" placeholder="password" value={password} onChange={updatepassword}/>
          <button type="submit" value="Login" onClick="">Ingresar</button>
        </form>
        <p>¿No tienes una cuenta? Registrate</p>
      </div>
    </div>
  )
};

export default Login;