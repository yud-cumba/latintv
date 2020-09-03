import React, { useState, useEffect }  from 'react';
import Header from '../Components/Header';
import { getVvprograms } from '../firebase/firestore';
import './styles/CategoriaRegular.scss';
import Table from '../Components/Table';

const CategoriaSuperPrime = () => {
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
                <Table
                    tarifa={'Super prime'} data={data} precio={'7,000.00'} tafiraData={'super prime'}
                />        
            </div>
        </div>
    )
}
export default CategoriaSuperPrime;