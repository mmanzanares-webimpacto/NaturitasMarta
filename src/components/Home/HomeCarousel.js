import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '/img/Header_home_rebajas.jpg',
    caption: '',
  },
  {
    src: '/img/Header_home_solaray.jpg',
    caption: '',
  },
  {
    src: '/img/Header_home_biocop.jpg',
    caption: '',
  }
];

class HomeCarousel extends Component {
    render(){
        return(
            <div>
                <UncontrolledCarousel items={items}/>
            </div>
        );
    }
}


export default HomeCarousel;