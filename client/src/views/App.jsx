import React from 'react'
import { Nav } from '../components/Navbar/navbar.jsx'
// import { Slider } from '../components/Carousel/carousel.jsx'
import { Header } from '../components/Header/Header.jsx'
import About from '../views/About.jsx'
import { Foot } from '../components/Footer/Footer.jsx'
import Contact from '../views/Contact.jsx'
function App() {
    return (
        <div>
        <Nav/>
        <Header/>
        <About/>
        <Contact/>

        <Foot/>
        </div>
    )
}

export default App
