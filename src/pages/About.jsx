
import Section from '../components/Section'
import OptimizedImage from '../components/OptimizedImage'
import OptimizedVideo from '../components/OptimizedVideo'
import womanGroceries from '../assets/womangroceries.jpg'
import womenBuyingVideo from '../assets/women-buying-groceries.mp4'

export default function About(){
  return (
    <div>
      {/* Hero Section with Woman Groceries Image */}
      <section className="relative overflow-hidden bg-black min-h-[80vh]">
        <div className="absolute inset-0">
          <OptimizedImage
            src={womanGroceries}
            alt="Woman with groceries - community focused service"
            className="w-full h-full opacity-60 mobile-optimized-img"
            loading="eager"
            priority={true}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container-pad text-center flex items-center justify-center min-h-[80vh]">
          <div className="max-w-4xl">
            <h1 className="text-white mb-8 drop-shadow-lg text-5xl md:text-6xl font-bold">About Us</h1>
            <p className="text-xl text-white font-medium mb-12 drop-shadow-md">Makweleng Grocery, Butchery & Delivery is a family‑run business in Makweleng Village (Mabeskraal), Rustenburg.</p>
            
            <div className="bg-white bg-opacity-90 rounded-xl2 p-8 shadow-medium max-w-3xl mx-auto">
              <p className="text-lg text-grey-dark mb-6">For over a decade, we've served the community with basic grocery supplies, fresh high‑quality A‑grade meat, and doorstep delivery. We focus on convenience and dignity for pensioners and families — reducing long walks, queues, and heavy loads.</p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-amber text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">10+</span>
                  </div>
                  <div className="text-black font-semibold">Years Serving</div>
                </div>
                <div className="text-center">
                  <div className="bg-amber text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">500+</span>
                  </div>
                  <div className="text-black font-semibold">Families Served</div>
                </div>
                <div className="text-center">
                  <div className="bg-amber text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">R500</span>
                  </div>
                  <div className="text-black font-semibold">Min Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <OptimizedVideo
            src={womenBuyingVideo}
            autoplay={true}
            loop
            muted
            lazy={true}
            className="w-full h-full object-cover opacity-20"
            poster={womanGroceries}
          />
        </div>
        <div className="absolute inset-0 bg-white bg-opacity-60"></div>

        <div className="relative container-pad">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-amber text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-amber text-xl font-bold mb-2">Convenience‑First</h3>
              <p className="text-gray-700">Delivery designed to remove long walks, queues, and heavy loads.</p>
            </div>
            <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-amber text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-amber text-xl font-bold mb-2">Community‑Focused</h3>
              <p className="text-gray-700">Especially supporting pensioners and families in our village.</p>
            </div>
            <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-amber text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-amber text-xl font-bold mb-2">Family Network</h3>
              <p className="text-gray-700">Part of a family network of local businesses serving Makweleng.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container-pad">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mission, Vision & Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Mission */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4" style={{color: '#9b5f44'}}>Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Create awareness and scale our delivery service so no one in the village is left behind.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4" style={{color: '#9b5f44'}}>Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Quality supplies and fresh meat delivered to your door — comfort without leaving home.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4" style={{color: '#9b5f44'}}>Values</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white bg-opacity-70 rounded-xl">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#ffbe00'}}></div>
                  <span className="font-semibold text-gray-800">Quality Excellence</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white bg-opacity-70 rounded-xl">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#ffbe00'}}></div>
                  <span className="font-semibold text-gray-800">Customer‑Centric Service</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white bg-opacity-70 rounded-xl">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#ffbe00'}}></div>
                  <span className="font-semibold text-gray-800">Community Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
