import React, { Component } from 'react';
//import './../footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from "react-flexbox-grid";
import { UncontrolledCollapse } from 'reactstrap';


class FooterMetPago extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    renderInfo(infoData) {
        return infoData.map(pago =>
            <UncontrolledCollapse toggler="#toggler4" key={pago.icon2} className="d-md-block">
                <Row>
                    <Col className="col">
                        <img className="footerIconsMetPago" src={pago.icon2} alt="Métodos de pago" />
                    </Col>
                </Row>
            </UncontrolledCollapse>
        );
    }

    render() {
        const { data } = this.props;

        return (
            this.renderInfo(data)
        );
    }
}

export default FooterMetPago;