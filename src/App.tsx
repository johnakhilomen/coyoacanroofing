import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Trust from './components/Trust'
import Gallery from './components/Gallery'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Trust />
        <Gallery />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
