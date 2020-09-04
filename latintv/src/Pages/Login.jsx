import React, { useState }  from 'react';
import Header from '../Components/Header';
import './styles/Login.scss'
import { signIn } from '../firebase/auth';
import { useHistory } from 'react-router-dom';
import logo from '../Images/logo_forms.png';

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = (event) => {
      event.preventDefault();
  };
  return(
    <div className="background-login">
      <Header/>
      <div className="login">
        <div className="login-header"> 
          <section className='miniLogo'><img className='logoLatinTv' src ={logo} alt="Logo Latin TV"/></section>
          <span className='anuncia'>Anuncia con nosotros</span>
          <span className='area'>Área comercial</span>
        </div>
            <form className='login-form' onSubmit={loginSubmit}>
              <p>Ingresa tu correo electrónico</p>
              <input type="text" className="login-select" name="user" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <p>Ingresa tu contraseña</p>
              <input type="password" className="login-select" name="password" placeholder="Contraseña"  value={password} onChange={(e) => setPassword(e.target.value)}/>
              <button type="submit" value="Login" className="login-button" onClick={()=>{
                    signIn(email, password)
                    .then((result) => {
                            if (result.user.emailVerified === true) {
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
    </div>
  )};

export default Login;