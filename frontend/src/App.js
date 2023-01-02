import React from 'react'
import About from './container/About/About';

import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import Work from './container/Work/Work';
import Skills from './container/Skills/Skills';
import Footer from './container/Footer/Footer';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
    <Navbar/>
    <Header/>
    <About/>
    <Work/>
    <Skills/>
    </div>
  );
}

export default App;