import React from 'react';
import './styles/ProgramModal.scss';

const ProgramModal = (props) => {
    const { data, show } = props;
    return (
        <React.Fragment>
            {/* <Header/> */}
            {/* <a href='#modal' className="show-modal">Prueba para modal</a> */}
                {/* <aside id="modal" className="modal"> */}
                <div className="pcontent-modal">
                        <header className="pmodal-header">
                            <h1>AQUI VA IMAGEN DE {data.title}</h1>
                            <button className="pclose-modal" onClick ={ () => show(false)}>X</button>
                            <p>Programa Aplicado: {data.title}</p>
                        </header>
                        <div className="pmodal-body">
                        </div>
                    </div>
        </React.Fragment>
    )
};
export default ProgramModal;