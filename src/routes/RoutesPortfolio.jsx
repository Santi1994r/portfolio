import { Routes, Route } from 'react-router-dom'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Index from '../pages/Index/Index'
import Proyects from '../pages/Proyects/Proyects'

const RoutesPortfolio = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/sobre mí' element={<About />} />
            <Route path='/proyectos' element={<Proyects />} />
            <Route path='/contacto' element={<Contact />} />
        </Routes>
    </>
  )
}

export default RoutesPortfolio