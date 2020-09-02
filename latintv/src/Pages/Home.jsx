import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer'
import { Link } from "react-router-dom";
import './styles/Home.scss'

const Home = () => {
    return(
        <div className='containerHome'>
            <Header/>
            <div className='containerCategory'>
                <section className='containerSectionCategory'>
                    <img className='imageCategory' src='https://www.eltiempo.com/files/image_950_534/uploads/2019/11/15/5dcf255dc36d4.jpeg' alt=''/>
                    <div className='nameCategory'>
                        <p className='category'>BLOQUE DE PROGRAMAS<br/>DIARIOS</p>
                        <Link className='selectCaregory' to={'/CategoriaRegular'}>Detalles</Link>
                    </div>
                </section>
                <section className='containerSectionCategory'>
                    <img className='imageCategory' src='https://cde.americatv.com.pe/americlub-butaca-america-vota-tu-pela-favorita-noticia-67161-696x418-182236.jpg' alt=''/>
                    <div className='nameCategory'>
                        <p className='category'>BLOQUE DE PROGRAMAS<br/>PRIME</p>
                        <Link className='selectCaregory' to={'/CategoriaPrime'}>Detalles</Link>
                    </div>
                </section>
                <section className='containerSectionCategory'>
                    <img className='imageCategory' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTF4aDINTjj64WSH7Fwz97J_uVR5WRTFFq_oA&usqp=CAU' alt=''/>
                    <div className='nameCategory'>
                        <p className='category'>BLOQUE DE PROGRAMAS<br/>SUPER PRIME</p>
                        <Link className='selectCaregory' to={'/CategoriaSuperPrime'}>Detalles</Link>
                    </div>
                </section>
            </div>
            <div className='Containersaludo'>
                <section className='sectionSaludo'><p>“Por que pensamos en ti”</p></section>
                <section><section className='sectionDescription'>Somos el tercer canal comercial del país y apuntamos a ser el primer canal de televisión en Perú. Queremos ofrecerte una plataforma que te permita seleccionar y comprar los espacios publicitarios en los programas con la audiencia que tu marca necesita.  Nuestro gran desafío es crecer contigo.</section></section><br/>
                <section className='sectionValues'>
                    <section>Intuitiva</section>
                    <section>Rápida y fácil</section>
                    <section>Segura</section>
                    <section>Clara y precisa</section>
                </section>
            </div>
            <Footer/>
        </div>
          
    )
};
export default Home;