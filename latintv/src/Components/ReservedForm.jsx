import React, {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import {getReservedSpac, addNewSpace, getUser, getAllData} from '../firebase/firestore'
import './styles/Reservedform.scss'
import currentDate from '../Utils/currentDate';
import hourIntervales from '../Utils/availableHours'
import InputCalendar from './InputCalendar';
import weekToNumber from '../Utils/weekConverter'
import getDay from "date-fns/getDay";
import InputPredictive from './InputPredictive';
import firebase from 'firebase/app';
import 'firebase/firebase-auth'
import { traerUsuarios } from '../firebase/firestore'

export default function ReservedForm() {
    const [ gmailUser, setgmailUser] = useState('');
    const [ dataUser, setdataUser ] = useState([]);
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setgmailUser(user.email);
        }
      });
    useEffect(() => {
        traerUsuarios((data)=>{
            // console.log(data)
            setdataUser(data);
        });
    }, [dataUser]);
    const [ newSpace , setNewSpace] = useState({
         date : '' ,
         reservedHour: '' , 
         program:'',
         day: ''
    });
    const [programId, setProgramId] =useState('');
    const [availableHours, setAvailableHours] = useState([]);
    const [availableDays, setAvailableDays] = useState([]);
    const [allPrograms, setAllPrograms] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(()=>{
        const userId = 'A27rshHeq0eZGB7aJZnB';
        getUser(userId)
            .then((user) => {
                setAllProducts((user.products).map(product => ({ id: product, label: product})));
            });

        getAllData((programs) => {
            setAllPrograms(programs.map(program => ({ id: program.nombre, label: program.nombre})));
            const programTv = programs.filter((program) => program.nombre === newSpace.program);
            const programTvId = (programTv.length>0)? programTv[0].id : 0;
            //console.log(programTv);
            const days = (programTv.length>0)? programTv[0].dias : ['lunes'];
            //console.log(days);
            setAvailableDays(days);
            const horario = (programTv.length>0)? programTv[0].horario : [0,1];
            setAvailableHours(hourIntervales(horario));
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
    
    // console.log(newSpace);
    return (
        <div className='containerForm'>
            <div className='divheaderForm'>
                <div className='containerLogoForm'>Latin TV</div>
                <div>Reserva su publicidad</div>
            </div>
            <form>
                <div className='inputProduct'>
                    <label for="product" className='nameInput'>Nombre del anunciante</label><br/>
                    <InputPredictive items={allProducts} pushValue={(value) => setNewSpace(prevState => ({
                            ...prevState,
                            product: value
                            }))}/>                       
                </div>
                <div className='inputProgram'>
                    <label for="program" className='nameInput'>Nombre del programa</label><br/>
                    <InputPredictive items={allPrograms} pushValue={(value) => setNewSpace(prevState => ({
                            ...prevState,
                            program: value
                            }))}/>                      
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
