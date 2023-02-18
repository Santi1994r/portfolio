import { Routes, Route } from 'react-router-dom'
import About from '../components/About/About'
import Index from '../components/Index/Index'

const RoutesPortfolio = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/sobre mí' element={<About />} />
        </Routes>
    </>
  )
}

export default RoutesPortfolio