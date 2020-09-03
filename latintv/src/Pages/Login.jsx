import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import './styles/Login.scss'
  // useState()
  // return(
const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = (event) => {
     event.preventDefault();
    //  localStorage.setItem('token', token);
      history.push('/reserva');
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
              {/* value={useremail} onChange={updateUser} */}
              <p>Ingresa tu contraseña</p>
              <input type="password" className="login-select" name="password" placeholder="Contraseña"  value={password} onChange={(e) => setPassword(e.target.value)}/>
              {/* value={password} onChange={updatepassword} */}
              <button type="submit" value="Login" className="login-button">Ingresar</button>
            </form>
          <div className="login-register">
          <p>Olvide mi contraseña</p>
          <p>¿No tienes una cuenta?<a href='#'>Registrate</a></p>
          </div>
      </div>
    </body>
  )};

export default Login;