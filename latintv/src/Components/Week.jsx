import React, { useEffect, useState } from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { getUser, getReservedSpace } from '../firebase/firestore'
import './styles/Week.scss';
require('moment/locale/es.js');
const localizer = momentLocalizer(moment);

export default function Week(props) {
    const { show, data } = props;
    const userId = 'A27rshHeq0eZGB7aJZnB';
    const [events, setEvents] = useState([]);
    useEffect(() => {
        getUser(userId)
            .then((user) =>  user.reservedSpacesId)
            .then((arrayIds) => 
                arrayIds.map((reservedSpaceId) =>
                    getReservedSpace(reservedSpaceId)
                ))
            .then((array) => Promise.all(array))
            .then((mySpaces) => mySpaces.map(space => {
                const dateParts = (space.date).split('-');
                const date = `${dateParts[1]}-${dateParts[0]}-${dateParts[2]}`
                return{
                    title: space.programName,
                    start: new Date(`${date} ${ space.reservedHour[0]}`),
                    end: new Date(`${ date} ${ space.reservedHour[1]}`)
            }}))
            .then((array) => setEvents(array))
            
    },[])
    return (
        <div className="week-back">
             <Calendar
                localizer={localizer}
                events={events}
                titleAccessor='titulo'
                startAccessor="start"
                endAccessor="end"
                defaultView={Views.WEEK}
                onSelectEvent={(event, e) => {
                    show(true);
                    data(event);
                    }}
                views={['month','week']}
                popup
                messages={{
                    next: "sig",
                    previous: "ant",
                    today: "Hoy",
                    month: "Mes",
                    week: "Semana",
                    day: "Día"
                }}
            />
        </div>
    )
}