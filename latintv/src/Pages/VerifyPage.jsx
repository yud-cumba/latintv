import React , { useState }from 'react'
import { useHistory } from 'react-router-dom';
import { addReservedSpace, addSpaceToUser } from '../firebase/firestore'
import Header from '../Components/Header';
import costProgramById from '../Utils/costos';
import './styles/VerifyPage.scss'
import { useEffect } from 'react';

const  VerifyPage = prop => {
    let history = useHistory();
    const [ data, setData ] = useState((prop.location && prop.location.state) || {})
    const {date ,
    product,
    programId, 
    reservedHour, program} = data;
    const userId = 'A27rshHeq0eZGB7aJZnB';
    const costos = costProgramById(programId, userId, new Date())
    function reserveSpace (){
        console.log('hour',reservedHour);
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
                            <li value="1">Producto reservado: {product}</li>
                            <li>Programa aplicado: {program}</li>
                            <li>Fecha del espacio reservado:: {date}</li>
                            <li>Horario del espacio reservado: {`${reservedHour}`}</li>
                            <li>Detalle de Pago:<ul>
    <li>Tarifa Básica: `${costos.tarifaBasica}`</li>
                                <li>Recargo 5%: $ {costos.recargo}'</li>
                                <li>IGV 18%:${costos.recargo}'</li>
                                <li>Monto Total:`${costos.tarifaBasica+costos.recargo+costos.igv}`</li>
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
