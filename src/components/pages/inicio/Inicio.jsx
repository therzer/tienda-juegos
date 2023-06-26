import React from 'react'
import Menu from '../../common/Menu'
import JuegosDestacados from '../../common/inicio/JuegosDestacados'
import Ofertas from '../../common/inicio/Ofertas'
import DemosJuegos from '../../common/inicio/DemosJuegos'
import ExploradorCategoria from '../../common/inicio/ExploradorCategoria'
import Footer from '../../common/Footer'
import '../../../css/inicio/inicio.css'

function Inicio() {
    return (
        <div className='inicio'>
            <Menu/>
            <JuegosDestacados/>
            <Ofertas/>
            <DemosJuegos/>
            <ExploradorCategoria/>
            <Footer/>
        </div>
    )
}

export default Inicio