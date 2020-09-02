import React from 'react'
import { useHistory } from 'react-router-dom';
import { addReservedSpace, addSpaceToUser } from '../firebase/firestore'

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

    return (
        <div>
           <div>
                Verifique los datos cargados
            </div>
                <h1>{date}</h1>
                <h1>{program}</h1>
                <h1>{reservedHour}</h1>
            <div>
                 <button >Editar Reserva</button>
                 <button onClick={reserveSpace}>Aplicar Reserva</button>
            </div>
        </div>
    )
}
export default VerifyPage;
