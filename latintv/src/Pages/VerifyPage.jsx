import React from 'react'

const  VerifyPage = prop => {
    const {date , 
    program, 
    reservedHour , 
    product} = (prop.location && prop.location.state) || {};
    


    return (
        <div>
           <div>
                Verifique los datos cargados
            </div>
                <h1>{date}</h1>
                <h1>{program}</h1>
                <h1>{reservedHour}</h1>
                <h1>{product}</h1>
            <div>
                 <button >Editar Reserva</button>
                 <button >Aplicar Reserva</button>
            </div>
        </div>
    )
}
export default VerifyPage;
