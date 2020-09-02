import React, {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import {getReservedSpac, addNewSpace, getUser, getAllData} from '../firebase/firestore'
import './styles/Reservedform.scss'
import currentDate from '../Utils/currentDate';
import InputCalendar from './InputCalendar';
import weekToNumber from '../Utils/weekConverter'
import getDay from "date-fns/getDay";


export default function ReservedForm() {
    //states
    const [ newSpace , setNewSpace] = useState({
         date : '' ,
         reservedHour: '' , 
         program:'',
         day: ''
    });
    const [programId, setProgramId] =useState('');
    const [availableHours, setAvailableHours] = useState([]);
    const [availableDays, setAvailableDays] = useState([]);
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
        // document.getElementById('calendar').setAttribute('min', currentDate);
        // document.getElementById('calendar').setAttribute('value', currentDate);
        getAllData((programs) => {
            const programTv = programs.filter((program) => program.nombre === newSpace.program);
            const programTvId = (programTv.length>0)? programTv[0].id : 0;
            //console.log(programTv);
            const days = (programTv.length>0)? programTv[0].dias : ['lunes'];
            //console.log(days);
            setAvailableDays(days);
            const horario = (programTv.length>0)? programTv[0].horario : [0,1];
            const numberIntervales = (horario[1]-horario[0])*6;
            const hours = (Array.from(Array(numberIntervales).keys())).map((i) => {
                const inicio = `${horario[0]}:${i*10}`;
                const final = ((i+1)*10%60===0 && i*10!==0)? `${horario[0]+1}:${(i+1)*10%60}`:`${horario[0]}:${(i+1)*10}`
                return [inicio,final];
            });
            setAvailableHours(hours);
            setProgramId(programTvId);
         },'tvprograms')
    }, [newSpace]);

    function filterDate (date) {
            const day = getDay(date);
                
            return weekToNumber(availableDays).includes(day);
          };
    
    const handleInputChange = event => {
        const { name, value } = event.target;
        setNewSpace(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
    console.log(newSpace);
    return (
        <div className='containerForm'>
            <div className='divheaderForm'>
                <div className='containerLogoForm'>Latin TV</div>
                <div>Reserva su publicidad</div>
            </div>
            <form>
                <div className='inputProduct'>
                    <label for="product" className='nameInput'>Nombre del anunciante</label><br/>
                    <input placeholder='Producto' name="product" className='loginSelect' onChange={handleInputChange}></input>                        
                </div>
                <div className='inputProgram'>
                    <label for="program" className='nameInput'>Nombre del programa</label><br/>
                    <input placeholder='Programa' name="program" className='loginSelect' onChange={handleInputChange}></input>                        
                </div>
                <div className='nameInput'>La selección de fecha debe ser posterior  al día que se solicita la reserva</div>
                <div className='selecFecha'>
                    <div>
                        <InputCalendar 
                            className='inputDate'
                            filterDate={filterDate} 
                            name="date" 
                            dateValue={(value) => setNewSpace(prevState => ({
                            ...prevState,
                            date: value
                            }))}>
                        </InputCalendar>
                        {/* <input type="date" name="date" id='calendar' onChange={handleInputChange} required></input> */}
                        </div>
                    <div>
                        <select name="reservedHour" className='inputDate' onChange={handleInputChange}>
                            {availableHours.map((hours) => <option value={hours}>
                                {`(${hours[0]}-${hours[1]})`}
                            </option>)}
                        </select>
                    </div>
                </div>
            </form>
            <div className='sectionBotones'>
                    <button className='btnCancelar' >Cancelar</button> 
                    <Link className='btnVerificarReserva'
                        to={{
                            pathname: "/verifica-tu-reserva",
                            state: {...newSpace, programId},
                        }}
                    >
                    Verificar Reserva
                    </Link>                               
            </div>
        </div>
    )
}
