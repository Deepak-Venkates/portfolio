import React, { useEffect } from 'react';
import About from './about';
import Navbar from './Core components/navbar';
import Home from './home';
import Skills from './skills';
import Contact from './contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className='App'>
      <Navbar />
      <Home data-aos='zoom-in' />
      <About data-aos='zoom-in' />
      <Skills data-aos='fade-left' />
      <Contact />
      
    </div>
  )
}

export default App;
