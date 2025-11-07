import About from "./Components/About/About"
import ContactPage from "./Components/Contact/ContactPage"
import Footer from "./Components/Footer/Footer"
import GalleryPage from "./Components/Gallery/GalleryPage"
import Hero from "./Components/Hero/Hero"
import Map from "./Components/Map/Map"
import Navbar from "./Components/Navbar/Navbar"
import NewsPage from "./Components/News/NewsPage"
import Offer from "./Components/Offer/Offer"

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Offer />
    <NewsPage />
    <GalleryPage />
    <ContactPage />
    <Map />
    <Footer />
    </>
  )
}

export default App
