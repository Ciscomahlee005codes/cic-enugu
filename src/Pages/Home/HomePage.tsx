import React from 'react'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Offer from '../../Components/Offer/Offer'
import NewsPage from '../../Components/News/NewsPage'
import GalleryPage from '../../Components/Gallery/GalleryPage'
import ContactPage from '../../Components/Contact/ContactPage'
import Map from '../../Components/Map/Map'
import Footer from '../../Components/Footer/Footer'

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Offer />
      <NewsPage />
      <GalleryPage />
      <ContactPage />
      <Map />
      <Footer />
    </div>
  )
}

export default HomePage
