import React, { Component } from 'react';
import HeaderCarro from './HeaderCarro';
import './../../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row  } from "react-flexbox-grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class HeaderContainer extends Component {
    render() {
        return (
            <div>
                <Col className="p-0 mt-1 col-12">
                {/* m-0 pt-2 d-flex justify-content-around align-items-center col-12 */}
                <Row className="m-0 p-0 col-12">
                    <Col className="d-md-none col-2">
                        <label className="m-auto" htmlFor="dropdownMenu">
                            <FontAwesomeIcon icon="bars" />
                        </label>
                    </Col>
                    <Col className="d-md-none col-2">
                        <FontAwesomeIcon icon="phone-volume" />
                    </Col>
                    <Col className="col-4 col-md-2" id="logoNaturitas">
                        <img src='/img/logo_naturitas.svg' className="img-fluid" alt="Logo Naturitas" />
                    </Col>

                    {/* BUSCADOR TABLET/PC */}
                    <Col className="d-md-block d-none col-md-6">
                        <form>
                            <section className="input-group">
                                <input type="search" className="form-control"
                                    placeholder="¿Qué buscas hoy? Encuentra entre más de 30 mil productos..." />
                                <article className="input-group-append">
                                    <button className="btn buscador_logo_grande" type="submit">
                                        <FontAwesomeIcon icon="search" />
                                    </button>
                                </article>
                            </section>
                        </form>
                    </Col>

                    <Col id="iconsMBRight" className="d-md-flex align-items-center col-4 col-md-4 m-auto">
                        <Col className="d-none d-md-block col-4">
                            <FontAwesomeIcon icon="heart" />
                            <span> Favoritos</span>
                        </Col>
                        <Col className="col-4" id="user">
                            <FontAwesomeIcon icon="user" />
                            <span className="d-none d-md-inline"> Mi cuenta</span>
                        </Col>
                        <HeaderCarro />
                    </Col>
                    </Row>
                </Col>
                
                {/* BUSCADOR MOVIL */}
                <Col className="d-block p-0 m-0 mt-2 col-12 d-md-none">
                    <form>
                        <section className="input-group">
                            <input type="search" className="form-control rounded-0" placeholder="¿Qué buscas hoy?" />
                            <article className="input-group-append">
                                <button className="btn rounded-0 buscador_logo" type="submit">
                                    <FontAwesomeIcon icon="search" />
                                </button>
                            </article>
                        </section>
                    </form>
                </Col>
                
            </div>
        );
    }
}

export default HeaderContainer;