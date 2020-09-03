import React from 'react'
import Header from '../Components/Header'
import Week from '../Components/Week'
import CalendarColumn from '../Components/CalendarColumn'
import './styles/Calendar.scss'


export default function Calendar(props) {
    return (
        <div>
            <Header/>
            <div className="calendar-body">
                <CalendarColumn/>
                <Week/>
            </div>
        </div>
    )
}
