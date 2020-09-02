import React from 'react'

export default function Tabla(props) {
    const { table, arrayData } = props;
    return (
        <table>
          <thead>
            <tr>
              {(table.head).map((element, i) => <th key={i} >{element}</th>)}
            </tr>
          </thead>
          <tbody>
            {arrayData.map((data) => <Column type={table.type}key={data._id} data={data}/>)}
          </tbody>
        </table>
      );
}
