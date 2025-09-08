
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Truck, Beef, ShoppingCart } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="bg-black text-white mt-16">
      {/* Main Footer Content */}
      <div className="container-pad py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 bg-white rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 100 140" className="h-12 w-12">
                  <text x="50" y="25" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#666">M</text>
                  <circle cx="50" cy="70" r="35" stroke="#666" strokeWidth="2" fill="none"/>
                  <text x="25" y="50" fontSize="8" fill="#666">M</text>
                  <text x="30" y="58" fontSize="8" fill="#666">A</text>
                  <text x="35" y="67" fontSize="8" fill="#666">K</text>
                  <text x="42" y="75" fontSize="8" fill="#666">W</text>
                  <text x="50" y="82" fontSize="8" fill="#666">E</text>
                  <text x="58" y="75" fontSize="8" fill="#666">L</text>
                  <text x="65" y="67" fontSize="8" fill="#666">E</text>
                  <text x="70" y="58" fontSize="8" fill="#666">N</text>
                  <text x="75" y="50" fontSize="8" fill="#666">G</text>
                  <path d="M45 65 L52 65 M47 70 L50 70" stroke="#666" strokeWidth="1.5"/>
                  <circle cx="60" cy="75" r="4" fill="#DC2626"/>
                  <text x="20" y="110" fontSize="6" fill="#666">P U B</text>
                  <text x="40" y="120" fontSize="6" fill="#666">&amp;</text>
                  <text x="50" y="110" fontSize="6" fill="#666">R E S T A U R A N T</text>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-amber">Makweleng Group</h2>
            </div>
            <div className="w-16 h-1 bg-amber mb-6"></div>
            <p className="text-grey-light mb-8 text-lg leading-relaxed max-w-md">
              Fresh meat, groceries, and delivery — serving Makweleng Village with pride for over a decade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="btn-primary" onClick={() => window.scrollTo(0, 0)}>Our Services</Link>
              <a 
                href="https://wa.me/27724746047" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-opacity-90 transition-all duration-200 tracking-wide"
              >
                Order Now
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-amber mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-grey-light hover:text-amber transition-colors text-base" onClick={() => window.scrollTo(0, 0)}>About Us</Link></li>
              <li><Link to="/services" className="text-grey-light hover:text-amber transition-colors text-base" onClick={() => window.scrollTo(0, 0)}>Services</Link></li>
              <li><Link to="/buy-braai" className="text-grey-light hover:text-amber transition-colors text-base" onClick={() => window.scrollTo(0, 0)}>Buy & Braai</Link></li>
              <li><Link to="/promotions" className="text-grey-light hover:text-amber transition-colors text-base" onClick={() => window.scrollTo(0, 0)}>Promotions</Link></li>
              <li><Link to="/contact" className="text-grey-light hover:text-amber transition-colors text-base" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-amber mb-6">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-amber mt-0.5 flex-shrink-0" />
                <span className="text-grey-light text-sm">30465 Makweleng Section, Mabeskraal, 0313</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-amber flex-shrink-0" />
                <a href="mailto:info@makwelengroup.co.za" className="text-grey-light hover:text-amber transition-colors text-sm break-all">
                  info@makwelengroup.co.za
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-amber mt-0.5 flex-shrink-0" />
                <div className="text-grey-light text-sm">
                  <a href="tel:+27724746047" className="hover:text-amber transition-colors block">072 474 6047</a>
                  <a href="tel:+27760114405" className="hover:text-amber transition-colors block">076 011 4405</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-amber mt-0.5 flex-shrink-0" />
                <div className="text-grey-light text-sm">
                  <div>Mon–Sat: 8:00–18:00</div>
                  <div>Sun: 9:00–15:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-grey-dark py-6">
        <div className="container-pad">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-grey-light">
              © 2025 Makweleng Group. All rights reserved.
            </div>
            <div className="text-grey-light">
              Designed with care by <span className="text-amber font-medium">Embark Digitals</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
