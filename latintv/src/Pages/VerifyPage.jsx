import React , { useState }from 'react'
import { useHistory , Link } from 'react-router-dom';
import { addReservedSpace, addSpaceToUser } from '../firebase/firestore'
import HeaderUserLogue from '../Components/HeaderUserLogue'
import costProgramById from '../Utils/costos';
import './styles/VerifyPage.scss'
import { useEffect } from 'react';

const  VerifyPage = prop => {
    let history = useHistory();

    const [data, setData] = useState((prop.location && prop.location.state) || {});
    const {date ,
    product,
    programId, 
    reservedHour, program} = data;

    const [costos, setCostos] = useState({})
    const userId = 'A27rshHeq0eZGB7aJZnB';
    
    useEffect(() => {
        setData(data);
        costProgramById(programId, userId, new Date())
            .then((costo) => setCostos(costo));
    }, [])
    function reserveSpace (){
        addReservedSpace(userId, programId,program, reservedHour.split(','), date, costos.total)
        .then((data) => {
            addSpaceToUser(data.id, userId )
        });
        const dateParts = date.split('-');
        const datee = `${dateParts[1]}-${dateParts[0]}-${dateParts[2]}`
        history.push({
                    pathname: '/calendar',
                    state: { datee },
               })
    }


    return (
        <div className='back-modal'>
            <HeaderUserLogue/>
            <div id="modal" className="modal">
                <div className="content-modal">
                    <div className="modal-header"><section className='verificarDatos'>Verifique los datos ingresados</section></div>
                    <div className="modal-body">
                        <ol className='conteinerModal'>
                            <li value="1">Producto reservado: {product}</li>
                            <li>Programa aplicado: {program}</li>
                            <li>Fecha del espacio reservado:: {date}</li>
                            <li>Horario del programa: {`${reservedHour}`}</li>
                            <li>Hora de reserva: {`${(new Date()).getHours()}:${(new Date()).getMinutes()} ${(costos.recargo)? `- aplica recargo ${costos.percentage}`: ''}`}</li>
                            <li>Detalle de Pago:
                                <ul>
                                    <li>Tarifa Básica:  US$ {costos.tarifaBase}.00`</li>
                                    <li>Recargo {costos.percentage}:     US$  {costos.recargo}.00'</li>
                                    <li>IGV 18%:        US$  {costos.igv}.00'</li>
                                    <li>Monto Total:    US$ {costos.total}.00</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <div className="modal-footer">
                        <Link className='btnVerificarReserva'
                            to={{
                                pathname: "/reserva",
                                state: {program, product},
                            }}
                        >Editar Reserva</Link> 
                        <button className="reserveButton" onClick={reserveSpace}>Aplicar Reserva</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VerifyPage;
