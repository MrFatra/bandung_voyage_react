import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Header from '../../components/Header'
import Travel from '../../components/Travel'
import Recommend from '../../components/Recommend'
import Footer from '../../components/Footer'

import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar home={true}/>
            <Hero />
            <Header />
            <Travel />
            <Recommend />
            <Footer />
        </div>
    )
}

export default Home
