import React from 'react'
import {Routes, Route} from 'react-router-dom'

import './App.css';

import Navbar from './components/Navbar/navbar'
import Home from './components/Home/home';
import About from './components/About/about';
import Footer from './components/Footer/footer'

function App(){
  return(
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element= { <About /> } />
        {/* <Route path='/services' element={ <Services /> } /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App;


