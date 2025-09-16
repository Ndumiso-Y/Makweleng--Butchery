import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import BraaiBuy from './pages/BraaiBuy'
import Promotions from './pages/Promotions'
import Contact from './pages/Contact'

export default function App() {
  // Handle GitHub Pages base path
  const basename = import.meta.env.PROD ? '/Makweleng--Butchery' : ''

  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/braai-buy" element={<BraaiBuy />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}