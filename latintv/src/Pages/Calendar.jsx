import React from 'react'
import Header from '../Components/Header'
import Week from '../Components/Week'
import Month from '../Components/Month'


export default function Calendar(props) {
    return (
        <div>
            <Header/>
            <Week/>
            <Month/>
        </div>
    )
}
