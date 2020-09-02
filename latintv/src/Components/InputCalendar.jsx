import React,  {useState} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function InputCalendar(props) {
    const [startDate, setStartDate] = useState(new Date());
    // const filterDate  = date => {
    //     const day = getDay(date);
    //         console.log(date)
    //     return day !== 0 && day !== 6;
    //   };
     const  { filterDate, dateValue }  = props;
    return (
        <DatePicker
          id="date"
          selected={startDate}
          onChange={date => dateValue(date)}
          filterDate={filterDate}
          placeholderText="Select a weekday"
          dateFormat="Pp"
    />)
}
