import React from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
//import Prueba from './Prueba.jsx'
require('moment/locale/es.js');
const localizer = momentLocalizer(moment);


// views:
//{MONTH: "month", WEEK: "week", WORK_WEEK: "work_week", DAY: "day", AGENDA: "agenda"}
//array de eventos
const myEventsList= [{
    title: 'today',
    start: new Date('2020-08-31 10:22:00'),
    end: new Date('2020-08-31 10:42:00')
  },
  {
    title: "string",
    start: new Date('2020-08-31 12:22:00'),
    end: new Date('2020-08-31 12:42:00')
  },
  {
    title: "probando",
    start: new Date('2020-09-1 14:22:00'),
    end: new Date('2020-09-1 14:42:00'),
    allDay: true
  },
  {
    title: "string",
    start: new Date('2020-08-31 15:22:00'),
    end: new Date('2020-08-31 15:42:00')
  },
  {
    title: "probando",
    start: new Date('2020-09-1 14:22:00'),
    end: new Date('2020-09-1 14:42:00'),
  },
]
  
export default function MyCalendar() {
    console.log(Views);
    return (
        <div>
             <Calendar
      localizer={localizer}
      events={myEventsList}
      titleAccessor='titulo'
      startAccessor="start"
      endAccessor="end"
      style={{ height: 700 }}
      //defaultView={Views.WEEK}
      onNavigate={() => console.log('data change ()next, prev')}
      onView={() => console.log('cambio de vista')}
      onDrillDown={() => console.log('date header click semanal')}
      onRangeChange={() => console.log('cambio rango')}
      onSelectEvent={(event, e) => console.log(event,e)} //clickea datos del select event
      onDoubleClickEvent={(event, e) => console.log('click 2 veces',event,e)}
      //views={['month', 'day', 'week']}
    //   views={{
    //     month: true,
    //     week: false,
    //     day :true,
    //     myweek: Prueba,
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