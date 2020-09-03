import React, { useState, useEffect }  from 'react';
import Header from '../Components/Header';
import './styles/Login.scss'
import { signIn } from '../firebase/auth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = (event) => {
      event.preventDefault();
  };
  return(<body className="background-login">
      <Header/>
      <div className="login">
        <div className="login-header"> 
          <h4 className='miniLogo'>LATIN TV</h4>
          <h3>Anuncia con nosotros</h3>
        </div>
            <form className='login-form' onSubmit={loginSubmit}>
              <p>Ingresa tu correo electrónico</p>
              <input type="text" className="login-select" name="user" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <p>Ingresa tu contraseña</p>
              <input type="password" className="login-select" name="password" placeholder="Contraseña"  value={password} onChange={(e) => setPassword(e.target.value)}/>
              <button type="submit" value="Login" className="login-button" onClick={()=>{
                    signIn(email, password)
                    .then((result) => {                
                        console.log('hola')
                            if (result.user.emailVerified === false) {
                              console.log('correo no verificado');
                            } else {
                            console.log('si ingresa');
                            history.push("/reserva");
                            }
                    });
              }}>Ingresar</button>
            </form>
          <div className="login-register">
          <p>Olvide mi contraseña</p>
          <p>¿No tienes una cuenta?<a href='#'>Registrate</a></p>
          </div>
      </div>
    </body>
  )};

export default Login;