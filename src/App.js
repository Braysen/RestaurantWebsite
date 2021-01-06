import React from 'react';
import Header from './components/Header';
import './App.css'
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import MenuSection from './components/MenuSection';

function App() {

  return (
    <div className="app">
      <Header/>
      <main className="l-main">
        <HomeSection/>
        <AboutSection/>
        <ServicesSection/>
        <MenuSection/>
      </main>
    </div>
  );
}

export default App;