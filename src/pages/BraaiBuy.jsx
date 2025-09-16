import OptimizedVideo from '../components/OptimizedVideo'
import OptimizedImage from '../components/OptimizedImage'
import grillingVideo from '../assets/grilling.mp4'
import assortedMeat from '../assets/grilled-kebabs-and-vegetables-cooking-on-a-barbecu-2025-04-05-03-50-29-utc-DpONd5qP.jpg'

export default function BraaiBuy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Master the Art of Braai - Combined Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden min-h-[90vh]">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#ffbe00'}}>
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
                Master the Art of <span style={{color: '#ffbe00'}}>Braai</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience the authentic South African braai tradition with our premium cuts and expert techniques. From fire preparation to perfect timing, we bring you the complete braai experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-lg">Premium A-grade meat cuts</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-lg">Expert braai techniques</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">Premium Meat Selection</h3>
                  <p className="text-gray-300">Hand-selected cuts for the perfect braai experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Braai Packages */}
      <section className="py-20">
        <div className="container-pad">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#9b5f44'}}>Braai Packages</h2>
            <p className="text-xl text-gray-600">Ready-made packages for your perfect braai</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Family Package */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#ffbe00'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{color: '#9b5f44'}}>Family Package</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold" style={{color: '#ffbe00'}}>R450</span>
                <span className="text-gray-600 ml-2">Serves 4-6</span>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  2kg Boerewors
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  1kg Lamb chops
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  1kg Beef steaks
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Free braai spice
                </li>
              </ul>
              <a href="https://wa.me/27724746047" className="btn-primary w-full text-center">
                Order Family Package
              </a>
            </div>

            {/* Premium Package */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2" style={{borderColor: '#ffbe00'}}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-2 text-sm font-bold text-white rounded-full" style={{backgroundColor: '#ffbe00'}}>Most Popular</span>
              </div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#9b5f44'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{color: '#9b5f44'}}>Premium Package</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold" style={{color: '#ffbe00'}}>R750</span>
                <span className="text-gray-600 ml-2">Serves 6-8</span>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  3kg Premium Boerewors
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  2kg Lamb chops
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  1.5kg T-bone steaks
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Whole chicken
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Premium braai spice set
                </li>
              </ul>
              <a href="https://wa.me/27724746047" className="btn-primary w-full text-center">
                Order Premium Package
              </a>
            </div>

            {/* Basic Package */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#ffbe00'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{color: '#9b5f44'}}>Basic Package</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold" style={{color: '#ffbe00'}}>R280</span>
                <span className="text-gray-600 ml-2">Serves 2-4</span>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  1kg Boerewors
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  800g Beef patties
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  500g Chicken pieces
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Basic braai spice
                </li>
              </ul>
              <a href="https://wa.me/27724746047" className="btn-primary w-full text-center">
                Order Basic Package
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="container-pad text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Braai?</h2>
          <p className="text-xl text-gray-300 mb-8">Order your braai package today and get free delivery on orders over R500</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/27724746047" className="btn-primary text-xl px-12 py-6">
              WhatsApp Order
            </a>
            <a href="tel:0724746047" className="btn-secondary text-xl px-12 py-6 bg-white text-yellow-600 hover:bg-gray-100" style={{color: '#9b5f44'}}>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}