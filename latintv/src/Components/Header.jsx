import React from 'react';

const Header = () => {
    return (
        <header>
            <div>
                <img className='logo' src ={logo} alt="Logo Burger"/>
            </div>
            <div>
                <Link className='elegirUsuario' to={referencia}>Iniciar sesión</Link>
            </div>
        </header>
    )
};
export default Header;