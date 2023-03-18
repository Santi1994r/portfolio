import './App.css'
import NavbarSR from './components/Navbar/NavbarSR'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Index from './pages/Index/Index'
import Proyects from './pages/Proyects/Proyects'

function App() {

  return (
    <>
      <NavbarSR />
      <Index />
      <About />
      <Proyects />
      <Contact />
    </>
  )
}

export default App
