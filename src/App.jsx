import './App.css'
import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Portfolio } from './components/Portfolio'
import { Footer } from './components/Footer'

import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="app">
    <Header/>
    <Navbar/>
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="about" element={<AboutMe />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
    </Routes>
    <Footer/>

  </div>
  )
}

export default App
