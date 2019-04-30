import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import {Grid} from 'react-flexbox-grid';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneVolume, 
         faBox, 
         faSyncAlt, 
         faBars, 
         faHeart, 
         faUser, 
         faSearch, 
         faPercent, 
         faShoppingBag, 
         faSeedling,
         faTruck,
         faChevronDown,
         faEnvelope,
        } from '@fortawesome/free-solid-svg-icons'

library.add(faPhoneVolume, 
            faBox, 
            faSyncAlt, 
            faHeart, 
            faBars, 
            faUser, 
            faSearch, 
            faPercent, 
            faShoppingBag, 
            faSeedling,
            faTruck,
            faChevronDown,
            faEnvelope,
          );


function App() {
  return (
    <Grid fluid className="app m-0 p-0">
      <Header />
      <Home />
      <Footer />
    </Grid>
    
  );
}

export default App;
