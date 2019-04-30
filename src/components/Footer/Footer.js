import React, { Component } from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterInfo from './FooterInfo/FooterInfo';
import FooterCateg from './FooterInfo/FooterCateg';
import FooterSobreNaturitas from './FooterInfo/FooterSobreNaturitas';
import FooterRRSS from './FooterInfo/FooterRRSS';
import FooterMetPago from './FooterInfo/FooterMetPago';
import { Row, Col, Grid } from "react-flexbox-grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const dataInformacion = [
    { icon: 'phone-volume', text: [' Teléfonos: ', '919 019 101', ' | 932 711 714'] },
    { icon: 'envelope', text: [' Email: ', 'email@email.com'] },
]

const dataCategorias = [
    { list: 'Suplementos' },
    { list: 'Alimentación' },
    { list: 'Cosmética e higiene' },
    { list: 'Deporte' },
    { list: 'Mamá y bebé' },
    { list: 'Hogar y huerto' },
    { list: 'Todas las marcas A-Z' },
]

const dataSobreNaturitas = [
    { list1: 'Centro de ayuda' },
    { list1: 'Contacto' },
    { list1: 'Quiénes somos' },
    { list1: 'Método de pago' },
    { list1: 'Política de devoluciones' },
    { list1: 'Políticas de privacidad' },
    { list1: 'Aviso legal' },
    { list1: 'Compromiso Naturitas' },
    { list1: 'Blog' },
]

const dataRRSS = [
    { icon1: 'https://st2.depositphotos.com/1144386/7770/v/450/depositphotos_77705004-stock-illustration-original-square-with-round-corners.jpg' },
    { icon1: 'https://images.vexels.com/media/users/3/153748/isolated/preview/d137fe6dc28a2e5a8186ef883a18339b-icono-de-trazo-de-color-de-instagram-by-vexels.png' },
    { icon1: 'https://cdn.icon-icons.com/icons2/836/PNG/512/Twitter_icon-icons.com_66803.png' },
]

const dataMetodPago = [
    { icon2: 'https://image.flaticon.com/icons/png/512/38/38943.png' },
    { icon2: 'https://cdn.freebiesupply.com/logos/large/2x/visa-5-logo-png-transparent.png' },
    { icon2: 'https://banner2.kisspng.com/20180802/yet/kisspng-american-express-logo-credit-card-payment-seo-for-the-finance-industry-experience-and-solu-5b62e8845e9914.5428316515332087083875.jpg' },
    { icon2: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png' },
]



class Footer extends Component {
    render() {
        return (
            <div>
                <Row className="mx-auto" id="footer_dropdown">
                    <Grid>
                        <Col className="d-flex justify-content-center" id="footerSimbolo">
                            <img src="img/simbolo.svg" alt="Naturitas" />
                        </Col>
                        <Row>
                            <Col className="m-0 p-0 d-md-flex d-xs-block col-12">
                                <Col className="col-sm-12 col-md-3">
                                    <h6 id="toggler" className="col mt-2"> INFORMACIÓN
                                    <FontAwesomeIcon className="iconChevron d-md-none" icon="chevron-down" />
                                        <hr />
                                    </h6>
                                    <FooterInfo data={dataInformacion} />
                                </Col>

                                <Col className="col-sm-12 col-md-3">
                                    <h6 id="toggler1" className="col mt-2"> CATEGORÍAS & MARCAS
                                    <FontAwesomeIcon className="iconChevron d-md-none" icon="chevron-down" />
                                        <hr />
                                    </h6>
                                    <FooterCateg data={dataCategorias} />
                                </Col>

                                <Col className="col-sm-12 col-md-3">
                                    <h6 id="toggler2" className="col mt-2"> SOBRE NATURITAS
                                    <FontAwesomeIcon className="iconChevron d-md-none" icon="chevron-down" />
                                        <hr />
                                    </h6>
                                    <FooterSobreNaturitas data={dataSobreNaturitas} />
                                </Col>

                                <Col className="col-sm-12 col-md-3">
                                    <Col className="m-0 p-0 col-12">
                                        <h6 id="toggler3" className="col mt-2"> SIGUENOS EN
                                        <FontAwesomeIcon className="iconChevron d-md-none" icon="chevron-down" />
                                            <hr />
                                        </h6>
                                        <Col className="d-flex d-inline">
                                            <FooterRRSS data={dataRRSS} />
                                        </Col>
                                    </Col>

                                    <Col className="m-0 p-0 col-12">
                                        <h6 id="toggler4" className="col mt-2 mt-md-5"> MÉTODOS DE PAGO
                                        <FontAwesomeIcon className="iconChevron d-md-none" icon="chevron-down" />
                                            <hr />
                                        </h6>
                                        <Col className="d-flex d-inline">
                                            <FooterMetPago data={dataMetodPago} />
                                        </Col>
                                    </Col>
                                </Col>
                            </Col> 
                        </Row>                      
                    </Grid>
                </Row>
                <Row id="footer_copyright" className="mx-auto mt-2">
                    <Col className="d-flex justify-content-center p-1 col-12">
                        <span>2018 Naturitas. Todos los derechos reservados.</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Footer;