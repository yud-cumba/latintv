import React from 'react'
import ReservedForm from '../Components/ReservedForm'
import Header from '../Components/Header';
import './styles/ReservedPage.scss'

export default function ReservedPage() {
    return (
        <div className='containerReservedPage'>
            <Header/>
            <div className='containerReserved'><ReservedForm/></div>
            
        </div>
    )
}
