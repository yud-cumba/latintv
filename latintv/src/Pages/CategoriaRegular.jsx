import React, { useState, useEffect }  from 'react';
import Header from '../Components/Header'
import { getVvprograms } from '../firebase/firestore'

const CategoriaRegular = () => {
  const [data, setData] = useState([]);
    useEffect(() => {
        getVvprograms((data)=>{
            setData(data);
        })
    }, []);
    return (
        <div>
            <Header/>
            <div>
                <div className=''>
                    <section>LUNES A VIERNES</section>
                    <table>
                        <tbody>
                            <tr>
                                <th>HORARIO</th>
                                <th>PROGRAMA</th>
                                <th>TARGET</th>
                            </tr>
                            {data.map((dat, Key) => {
                                if(dat.categoria = 'regular'){
                                    return(
                                        <tr key={Key}>
                                            <td>{dat.data.horario[0]} - {dat.data.horario[1]}</td>
                                            <td>{dat.data.nombre}</td>
                                            <td>{dat.data.target}</td>                                            
                                        </tr>
                                    );
                                }
                            })};
                        </tbody>
                    </table>
                </div>
                <div>
                    <div>

                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CategoriaRegular;