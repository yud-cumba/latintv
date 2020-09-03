import React from 'react'
import { useHistory } from 'react-router-dom';
import { addReservedSpace, addSpaceToUser } from '../firebase/firestore'
import Header from '../Components/Header';
import './styles/VerifyPage.scss'

const  VerifyPage = prop => {
    let history = useHistory();
    const {date , 
    programId, 
    reservedHour, program} = (prop.location && prop.location.state) || {};
    
    const userId = 'A27rshHeq0eZGB7aJZnB';
    function reserveSpace (){
        alert('añadido con exito');
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
                                <h3>Verifique los datos ingresados</h3>
                                <a href='#' className="close-modal">X</a>
                            </header>
                            <div className="modal-body">
                                <ol>
                                    <li value="1">Producto reservado: {date}</li>
                                    <li>Programa aplicado: {program}</li>
                                    <li>Fecha: </li>
                                    <li>Hora: {reservedHour}</li>
                                    <li>Detalle de Pago:
                                        <ul>
                                            <li>Tarifa Básica:</li>
                                            <li>Recargo 5%:</li>
                                            <li>Auspicio:</li>
                                            <li>IGV 18%:</li>
                                            <li>Monto Total:</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                            <footer className="modal-footer">
                                <button className="edit-reserve-button" onClick={editReserve}>Editar Reserva</button>
                                <button className="reserve-button" onClick={reserveSpace}>Aplicar Reserva</button>
                            </footer>
                        </div>
                            <a href="#" className="btn-close-modal"></a>
                    </aside>
        </div>
    )
}
export default VerifyPage;
