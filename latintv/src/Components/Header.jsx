import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div>
                <img className='logo' src ='' alt="Logo Burger"/>
            </div>
            <div>
                <Link className='' to={'/'}>Iniciar sesión</Link>
            </div>
        </header>
    )
};
export default Header;