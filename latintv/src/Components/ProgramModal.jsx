import React , { useState }from 'react';
import './styles/ProgramModal.scss';
import { useEffect } from 'react';
import { getAllData } from '../firebase/firestore'

const ProgramModal = (props) => {
    const { data, show } = props;
    const [img, setImg] = useState('');

    useEffect(() => {
        getAllData((programs) => {
            const programTv = (programs.filter((program) => program.nombre === data.title));
            setImg(programTv[0].img);
         }, 'tvprograms');
    }, []);
    return (
        <React.Fragment>
                <aside className="pmodal">
                        <div className="content-pmodal">
                            <img src={img} className='imageProgram' />
                            <button className="close-pmodal" onClick ={ () => show(false)}>X</button>
                            <p>Programa Aplicado: {data.title}</p>
                        </div>
                </aside>
        </React.Fragment>
    )
};
export default ProgramModal;