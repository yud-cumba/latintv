import React, {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import addNewSpace from '../firebase/firestore'

export default function ReservedForm() {
    const [ newSpace , setNewSpace] = useState({
         date : '' , 
         program: '', 
         reservedHour: '' , 
         product :''
    });
    
    // const sendDataToVerify = () => {
    //     history.push({
    //         pathname: '/verifica-tu-reserva',
    //         state: newSpace,
    //    });
    // }
    
    const handleInputChange = event => {
        const { name, value } = event.target;
        setNewSpace(prevState => ({
          ...prevState,
          [name]: value
        }));
      };


    console.log(newSpace)
    return (
        <div>
            <div>
                Reserva su publicidad
            </div>
            <form>
                <label for="producto">Nombre del anunciante</label>
                <input placeholder='Producto' name="product" onChange={handleInputChange}></input>
                <label for="program">Nombre del programa</label>
                <input placeholder='Programa' name="program" onChange={handleInputChange}></input>
                <div>
                    <input type="date" name="date" onChange={handleInputChange}></input>
                    <select name="type" id="type" onChange={handleInputChange}>
                        <option value='morning'>Mañana</option>
                    </select>
                </div>
                <Link
                    to={{
                        pathname: "/verifica-tu-reserva",
                        state: newSpace,
                    }}
                >
                Verificar Reserva
                </Link>
                 <button >Cancelar</button>
            </form>
        </div>
    )
}
