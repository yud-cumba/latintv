import React, { useState, useEffect }  from 'react';
import Header from '../Components/Header';
import { getVvprograms } from '../firebase/firestore';
import './styles/CategoriaRegular.scss';

const CategoriaPrime = () => {
  const [data, setData] = useState([]);
    useEffect(() => {
        getVvprograms((data)=>{
            setData(data);
        })
    }, []);
    return (
        <div className='categoriaRegular'>
            <Header/>
            <div className='containerCategoriaRegular'>
                <div className='containerLV'>
                    <section className='title1 titleContainer'>Tarifa Básica 2020 - Lunes a viernes</section>
                    <section className='containerTable'>
                        <table className=''>
                            <tbody>
                                <tr className=''>
                                    <th className='titleTable1'>HORARIO</th>
                                    <th className='titleTable1'>PROGRAMA</th>
                                    <th className='titleTable1'>TARGET</th>
                                </tr>
                                {data.map((dat, Key) => {
                                    if(dat.data.categoria === 'prime' && dat.data.dias.length === 5){
                                            return(
                                                <tr key={Key} className='rowTable'>
                                                    <td className='elementTable1'>{dat.data.horario[0]} - {dat.data.horario[1]}</td>
                                                    <td className='elementTable1'>{dat.data.nombre}</td>
                                                    <td className='elementTable1'>{dat.data.target}</td>                                            
                                                </tr>
                                            )
                                    }
                                })}
                            </tbody>
                        </table>
                    </section>
                    <div className='sectionFooterReserva'>
                        <section className='botonesReserva'>
                            <button className='btnCancelarReserva'>Cancelar</button>
                            <button className='btnSolicitarReserva'>Solicitar reserva</button>
                        </section>
                        <section className='sectionAviso'>
                            <section className='tiempo'>Aviso 30''</section>
                            <section className='precio'>US$ 3,000.00</section>
                            <section className='igv'>No incluye IGV</section>
                        </section>
                        <section className='terminos'>
                            <section>
                                * Tarifas netas expresadas en dólares americanos  |  Base 30”  |  Segundaje mínimo de pauteo 15”  |  Contenido, categorías y horarios sujetos a cambios de programación.<br/>
                                * Reservas realizadas entre las 12:01 a las 16:00 pm tendrán un recargo del 5% sobre el monto regular<br/>
                                * Reservas realizadas de las 16:01 pm en adelante, tendran un recargo del 15% sobre el monto regular<br/>
                                * APLICA PORCENTAJE EXTRA<br/>
                            </section>
                        </section>
                    </div>
                </div>
                <div className='containerSD'>
                    <div className='containerS'>
                        <section className='title2 titleContainer'>Tarifa Básica 2020 - Sabado</section>
                        <section className='containerTable'>
                            <table className=''>
                                <tbody>
                                    <tr className=''>
                                        <th className='titleTable2'>HORARIO</th>
                                        <th className='titleTable2'>PROGRAMA</th>
                                        <th className='titleTable2'>TARGET</th>
                                    </tr>
                                    {data.map((dat, Key) => {
                                        if(dat.data.categoria === 'prime' && dat.data.dias[0] === 'sabado'){
                                                return(
                                                    <tr key={Key} className='rowTable'>
                                                        <td className='elementTable2'>{dat.data.horario[0]} - {dat.data.horario[1]}</td>
                                                        <td className='elementTable2'>{dat.data.nombre}</td>
                                                        <td className='elementTable2'>{dat.data.target}</td>                                            
                                                    </tr>
                                                )
                                        }
                                    })}
                                </tbody>
                            </table>
                        </section>
                    </div>
                    <div className='containerD'>
                        <section className='title3 titleContainer'>Tarifa Básica 2020 - domingo</section>
                        <section className='containerTable'>
                            <table className=''>
                                <tbody>
                                    <tr className=''>
                                        <th className='titleTable3'>HORARIO</th>
                                        <th className='titleTable3'>PROGRAMA</th>
                                        <th className='titleTable3'>TARGET</th>
                                    </tr>
                                    {data.map((dat, Key) => {
                                        if(dat.data.categoria === 'prime' && dat.data.dias[0] === 'domingo'){
                                                return(
                                                    <tr key={Key} className='rowTable'>
                                                        <td className='elementTable3'>{dat.data.horario[0]} - {dat.data.horario[1]}</td>
                                                        <td className='elementTable3'>{dat.data.nombre}</td>
                                                        <td className='elementTable3'>{dat.data.target}</td>                                            
                                                    </tr>
                                                )
                                        }
                                    })}
                                </tbody>
                            </table>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CategoriaPrime;