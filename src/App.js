import React from 'react';
import Header from './components/Header';
import './prueba.css'
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import MenuSection from './components/MenuSection';
import AppSection from './components/AppSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

const url = 'http://127.0.0.1:8000/api/clientes';

class App extends React.Component{

  state={
    data:[]
  }

  

  peticionesGet = () => {
    
    const respon = fetch(url, {
      'mode': 'cors',
      'headers': {
        'Access-Control-Allow-Origin': '*'
      }
    });

    console.log(respon.data);
  }

  componentDidMount(){
    this.peticionesGet();
  }

  render(){
    return (
      <div className="app">
        <Header/>
        <main className="l-main">
          <HomeSection/>
          <AboutSection/>
          <ServicesSection/>
          <MenuSection/>
          <AppSection/>
          <ContactSection/>
          <FooterSection/>
        </main>
      </div>
    );
  }
}

export default App;