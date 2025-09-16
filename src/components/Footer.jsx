export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-12">
      <div className="container-pad">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" style={{color: '#ffbe00'}}>Makweleng Group</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Makweleng Grocery, Butchery and delivery • Makweleng Liquor store • Makweleng Restaurant and Events venue — serving Makweleng Village with pride for over a decade.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/27724746047" className="btn-primary">
                Order Now
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-yellow-400">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-yellow-400">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-yellow-400">Services</a></li>
              <li><a href="/braai-buy" className="text-gray-300 hover:text-yellow-400">Buy & Braai</a></li>
              <li><a href="/promotions" className="text-gray-300 hover:text-yellow-400">Promotions</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>30465 Makweleng Section</p>
              <p>Mabeskraal, 0313</p>
              <p>Phone: 072 474 6047</p>
              <p>Phone: 076 011 4405</p>
              <p>Mon-Sat: 07:00-17:00</p>
              <p>First & Last Sunday: 07:00-16:00</p>
              <p>Mid Month Sunday: 07:00-15:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
© 2025 Makweleng Group. All rights reserved. | Designed by <a href="https://www.embarkdigitals.com" target="_blank" rel="noopener noreferrer" style={{color: '#ffbe00'}} className="hover:underline">Embark Digitals</a>
          </p>
        </div>
      </div>
    </footer>
  )
}