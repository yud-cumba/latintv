import React , { useState }from 'react'
import { useHistory } from 'react-router-dom';
import { addReservedSpace, addSpaceToUser } from '../firebase/firestore'
import Header from '../Components/Header';
import './styles/VerifyPage.scss'

const  VerifyPage = prop => {
    let history = useHistory();
    const [ data, setData ] = useState((prop.location && prop.location.state) || {})
    const {date , 
    programId, 
    reservedHour, program} = data;
    const userId = 'A27rshHeq0eZGB7aJZnB';

    
    function reserveSpace (){
        alert('añadido con exito');
        console.log(reservedHour);
        addReservedSpace(userId, programId,program, reservedHour.split(','), date)
        .then((data) => {
            addSpaceToUser(data.id, userId )
        });
        setTimeout(() => { 
            history.push('/calendar');
          }, 2000);
    }
    function editReserve (){
        console.log('Editar ')
    }


    return (
        <div>
            <Header/>
                <a href='#modal' className="show-modal">Prueba para modal</a>
                    <aside id="modal" className="modal">
                        <div className="content-modal">
                            <header className="modal-header">
                                <a href='#' className="close-modal">X</a>
                            </header>
                            Verifique los datos cargados
                            <h1>{date}</h1>
                            <h1>{program}</h1>
                            <h1>{reservedHour}</h1>
                            <button onClick={editReserve}>Editar Reserva</button>
                            <button onClick={reserveSpace}>Aplicar Reserva</button>
                        </div>
                        <a href="#" className="btn-close-modal"></a>
                    </aside>
        </div>
    )
}
export default VerifyPage;
