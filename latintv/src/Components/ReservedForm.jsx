import React, {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import {getReservedSpac, addNewSpace, getUser, getAllData} from '../firebase/firestore'

export default function ReservedForm() {
    //states
    const [ newSpace , setNewSpace] = useState({
         date : '' ,
         reservedHour: '' , 
         programId:'',
         program:'',
    });
    const [availableHours, setAvailableHours] = useState([]);
    //variables

    
    // getUser(userId)
    //     .then((user) => {
    //     setNewSpace(prevState => ({
    //     ...prevState,
    //     products: user.products
    //   }))
    // })
    //functions
        // .then((programs) => console.log(programs));
    useEffect(()=>{
        const userId = 'A27rshHeq0eZGB7aJZnB';

        getAllData((programs) => {
            const programTv = programs.filter((program) => program.nombre === newSpace.program);
            const programTvId = (programTv.length>0)? programTv[0].id : 0;
            const horario = (programTv.length>0)? programTv[0].horario : [0,1];
            const numberIntervales = (horario[1]-horario[0])*6;
            const hours = (Array.from(Array(numberIntervales).keys())).map((i) => {
                const inicio = `${horario[0]}:${i*10}`;
                const final = ((i+1)*10%60===0 && i*10!==0)? `${horario[0]+1}:${(i+1)*10%60}`:`${horario[0]}:${(i+1)*10}`
                return [inicio,final];
            });
         setAvailableHours(hours);
         setNewSpace(prevState => ({
            ...prevState,
            programId: programTvId
          }));
         },'tvprograms')
    });
    const handleInputChange = event => {
        const { name, value } = event.target;
        setNewSpace(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

    return (
        <div>
            <div>
                Reserva su publicidad
            </div>
            <form>
                <label for="product">Nombre del anunciante</label>
                {/* <select name="product" onChange={handleInputChange}>
                   {(newSpace.products).map((product) => <option value={product}>{product}</option>)}
                </select> */}
                <input placeholder='Producto' name="product" onChange={handleInputChange}></input>
                <label for="program">Nombre del programa</label>
                <input placeholder='Programa' name="program" onChange={handleInputChange}></input>
                <div>
                    <input type="date" name="date" onChange={handleInputChange}></input>
                    <select name="reservedHour" onChange={handleInputChange}>
                       {availableHours.map((hours) => <option value={hours}>
                           {`(${hours[0]}-${hours[1]})`}
                        </option>)}
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
