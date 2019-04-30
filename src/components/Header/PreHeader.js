import React, { Component } from 'react';
import { Col } from "react-flexbox-grid";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class PreHeader extends Component{

    renderCols(colsData){
        return colsData.map(col =>
            col.dnone?
            <Col className="d-none d-md-block" key={col.icono}>
                <FontAwesomeIcon icon={col.icono} />
                <span>{col.texto}</span>
            </Col>
            :
            <Col key={col.icono}>
                <FontAwesomeIcon icon={col.icono}/><span>{col.texto}</span>
            </Col>         
        );
    }

    render(){
        const {data}=this.props;

        return(
            this.renderCols(data)
        );
    }
}



export default PreHeader;

