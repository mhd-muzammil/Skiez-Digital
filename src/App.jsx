import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Header from './components/Header'
import About from './pages/About'
import CanvasCursor from './components/Cursor'

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <CanvasCursor/>
          <Header />
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/services' element={ <Services />} />
            <Route path='/about' element={ <About />} />
            <Route path='/blog' element={ <Blog/>} />
            <Route path='/contact' element={ <Contact/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App