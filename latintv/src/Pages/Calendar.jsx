import React from 'react'
import Header from '../Components/Header'
import Week from '../Components/Week'
import CalendarColumn from '../Components/CalendarColumn'
// import ProgramModal from '../Components/ProgramModal'
import './styles/Calendar.scss'


export default function Calendar(props) {
    return (
        <div>
            <Header/>
            <div className="calendar-body">
                    <CalendarColumn/>
                    <Week/>
            <a href='#pmodal' className="pshow-modal">Para ver el espacio que reservaste da click aquí</a>
                <aside id="pmodal" className="pmodal">
                    <div className="pcontent-modal">
                        <header className="pmodal-header">
                            <img src={require("./styles/assets/programa.png")}/>
                            <a href='#' className="pclose-modal">X</a>
                            <p>Programa Aplicado: En Boca de Todos</p>
                        </header>
                        <div className="pmodal-body">
                        </div>
                    </div>
                        <a href="#" className="btn-close-modal"></a>
                </aside>
            </div>
        </div>
    )
};