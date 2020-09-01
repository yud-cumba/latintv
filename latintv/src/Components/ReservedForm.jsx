import React, {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import { addNewSpace, getUser} from '../firebase/firestore'

export default function ReservedForm() {
    //states
    const [ newSpace , setNewSpace] = useState({
         date : '' , 
         reservedHour: '' , 
         products :[]
    });
    //variables

    const userId = 'A27rshHeq0eZGB7aJZnB';
    getUser(userId).then((user) => setNewSpace(prevState => ({
        ...prevState,
        products: user.products
      })));

    //functions
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
                <select name="product" onChange={handleInputChange}>
    {(newSpace.products).map((product) => <option value={product}>{product}</option>)}
                </select>
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
