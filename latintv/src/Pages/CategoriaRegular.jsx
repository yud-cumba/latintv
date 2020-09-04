import React, { useState, useEffect }  from 'react';
import Header from '../Components/Header';
import { getVvprograms } from '../firebase/firestore';
import './styles/CategoriaRegular.scss';
import Table from '../Components/Table'
 
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
                <Table
                    tarifa={'Basica'} data={data} precio={'3,000.00'} tafiraData={'regular'}
                />
            </div>
        </div>
    )
}
export default CategoriaRegular;
