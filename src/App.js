import React from 'react';
import Header from './components/Header';
import './App.css'
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';

function App() {

  return (
    <div className="app">
      <Header/>
      <main className="l-main">
        <HomeSection/>
        <AboutSection/>
      </main>
    </div>
  );
}

export default App;