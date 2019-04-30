import React, { Component } from 'react';
//import './../footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from "react-flexbox-grid";
import { UncontrolledCollapse } from 'reactstrap';


class FooterRRSS extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    renderInfo(infoData) {
        return infoData.map(rrss =>
            <UncontrolledCollapse toggler="#toggler3" key={rrss.icon1} className="d-md-block">
                <Row>
                    <Col className="col">
                        <img className="footerIconsRRSS" src={rrss.icon1} alt="RRSS" />
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

export default FooterRRSS;