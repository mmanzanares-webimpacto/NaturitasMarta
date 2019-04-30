import React, { Component } from 'react';
//import './../footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from "react-flexbox-grid";
import { UncontrolledCollapse } from 'reactstrap';


class FooterSobreNaturitas extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    renderInfo(infoData) {
        return infoData.map(sobreN =>
            <UncontrolledCollapse toggler="#toggler2" key={sobreN.list1} className="d-md-block">
                <Row>
                    <Col className="col footerLists">{sobreN.list1}</Col>
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

export default FooterSobreNaturitas;