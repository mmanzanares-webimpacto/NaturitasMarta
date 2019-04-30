import React, { Component } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCarousel from './HomeCarousel';
import HomeBanner from './HomeBanner';
import { Row, Col } from "react-flexbox-grid";


const homeBannerImgPubli = [
    { src: '/img/batidos_siken_2.jpg' },
    { src: '/img/banner_mielmanuka.jpg' },
]

const homeBannerImgInfo = [
    { icon: 'seedling', title: ' +30 mil productos', subtitle: ' de bienestar saludable'},
    { icon: 'percent', title: ' 15% de descuento', subtitle: ' respecto a otras tiendas'},
    { icon: 'truck', title: ' Envío gratis', subtitle: ' a partir de 45€'},
    { icon: 'box', title: ' Devolución garantizada', subtitle: ' durante 30 días'},
]


class Home extends Component {
    render() {
        return (
            <div>
                {/* BANNER DE NOTICIAS */}
                <Row className="p-0 m-0 col-12" >
                    <Col className="p-0 m-0 col-12">
                        <section id="noticias" className="text-white text-center">
                            <span className="m-0"><b>¡Promociones de invierno!</b> Gastos de envío gratis para cosmética</span>
                        </section>
                    </Col>
                </Row>
                {/* CAROUSEL */}
                <Row className="home m-auto">
                    <HomeCarousel />
                </Row>
                {/* BANNERS */}
                <Row className="home m-auto justify-content-center">
                    <HomeBanner data={homeBannerImgPubli}/>
                </Row>
                <Row className="home m-auto justify-content-center">
                    <HomeBanner data={homeBannerImgInfo} />
                </Row>

            </div >
        );
    }
}
                    
export default Home;