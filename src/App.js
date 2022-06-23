import React from 'react';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Footer from './Components/Footer';

import './App.css';

const App = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Projects/>        
        <Skills/>
        <Footer/>

        {/* <AboutMe/> */}
    </div>
  )
}

export default App