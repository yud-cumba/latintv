import React, { useState, useEffect }  from 'react';
import Header from '../Components/Header';
import { getVvprograms } from '../firebase/firestore';
import './styles/CategoriaRegular.scss';

const CategoriaRegular = () => {
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
                    <section className='titleContainer'>Tarifa Básica 2020 - Lunes a viernes</section>
                    <table className=''>
                        <tbody>
                            <tr className='titleTable1'>
                                <th>HORARIO</th>
                                <th>PROGRAMA</th>
                                <th>TARGET</th>
                            </tr>
                            {data.map((dat, Key) => {
                                if(dat.data.categoria === 'regular' && dat.data.dias.length === 5){
                                        return(
                                            <tr key={Key} className='rowTable'>
                                                <td className='elementTable'>{dat.data.horario[0]} - {dat.data.horario[1]}</td>
                                                <td className='elementTable'>{dat.data.nombre}</td>
                                                <td className='elementTable'>{dat.data.target}</td>                                            
                                            </tr>
                                        )
                                }
                            })}
                        </tbody>
                    </table>
                    <div>
                        <section>
                            <button>Cancelar</button>
                            <button>Solicitar reserva</button>
                        </section>
                        <section>
                            <section>Aviso 30''</section>
                            <section>US$ 3,000.00</section>
                            <section>No incluye IGV</section>
                        </section>
                        <section>
                            <section>* Tarifas netas expresadas en dólares americanos  |  Base 30”  |  Segundaje mínimo de pauteo 15”  |  Contenido, categorías y horarios sujetos a cambios de programación.</section>
                            <section>* APLICA PORCENTAJE EXTRA</section>
                        </section>
                    </div>
                </div>
                <div className='containerSD'>
                    <div className='containerS'>
                        <section className='titleContainer'>Tarifa Básica 2020 - Sabado</section>
                        <table className=''>
                            <tbody>
                                <tr className='titleTable1'>
                                    <th>HORARIO</th>
                                    <th>PROGRAMA</th>
                                    <th>TARGET</th>
                                </tr>
                                {data.map((dat, Key) => {
                                    if(dat.data.categoria === 'regular' && dat.data.dias[0] === 'sabado'){
                                            return(
                                                <tr key={Key} className='rowTable'>
                                                    <td className='elementTable'>{dat.data.horario[0]} - {dat.data.horario[1]}</td>
                                                    <td className='elementTable'>{dat.data.nombre}</td>
                                                    <td className='elementTable'>{dat.data.target}</td>                                            
                                                </tr>
                                            )
                                    }
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className='containerD'>
                        <section className='titleContainer'>Tarifa Básica 2020 - domingo</section>
                        <table className=''>
                            <tbody>
                                <tr className='titleTable1'>
                                    <th>HORARIO</th>
                                    <th>PROGRAMA</th>
                                    <th>TARGET</th>
                                </tr>
                                {data.map((dat, Key) => {
                                    if(dat.data.categoria === 'regular' && dat.data.dias[0] === 'domingo'){
                                            return(
                                                <tr key={Key} className='rowTable'>
                                                    <td className='elementTable'>{dat.data.horario[0]} - {dat.data.horario[1]}</td>
                                                    <td className='elementTable'>{dat.data.nombre}</td>
                                                    <td className='elementTable'>{dat.data.target}</td>                                            
                                                </tr>
                                            )
                                    }
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CategoriaRegular;