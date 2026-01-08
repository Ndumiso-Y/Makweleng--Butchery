import OptimizedVideo from '../components/OptimizedVideo'
import OptimizedImage from '../components/OptimizedImage'
import grillingVideo from '../assets/grilling-optimized.mp4'
import assortedMeat from '../assets/grilled-kebabs-optimized.webp'

export default function BraaiBuy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Master the Art of Braai - Combined Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brew via-americano to-brew relative overflow-hidden min-h-[90vh]">
        {/* Background Video - Integrated into UI */}
        <div className="absolute inset-0">
          <OptimizedVideo
            src={grillingVideo}
            autoplay={true}
            loop
            muted
            lazy={false}
            priority={true}
            className="w-full h-full object-cover opacity-30"
            poster={assortedMeat}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900"></div>
        </div>

        {/* Buy & Braai Hero - Centered at Top */}
        <div className="container-pad relative text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-rusty">
              Buy & Braai
            </h1>
            <p className="text-xl text-white font-medium mb-8 drop-shadow-md">
              A‑grade, juicy T‑bone and fresh cuts for sit‑in braai or takeaway.
            </p>
          </div>
        </div>

        <div className="container-pad relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Master the Art of <span className="text-rusty">Braai</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience the authentic South African braai tradition with our quality cuts and braai service. From fire preparation to perfect timing, we bring you the complete braai experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-mocha rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-lg">Quality meat cuts</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-mocha rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-lg">Braai service</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-mocha rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-lg">Traditional South African flavors</span>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl">
                <OptimizedImage
                  src={assortedMeat}
                  alt="Assorted premium meat cuts"
                  className="w-full h-80 rounded-xl shadow-2xl meat-image-mobile object-cover"
                  loading="lazy"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-rusty mb-2">Premium Meat Selection</h3>
                  <p className="text-gray-300">Hand-selected cuts for the perfect braai experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buy and Braai Menu */}
      <section id="menu" className="py-20 bg-white">
        <div className="container-pad">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-chai">Buy and Braai</h2>
            <p className="text-xl text-brew">Select your choice of quality meat and enjoy our braai service</p>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border-2 border-rusty">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-chai mb-4">Available Meats</h3>
              <p className="text-gray-600">Choose from our selection of quality cuts</p>
            </div>

            <ul className="space-y-4 text-lg text-gray-700 mb-8">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-rusty mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Boerewors
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-rusty mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                T-Bone Steak
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-rusty mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Chuck Steak
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-rusty mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Short Ribs
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-rusty mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Pork
              </li>
            </ul>

            <div className="text-center">
              <a href="https://wa.me/27766386581" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block text-xl px-12 py-4">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-americano">
        <div className="container-pad text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Braai?</h2>
          <p className="text-xl text-gray-300 mb-8">Order your braai package today and get free delivery on orders over R500</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/27766386581" target="_blank" rel="noopener noreferrer" className="btn-primary text-xl px-12 py-6">
              WhatsApp Order
            </a>
            <a href="tel:+27766386581" className="btn-secondary text-xl px-12 py-6 bg-white text-chai hover:bg-gray-100">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}