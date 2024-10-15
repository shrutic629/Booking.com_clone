import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertylist/PropertyList'
import FeaturedProperty from '../../components/featuredProperty/FeaturedProperty'
import MailList from '../../components/maillist/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
       <Featured/>
       <h1 className='homeTitle'>Browse by property type</h1>
       <PropertyList/>
       <h1 className='homeTitle'>Homes guest love</h1>
       <FeaturedProperty/>
       <MailList/>
       <Footer/>
    </div>
    </>
  )
}

export default Home