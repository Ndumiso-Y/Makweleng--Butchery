import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../assets/Makweleng-- Logo--OffWhite_blackBackground-transparent-10.png'

export default function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0)
    setIsMenuOpen(false) // Close menu when navigating
  }, [location.pathname])

  const handleNavClick = (navItem) => {
    setIsMenuOpen(false)
    // Track navigation click
    if (typeof window.trackEvent === 'function') {
      window.trackEvent(`nav_${navItem}_click`, { nav_item: navItem })
    }
    // Small delay to ensure navigation happens first
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  const handleOrderNowClick = () => {
    if (typeof window.trackEvent === 'function') {
      window.trackEvent('nav_order_now_click', { contact_type: 'whatsapp', source: 'navbar' })
    }
  }

  return (
    <header className="bg-gradient-to-r from-white via-orange-50 to-white shadow-xl border-b-4 border-rusty sticky top-0 z-50 backdrop-blur-sm">
      <div className="container-pad py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center transform hover:scale-105 transition-transform duration-300 bg-mocha px-4 py-2 rounded-lg shadow-md">
              <img src={logo} alt="Makweleng Butchery Logo" className="h-10 md:h-12 w-auto" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link
              to="/"
              onClick={() => handleNavClick('home')}
              className={`font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${location.pathname === '/' ? 'bg-rusty text-white shadow-lg' : 'text-brew hover:bg-chai/20 hover:text-rusty'}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => handleNavClick('about')}
              className={`font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${location.pathname === '/about' ? 'bg-rusty text-white shadow-lg' : 'text-brew hover:bg-chai/20 hover:text-rusty'}`}
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => handleNavClick('services')}
              className={`font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${location.pathname === '/services' ? 'bg-rusty text-white shadow-lg' : 'text-brew hover:bg-chai/20 hover:text-rusty'}`}
            >
              Services
            </Link>
            <Link
              to="/braai-buy"
              onClick={() => handleNavClick('braai_buy')}
              className={`font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${location.pathname === '/braai-buy' ? 'bg-rusty text-white shadow-lg' : 'text-brew hover:bg-chai/20 hover:text-rusty'}`}
            >
              Buy & Braai
            </Link>
            <Link
              to="/promotions"
              onClick={() => handleNavClick('promotions')}
              className={`font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${location.pathname === '/promotions' ? 'bg-rusty text-white shadow-lg' : 'text-brew hover:bg-chai/20 hover:text-rusty'}`}
            >
              Promotions
            </Link>
            <Link
              to="/unison-grocery"
              onClick={() => handleNavClick('unison_grocery')}
              className={`font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${location.pathname === '/unison-grocery' ? 'bg-rusty text-white shadow-lg' : 'text-brew hover:bg-chai/20 hover:text-rusty'}`}
            >
              Grocery
            </Link>
            <Link
              to="/contact"
              onClick={() => handleNavClick('contact')}
              className={`font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${location.pathname === '/contact' ? 'bg-rusty text-white shadow-lg' : 'text-brew hover:bg-chai/20 hover:text-rusty'}`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://wa.me/27766386581" onClick={handleOrderNowClick} className="bg-gradient-to-r from-rusty to-orange-600 hover:from-orange-700 hover:to-rusty text-white font-bold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.251"/>
              </svg>
              <span>Order Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brew hover:text-rusty transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-roast shadow-lg">
              <Link
                to="/"
                onClick={() => handleNavClick('home')}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/' ? 'bg-rusty text-white' : 'text-brew hover:bg-chai/20 hover:text-rusty'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => handleNavClick('about')}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/about' ? 'bg-rusty text-white' : 'text-brew hover:bg-chai/20 hover:text-rusty'
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => handleNavClick('services')}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/services' ? 'bg-rusty text-white' : 'text-brew hover:bg-chai/20 hover:text-rusty'
                }`}
              >
                Services
              </Link>
              <Link
                to="/braai-buy"
                onClick={() => handleNavClick('braai_buy')}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/braai-buy' ? 'bg-rusty text-white' : 'text-brew hover:bg-chai/20 hover:text-rusty'
                }`}
              >
                Buy & Braai
              </Link>
              <Link
                to="/promotions"
                onClick={() => handleNavClick('promotions')}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/promotions' ? 'bg-rusty text-white' : 'text-brew hover:bg-chai/20 hover:text-rusty'
                }`}
              >
                Promotions
              </Link>
              <Link
                to="/unison-grocery"
                onClick={() => handleNavClick('unison_grocery')}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/unison-grocery' ? 'bg-rusty text-white' : 'text-brew hover:bg-chai/20 hover:text-rusty'
                }`}
              >
                Grocery
              </Link>
              <Link
                to="/contact"
                onClick={() => handleNavClick('contact')}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/contact' ? 'bg-rusty text-white' : 'text-brew hover:bg-chai/20 hover:text-rusty'
                }`}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <a
                  href="https://wa.me/27766386581"
                  onClick={handleOrderNowClick}
                  className="block w-full text-center bg-gradient-to-r from-rusty to-orange-600 hover:from-orange-700 hover:to-rusty text-white font-bold px-4 py-2 rounded-full transition-all duration-300"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}