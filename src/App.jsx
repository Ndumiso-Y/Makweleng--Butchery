import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import BraaiBuy from './pages/BraaiBuy'
import Promotions from './pages/Promotions'
import Contact from './pages/Contact'
import UnisonGrocery from './pages/UnisonGrocery'
import { initializeGlobalTracking } from './utils/analytics'

export default function App() {
  // Handle base path for deployment - use subdirectory only for GitHub Pages
  const basename = import.meta.env.BASE_URL

  // Initialize global analytics tracking
  useEffect(() => {
    initializeGlobalTracking()
  }, [])

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
          <Route path="/unison-grocery" element={<UnisonGrocery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}