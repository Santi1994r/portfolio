import './App.css'
import Navbar from './components/Navbar/Navbar'
import NavbarSR from './components/Navbar/NavbarSR'
import ToggleMain from './components/ToggleMain/ToggleMain'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Index from './pages/Index/Index'
import Proyects from './pages/Proyects/Proyects'
import RoutesPortfolio from './routes/RoutesPortfolio'

function App() {

  return (
    <>
      {/* <NavbarSR /> */}
     {/*  <Navbar /> */}
      {/* <ToggleMain /> */}
      <Index />
      <About />
      <Proyects />
      <Contact />
      {/* <RoutesPortfolio /> */}
    </>
  )
}

export default App
