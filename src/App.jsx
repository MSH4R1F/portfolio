import React from 'react'
import Experience from './components/experience/Experience'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App