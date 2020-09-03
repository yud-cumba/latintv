import React from 'react'
import Month from './Month'
import './styles/CalendarColumn.scss';

const CalendarColumn = () => {
    return (
        <div className="column">
            <div className="container-column">
                <h2 className="main-title-column">Calendario de Reserva</h2>
                <Month/>
                <div className="table-second">
                <p className="titulo-column">PUBLICIDAD INGRESADA</p>
                <p className="titulo-column">Semana del 30 al 05</p>
                    <table className="table-column">
                        <tbody>
                            <tr>
                            <td className="little-space"></td>
                            <th>Cant</th>
                            <th>Monto</th>
                            </tr>
                            <tr>
                            <th className="normal-font">D</th>
                            <td>A1</td>
                            <td>B1</td>
                            </tr>
                            <tr>
                            <th className="normal-font">L</th>
                            <td>A2</td>
                            <td>B2</td>
                            </tr>
                            <tr>
                            <th className="normal-font">M</th>
                            <td>A2</td>
                            <td>B2</td>
                            </tr>
                            <tr>
                            <th className="normal-font">M</th>
                            <td>A2</td>
                            <td>B2</td>
                            </tr>
                            <tr>
                            <th className="normal-font">J</th>
                            <td>A2</td>
                            <td>B2</td>
                            </tr>
                            <tr>
                            <th className="normal-font">V</th>
                            <td>A2</td>
                            <td>B2</td>
                            </tr>
                            <tr>
                            <th className="normal-font">S</th>
                            <td>A2</td>
                            <td>B2</td>
                            </tr>
                            <tr>
                            <th>Sub-total</th>
                            <td>A2</td>
                            <td>B2</td>
                            </tr>
                            <tr>
                            <th>IGV 18%</th>
                            <td className="little-space"></td>
                            <td>B2</td>
                            </tr>
                            <tr>
                            <th>Total</th>
                            <td>A2</td>
                            <td>B2</td>
                            </tr>
                        </tbody>
                        </table>
                    <a href='#' className="btn-salir">Salir</a>
                    </div>
            </div>
        </div>
    )
};
export default CalendarColumn;