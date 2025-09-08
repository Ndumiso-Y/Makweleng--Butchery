
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/buy-braai', label: 'Buy & Braai' },
  { to: '/promotions', label: 'Promotions' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-grayx-100">
      <div className="container-pad flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="Makweleng home">
          <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center border border-grey-medium">
            <svg viewBox="0 0 100 100" className="h-10 w-10">
              <text x="50" y="35" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#000">M</text>
              <circle cx="50" cy="70" r="20" stroke="#000" strokeWidth="2" fill="none"/>
              <path d="M45 65 L52 65 M47 70 L50 70" stroke="#000" strokeWidth="2"/>
              <circle cx="58" cy="72" r="3" fill="#DC2626"/>
            </svg>
          </div>
          <span className="font-extrabold text-grayx-900">Makweleng</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({isActive})=>`text-sm font-medium ${isActive ? 'text-grayx-900' : 'text-grayx-600 hover:text-amber'}`}
            >
              {n.label}
            </NavLink>
          ))}
          <a href="#whatsapp" className="btn-primary" aria-label="Order on WhatsApp">Order on WhatsApp</a>
        </nav>
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-grey-light transition-colors relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[60] md:hidden" onClick={() => setIsMenuOpen(false)}>
            <div className="fixed inset-0 bg-black bg-opacity-50"></div>
            <div 
              className="fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl z-[70]" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-grey-light">
                <span className="font-bold text-lg text-black">Menu</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-grey-light transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} className="text-black" />
                </button>
              </div>
              <div className="p-4">
                <nav className="space-y-1">
                  {navItems.map(n => (
                    <NavLink 
                      key={n.to} 
                      to={n.to} 
                      className={({isActive}) => 
                        `block px-4 py-3 rounded-lg font-medium text-base ${
                          isActive 
                            ? 'bg-amber text-black' 
                            : 'text-grey-dark hover:bg-grey-light hover:text-black'
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {n.label}
                    </NavLink>
                  ))}
                </nav>
                <div className="mt-6 pt-4 border-t border-grey-light">
                  <a 
                    href="#whatsapp" 
                    className="btn-primary w-full text-center py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
