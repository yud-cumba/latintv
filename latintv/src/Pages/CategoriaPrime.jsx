import React, { useState, useEffect }  from 'react';
import Header from '../Components/Header';
import { getVvprograms } from '../firebase/firestore';
import './styles/CategoriaRegular.scss';
import Table from '../Components/Table'

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
                <Table
                    tarifa={'Prime'} data={data} precio={'4,000.00'} tafiraData={'prime'}
                /> 
            </div>
        </div>
    )
}
export default CategoriaPrime;