import React, { Component } from 'react';
import './../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class HeaderMenu extends Component {
    render() {
        return (
            <div className="col-12">
                <input id="dropdownMenu" type="checkbox" className="d-none" />
                <Nav id="menu" className="col-12 d-sm-block" navbar>
                    <NavItem className="d-md-inline-block ml-3">
                        <NavLink className="menuLinks" href="#">SUPLEMENTOS</NavLink>
                    </NavItem>
                    <NavItem className="d-md-inline-block ml-3">
                        <NavLink className="menuLinks" href="#">PLANTAS</NavLink>
                    </NavItem>
                    <NavItem className="d-md-inline-block ml-3">
                        <NavLink className="menuLinks" href="#">ALIMENTACION</NavLink>
                    </NavItem>
                    <NavItem className="d-md-inline-block ml-3">
                        <NavLink className="menuLinks" href="#">COSMÉTICA</NavLink>
                    </NavItem>
                    <NavItem className="d-md-inline-block ml-3">
                        <NavLink className="menuLinks" href="#">HIGIENE</NavLink>
                    </NavItem>
                    <NavItem className="d-md-inline-block ml-3">
                        <NavLink className="menuLinks" href="#">MAMÁ Y BEBÉ</NavLink>
                    </NavItem>
                    <NavItem className="d-md-inline-block ml-3">
                        <NavLink className="menuLinks" href="#">DEPORTE</NavLink>
                    </NavItem>
                    <NavItem className="d-md-inline-block ml-3">
                        <NavLink className="menuLinks" href="#">HUERTO</NavLink>
                    </NavItem>

                    {/* PARTE DERECHA MENU */}
                    <NavItem className="d-md-inline-block float-right ml-3">
                        <NavLink className="menuLinksOfertas" href="#">Ofertas<FontAwesomeIcon className="ml-1" icon="percent" /></NavLink>
                    </NavItem>
                    <NavItem className="d-md-inline-block float-right">
                        <NavLink className="menuLinks" href="#">Nuestras Marcas</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}



export default HeaderMenu;




// // class HeaderMenu extends Component{

// //     renderCols(colsData){
// //         return colsData.map(col =>
// //             col.dnone?
// //             <Col className="d-none d-md-block">
// //                 <Nav className="col-12" navbar>
// //                     <NavItem className="d-flex d-inline col">
// //                         <NavLink className="menuLinks" href="#">{col.texto}
// //                             <FontAwesomeIcon className="ml-1" icon={col.icono} />
// //                         </NavLink>
// //                     </NavItem>
// //                 </Nav>
// //             </Col>
// //             :
// //             <Col>

// //             </Col>         
// //         );
// //     }

// //     render(){
// //         const {data}=this.props;

// //         return(
// //             this.renderCols(data)
// //         );
// //     }
// // }

// export default HeaderMenu;

