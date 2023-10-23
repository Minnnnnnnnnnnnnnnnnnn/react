import React from 'react';
import Header from '../Header/Header';
import Aboutus from '../Aboutus/Aboutus';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import { Route, Routes } from 'react-router-dom';


function Homepage() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={Homepage}/>
        <Route path='/about-us' element={Aboutus}/>
        <Route path='/form' element={Form}/>
      </Routes>
    </div>
  )
}

export default Homepage