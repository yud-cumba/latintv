import React,  {useState} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function InputCalendar(props) {
    const  { filterDate, dateValue }  = props;
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
