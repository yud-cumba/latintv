import React, { useEffect, useState } from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { getUser, getReservedSpace } from '../firebase/firestore'
require('moment/locale/es.js');
const localizer = momentLocalizer(moment);


// views:
//{MONTH: "month", WEEK: "week", WORK_WEEK: "work_week", DAY: "day", AGENDA: "agenda"}
//array de eventos
  
export default function Week() {
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
            .then((mySpaces) => mySpaces.map(space => ({
                title: space.programName,
                start: new Date(`${space.date} ${ space.reservedHour[0]}`),
                end: new Date(`${space.date} ${ space.reservedHour[1]}`)
            })))
            .then((array) => setEvents(array))
            
    })
    return (
        <div>
             <Calendar
      localizer={localizer}
      events={events}
      titleAccessor='titulo'
      startAccessor="start"
      endAccessor="end"
      style={{ height: 700 }}
      defaultView={Views.WEEK}
      onNavigate={() => console.log('data change ()next, prev')}
      onView={() => console.log('cambio de vista')}
      onDrillDown={() => console.log('date header click semanal')}
      onRangeChange={() => console.log('cambio rango')}
      onSelectEvent={(event, e) => console.log(event,e)} //clickea datos del select event
      onDoubleClickEvent={(event, e) => console.log('click 2 veces',event,e)}
      views={['month','week']}
    //   views={{
    //     month: false,
    //     week: true,
    //     day :false,
    //   }}
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