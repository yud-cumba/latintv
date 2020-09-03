import React from 'react';
import { Link } from "react-router-dom";
import './styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <header className='containerHeader'>
            <div className='containerLogo'>
                <p><Link className='linkHome' to={'/'}>LATIN TV</Link></p>
            </div>
            <div className='containerIniciarSesion'>
                <section className='preguntasFrecuentes'><p><Link className='linkHome' to={'/'}>Preguntas frecuentes</Link></p></section>
                <section className='iniciarSesion'><p><Link className='linkHome' to={'/login'}>Iniciar sesión</Link></p></section>
            </div>
        </header>
    )
};
export default Header;
{/* <img className='logoLatinTv' src ='https://upload.wikimedia.org/wikipedia/commons/4/4a/Latina_televisi%C3%B3n_12_2019.jpg' alt="Logo Latin TV"/> */}