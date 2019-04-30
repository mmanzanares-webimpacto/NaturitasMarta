import React, { Component } from 'react';
import './../../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from "react-flexbox-grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class HeaderCarro extends Component{
    render(){
        return(
            <Col className="col-4" id="carro">
                <Col className="d-flex align-items-center" id="carro">
                    <span className="text-center text-white" id="nProductosCarro">12</span>
                    <FontAwesomeIcon icon="shopping-bag" /> 
                    <span className="d-none d-md-inline"> €17,96</span>
                </Col>
            </Col>
        );
    }
}

export default HeaderCarro;
