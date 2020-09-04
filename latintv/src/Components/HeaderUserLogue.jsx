import React from 'react';
import { Link } from "react-router-dom";
import './styles/Header.scss';
import logo from '../Images/logo_forms.png';
import 'firebase/firebase-auth'
import {signOut} from '../firebase/auth'

const HeaderUserLogue = () => {
    return (
        <header className='containerHeader'>
            <div className='containerLogo'>
                <Link className='linkHome' to={'/'}><img className='logoLatinTv' src ={logo} alt="Logo Latin TV"/></Link>
            </div>
            <div className='containerIniciarSesion'>
                <section className='iniciarSesion'><p><Link className='linkHome' onClick={()=>{
                    signOut();
                }} to={'/'}>Cerrar sesión</Link></p></section>
            </div>
        </header>
    )
};
export default HeaderUserLogue;