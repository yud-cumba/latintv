import React from 'react';
import './styles/ProgramModal.scss';

const ProgramModal = (props) => {
    const { data, show } = props;
    return (
        <React.Fragment>
            {/* <Header/> */}
            {/* <a href='#modal' className="show-modal">Prueba para modal</a> */}
                {/* <aside id="modal" className="modal"> */}
                <aside className="pmodal">
                        <div className="content-pmodal">
                            <img src={require('../Pages/styles/assets/programa.png')}/>
                            <a href="#" className="close-pmodal" onClick ={ () => show(false)}>X</a>
                            <p>Programa Aplicado: {data.title}</p>
                        </div>
                </aside>
        </React.Fragment>
    )
};
export default ProgramModal;