import React from 'react';
import { Link } from "react-router-dom";
import './styles/Header.scss';

const Header = () => {
    return (
        <header className='containerHeader'>
            <div className='containerLogo'>
                <img className='logoLatinTv' src ='https://upload.wikimedia.org/wikipedia/commons/4/4a/Latina_televisi%C3%B3n_12_2019.jpg' alt="Logo Latin TV"/>
            </div>
            <div className='containerIniciarSesion'>
                <Link className='' to={'/'}>Iniciar sesión</Link>
            </div>
        </header>
    )
};
export default Header;