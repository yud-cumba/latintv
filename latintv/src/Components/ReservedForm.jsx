import React from 'react'

export default function ReservedForm() {
    return (
        <div>
            <div>
                Reserva su publicidad
            </div>
            <form>
                <label for="producto">Nombre del anunciante</label>
                <input placeholder='Producto' name="producto"></input>
                <label for="producto">Nombre del programa</label>
                <input placeholder='Programa' name="producto"></input>
                <div>
                    <input type="date"></input>
                    <select name="type" id="type">
                        <option value='desayuno'>Desayunos</option>
              </select>
                </div>
            </form>
        </div>
    )
}
