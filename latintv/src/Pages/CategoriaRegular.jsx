import React from 'react';
import Header from '../Components/Header'

const CategoriaRegular = () => {
    return (
        <div>
            <Header/>
            <div>
                <div className=''>
                    <section>LUNES A VIERNES</section>
                    <table>
                        <tbody>
                            <tr>
                                <th>HORARIO</th>
                                <th>PROGRAMA</th>
                                <th>TARGET</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default CategoriaRegular;