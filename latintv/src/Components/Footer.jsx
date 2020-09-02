import React from 'react';
import './styles/Footer.scss';

const Footer = () => {
    return (
        <footer className='containerFooter'>
            <div className='divLatin'><p>Latin TV</p></div>
            <div className='divTerminos'>
                <p>Todos los derechos reservados<br/>Cadena peruana de Radiofusión S.A.</p>
            </div>
            <div className='divPoliticas'>
                <p>
                    Políticas de privacidad<br/>Términos y condiciones<br/>
                    Código de ética<br/>Línea ética
                </p>
            </div>
        </footer>
    )
};
export default Footer;