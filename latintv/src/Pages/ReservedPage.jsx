import React from 'react'
import ReservedForm from '../Components/ReservedForm'
import HeaderUserLogue from '../Components/HeaderUserLogue';
import './styles/ReservedPage.scss'

export default function ReservedPage(prop) {
    const data = (prop.location && prop.location.state) || {};
    return (
        <div className='containerReservedPage'>
            <HeaderUserLogue/>
            <div className='containerReserved'><ReservedForm data={data}/></div>   
        </div>
    )
}
