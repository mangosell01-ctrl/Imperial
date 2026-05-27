import './App.css'
import NavBar from './Header/navBer'
import Hero from './About/hero'
import ImperialMangoAbout from './About/about'
import VarietyBox from './VarietyBox/varietyBox'
import ContactForm from './Content/contect'
import Footer from './Footer/footer'

function App() {

  return (
    <>
    <section>
      <NavBar />
      <ImperialMangoAbout />
      {/* <Hero /> */}
      <VarietyBox />
      <ContactForm />
      <Footer />
    </section>
    </>
  )
}

export default App
