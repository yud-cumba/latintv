import React from 'react'

const Login = () => (
    <div className="login">
      <div className="login-form">
        <h1>Inicia Sesión</h1>
        <form>
          <input type="text" name="user" placeholder="user"/>
          <input type="password" name="password" placeholder="password"/>
          <button type="submit" value="Login">Ingresar</button>
        </form>
        <p>¿No tienes una cuenta? Registrate</p>
      </div>
    </div>
);

export default Login;