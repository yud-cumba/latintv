import React from 'react';
import Header from '../Components/Header';
import { Link } from "react-router-dom";
import './styles/Home.scss'

const Home = () => {
    return(
        <div className='containerHome'>
            <Header/>
            <section className='saludo'>Bienvenido (a) a Latin TV</section>
            <div className='containerCategory'>
                <section className='containerSectionCategory'>
                    <img className='imageCategory' src='https://www.eltiempo.com/files/image_950_534/uploads/2019/11/15/5dcf255dc36d4.jpeg' alt=''/>
                    <div className='nameCategory'><p>BLOQUE DE PROGRAMAS DIARIOS</p></div>
                    <Link className='elegirCaregoria' to={'/CategoriaRegular'}>Ver más</Link>
                </section>
                <section className='containerSectionCategory'>
                    <img className='imageCategory' src='https://cde.americatv.com.pe/americlub-butaca-america-vota-tu-pela-favorita-noticia-67161-696x418-182236.jpg' alt=''/>
                    <div className='nameCategory'><p>BLOQUE DE PROGRAMAS PRIME</p></div>
                    <Link className='elegirCaregoria' to={'/CategoriaPrime'}>Ver más</Link>
                </section>
                <section className='containerSectionCategory'>
                    <img className='imageCategory' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTF4aDINTjj64WSH7Fwz97J_uVR5WRTFFq_oA&usqp=CAU' alt=''/>
                    <div className='nameCategory'><p>BLOQUE DE PROGRAMAS SUPER PRIME</p></div>
                    <Link className='elegirCaregoria' to={'/CategoriaSuperPrime'}>Ver más</Link>
                </section>
            </div>
        </div>
          
    )
};
export default Home;