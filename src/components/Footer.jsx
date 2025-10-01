import cowSunsetVideo from '../assets/cow-sunset-optimized.mp4'

export default function Footer() {
  return (
    <footer className="relative bg-brew text-white py-12 overflow-hidden">
      {/* Subtle background video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
          style={{ filter: 'grayscale(20%)' }}
        >
          <source src={cowSunsetVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-brew via-brew/80 to-brew/60"></div>
      </div>

      <div className="container-pad relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-2 text-rusty">Makweleng Group</h3>
            <div className="mb-4">
              <p className="text-rusty font-medium italic text-lg">
                "Your convenience is our Priority"
              </p>
            </div>
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
              <li><a href="/" className="text-gray-300 hover:text-rusty">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-rusty">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-rusty">Services</a></li>
              <li><a href="/braai-buy" className="text-gray-300 hover:text-rusty">Buy & Braai</a></li>
              <li><a href="/promotions" className="text-gray-300 hover:text-rusty">Promotions</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-rusty">Contact</a></li>
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

        <div className="border-t border-roast mt-8 pt-8 text-center">
          <p className="text-gray-400">
© 2025 Makweleng Group. All rights reserved. | Designed by <a href="https://www.embarkdigitals.com" target="_blank" rel="noopener noreferrer" className="text-rusty hover:underline">Embark Digitals</a>
          </p>
        </div>
      </div>
    </footer>
  )
}