import React from 'react';
import './styles/ProgramModal.scss';

const ProgramModal = (props) => {
    const { data, show } = props;
    return (
        <React.Fragment>
                <aside className="pmodal">
                        <div className="content-pmodal">
                            <img src={require('../Pages/styles/assets/programa.png') }/>
                            <button className="close-pmodal" onClick ={ () => show(false)}>X</button>
                            <p>Programa Aplicado: {data.title}</p>
                        </div>
                </aside>
        </React.Fragment>
    )
};
export default ProgramModal;