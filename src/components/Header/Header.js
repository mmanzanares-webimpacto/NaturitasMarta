import React, { Component } from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PreHeader from './PreHeader';
import HeaderContainer from './HeaderContainer/HeaderContainer';
import HeaderMenu from './HeaderMenu';
import { Row } from "react-flexbox-grid";


const preHeaderData = [
    { texto: ' ¿Necesitas ayuda? 919 019 101 | 932 711 184', dnone: true, icono: "phone-volume" },
    { texto: ' Envío Gratis a partir de 45€', dnone: false, icono: "box" },
    { texto: ' 30 días - plazo devolución gratuita', dnone: true, icono: "sync-alt" },
]

// const headerMenuData = [
//     {texto: ' SUPLEMENTOS', dnone: true},
//     {texto: ' PLANTAS', dnone: true},
//     {texto: ' ALIMENTACION', dnone: true},
//     {texto: ' COSMÉTICA', dnone: true},
//     {texto: ' HIGIENE', dnone: true},
//     {texto: ' MAMÁ Y BEBÉ', dnone: true},
//     {texto: ' DEPORTE', dnone: true},
//     {texto: ' HUERTO', dnone: true},
//     {texto: ' Nuestras Marcas', dnone: true},
//     {texto: ' Ofertas', dnone: true, icono: "percent"},    
// ]


class Header extends Component {
    
    render() {
        return (
            <div>
                {/* PRE-HEADER */}
                <Row className="header_envio bg-secondary text-white d-flex justify-content-around m-0 p-0 col-12">
                    <PreHeader data={preHeaderData} />
                </Row>
                {/* HEADER CONTAINER */}
                <Row className="m-0 p-0 d-block mt-md-3 col-12">
                    <HeaderContainer />
                </Row>
                {/* HEADER MENU */}
                <Row className="mt-md-2 m-0 p-0 col-12 menu_horizontal">
                   <HeaderMenu /> 
                </Row>
            </div >
        );
    }
}

export default Header;
