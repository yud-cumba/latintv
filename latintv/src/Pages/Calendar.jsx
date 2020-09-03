import React , {useState }from 'react'
import Header from '../Components/Header'
import Week from '../Components/Week'
import CalendarColumn from '../Components/CalendarColumn'
import ProgramModal from '../Components/ProgramModal'
import './styles/Calendar.scss'


export default function Calendar() {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});
    return (
        <div>
            <Header/>
            <div className="calendar-body">
                    <CalendarColumn/>
                    {showModal && <ProgramModal data={data} show = {(show) => setShowModal(show)}/>}
                    <Week show={(show) => setShowModal(show)} data={(data) => setData(data)}/>
            </div>
        </div>
    )
};