import React from 'react'
import ReservedForm from '../Components/ReservedForm'
import Header from '../Components/Header';
import './styles/ReservedPage.scss'

export default function ReservedPage(prop) {
    console.log((prop.location && prop.location.state) || {});
    const data = (prop.location && prop.location.state) || {};
    return (
        <div className='containerReservedPage'>
            <Header/>
            <div className='containerReserved'><ReservedForm data={data}/></div>
            
        </div>
    )
}
