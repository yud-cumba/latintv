import React, { useEffect, useState } from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { getUser, getReservedSpace } from '../firebase/firestore'
import './styles/Week.scss';
require('moment/locale/es.js');
const localizer = momentLocalizer(moment);


// views:
//{MONTH: "month", WEEK: "week", WORK_WEEK: "work_week", DAY: "day", AGENDA: "agenda"}
//array de eventos
  
export default function Week(props) {
    const { show, data, week } = props;
    // let history = useHistory();
    const userId = 'A27rshHeq0eZGB7aJZnB';
    const [events, setEvents] = useState([]);
    const [change, setChange] = useState(false);
    useEffect(() => {
        week( document.getElementsByClassName('rbc-toolbar-label')[1].textContent);
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
            
    },[change])
    const calendarDay = (props.location && props.location.state) || new Date();
    return (
        <div className="week-back">
             <Calendar
      localizer={localizer}
      events={events}
      titleAccessor='titulo'
      startAccessor= 'start'
      endAccessor="end"
      defaultView={Views.WEEK}
      onNavigate={() => setChange(!change)}
      onView={() => console.log('cambio de vista')}
      onDrillDown={() => console.log('date header click semanal')}
      onRangeChange={(e) => console.log(e)}
      onSelectEvent={(event, e) => {
          show(true);
          data(event);
        }} //clickea datos del select event
      onDoubleClickEvent={(event, e) => console.log('click 2 veces',event)}
      views={['month','week']}
      popup
      getNow={() => calendarDay}
      messages={{
        next: "Sig",
        previous: "Ant",
        today: "Hoy",
        month: "Mes",
        week: "Semana",
        day: "Día"
      }}
    />
        </div>
    )
}