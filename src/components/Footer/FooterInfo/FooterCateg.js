import React, { Component } from 'react';
//import './../footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from "react-flexbox-grid";
import { UncontrolledCollapse } from 'reactstrap';


class FooterCateg extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    renderInfo(infoData) {
        return infoData.map(categ =>
            <UncontrolledCollapse toggler="#toggler1" key={categ.list} className="d-md-block">
                <Row>
                    <Col className="col footerLists">{categ.list}</Col>
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

export default FooterCateg;