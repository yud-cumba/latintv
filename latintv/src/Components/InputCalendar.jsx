import React,  {useState} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { setDate } from 'date-fns';

export default function InputCalendar(props) {
    // const filterDate  = date => {
    //     const day = getDay(date);
    //         console.log(date)
    //     return day !== 0 && day !== 6;
    //   };
    const  { filterDate, dateValue , value }  = props;
    const initValue = props.value || new Date();
    const [dateClick, setDate] = useState(initValue);
    return (
        <DatePicker
          dateFormat="dd/MM/yyyy"
          id="date"
          selected={dateClick}
          minDate={new Date()}
          onChange={date => {
              setDate(date)
              const dateSelected =  `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
              dateValue(dateSelected)
            }}
          filterDate={filterDate}
          placeholderText="Select a weekday"
    />)
}
