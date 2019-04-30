import React, { Component } from 'react';
//import './../footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from "react-flexbox-grid";
import { UncontrolledCollapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class FooterInfo extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    renderInfo(infoData) {
        return infoData.map(info =>
            <UncontrolledCollapse toggler="#toggler" key={info.text} className="d-md-block">
                <Row >
                    <Col className="col">
                        <FontAwesomeIcon icon={info.icon} />
                        {info.text}
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

export default FooterInfo;