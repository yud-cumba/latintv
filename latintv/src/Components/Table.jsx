import React, { Fragment }  from 'react';
import { useHistory } from 'react-router-dom';

const Table = ({tarifa, data, precio, tafiraData}) => {
    let history = useHistory();
    return(
        <Fragment>
            <div className='containerLV'>
                    <section className='title1 titleContainer'>Tarifa {tarifa} 2020 - Lunes a vierne</section>
                    <section className='containerTable'>
                        <table className=''>
                            <tbody>
                                <tr className=''>
                                    <th className='titleTable1'>HORARIO</th>
                                    <th className='titleTable1'>PROGRAMA</th>
                                    <th className='titleTable1'>TARGET</th>
                                </tr>
                                {data.map((dat, Key) => {
                                    if(dat.data.categoria === tafiraData && dat.data.dias.length === 5){
                                            return(
                                                <tr key={Key} className='rowTable'>
                                                    <td className='elementTable1'>{dat.data.tiempo}</td>
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
                            <button className='btnCancelarReserva' onClick={() => {history.push("/");}}>Cancelar</button>
                            <button className='btnSolicitarReserva' onClick={() => {history.push("/login");}}>Solicitar reserva</button>
                        </section>
                        <section className='sectionAviso'>
                            <section className='tiempo'>Aviso 30''</section>
                            <section className='precio'>US$ {precio}</section>
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
                        <section className='title2 titleContainer'>Tarifa {tarifa} 2020 - Sabado</section>
                        <section className='containerTable'>
                            <table className=''>
                                <tbody>
                                    <tr className=''>
                                        <th className='titleTable2'>HORARIO</th>
                                        <th className='titleTable2'>PROGRAMA</th>
                                        <th className='titleTable2'>TARGET</th>
                                    </tr>
                                    {data.map((dat, Key) => {
                                        if(dat.data.categoria === tafiraData && dat.data.dias[0] === 'sabado'){
                                                return(
                                                    <tr key={Key} className='rowTable'>
                                                        <td className='elementTable2'>{dat.data.tiempo}</td>
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
                        <section className='title3 titleContainer'>Tarifa {tarifa} 2020 - domingo</section>
                        <section className='containerTable'>
                            <table className=''>
                                <tbody>
                                    <tr className=''>
                                        <th className='titleTable3'>HORARIO</th>
                                        <th className='titleTable3'>PROGRAMA</th>
                                        <th className='titleTable3'>TARGET</th>
                                    </tr>
                                    {data.map((dat, Key) => {
                                        if(dat.data.categoria === tafiraData && dat.data.dias[0] === 'domingo'){
                                                return(
                                                    <tr key={Key} className='rowTable'>
                                                        <td className='elementTable3'>{dat.data.tiempo}</td>
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
        </Fragment>
    )
}
export default Table;