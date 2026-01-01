
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Menus from './components/Menus';
import Garden from './components/Garden';
import Events from './components/Events';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Menus />
        <Garden />
        <Events />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
