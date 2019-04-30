import React, { Component } from 'react';
import './../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row } from 'react-flexbox-grid';


class HomeBanner extends Component {
    renderImg(imgData) {
        return imgData.map(img =>
            <div>
                <Row className="mt-3 m-0 p-0 d-flex col-12 col-md-12">
                    <Col className="p-0 p-md-3" key={img.src}>
                        <img src={img.src} alt="" className="img-fluid homeBannerImg" />
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-3 d-none d-md-block" key={img.icon}>
                        <Col className="d-flex col">
                            <FontAwesomeIcon icon={img.icon} id="footerIconInfo" />
                            <Col>
                                <span className="d-block"><b>{img.title}</b></span>
                                <span>{img.subtitle}</span>
                            </Col>                            
                        </Col>
                    </Col>
                </Row>
            </div>
        );
    }

    render() {
        const { data } = this.props;

        return (
            this.renderImg(data)
        );
    }
}

export default HomeBanner;