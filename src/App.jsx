import React from 'react'
import { Routes, Route } from 'react-router-dom'


import MainForm from './components/myForms/MainForm'
import MyNavbar from './components/MyNavbar'

import Home from './components/pages/Home'
import Process from './components/pages/Process'
import TPP from './components/pages/TPP'


function App() {
  return (
    <>
      <MyNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<MainForm />} />
          <Route path='/process' element={<Process />} />
          <Route path='/tpp' element={<TPP />} />
        </Routes>
    </>
  );
}

export default App;