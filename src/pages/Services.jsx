
import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import OptimizedImage from '../components/OptimizedImage'
import OptimizedVideo from '../components/OptimizedVideo'
import { Truck, Beef, ShoppingCart } from 'lucide-react'
import deliveryImage from '../assets/Delivery-in-yellow.jpg'
import foodDeliveryVideo from '../assets/food-delivery.mp4'

export default function Services(){
  return (
    <div>
      {/* Hero Section with New Cover Image */}
      <section className="relative overflow-hidden bg-black min-h-[80vh]">
        <div className="absolute inset-0">
          <OptimizedImage
            src={deliveryImage}
            alt="Yellow delivery service with groceries"
            className="w-full h-full opacity-70 mobile-optimized-img"
            loading="eager"
            priority={true}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container-pad text-center flex items-center justify-center min-h-[80vh]">
          <div className="hero-content">
            <h1 className="text-white mb-8 drop-shadow-lg animate-fade-up text-5xl md:text-6xl font-bold">Our Services</h1>
            <p className="text-xl text-white font-medium max-w-3xl mx-auto drop-shadow-md animate-fade-up-delay">Doorstep delivery, precision meat cutting & storage, and comprehensive groceries — all designed for your convenience.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Full Background Video with Fade Effects */}
        <div className="absolute inset-0 opacity-15">
          <OptimizedVideo
            src={foodDeliveryVideo}
            autoplay={true}
            loop
            muted
            lazy={true}
            className="w-full h-full object-cover"
            poster={deliveryImage}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-60"></div>
        </div>

        <div className="container-pad relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Professional services designed to make your life easier and more convenient</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse">Most Popular</span>
              </div>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                <Truck size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#9b5f44'}}>Doorstep Delivery</h3>
              <p className="text-gray-600 leading-relaxed">Experience the ease of receiving groceries and essentials right at your doorstep. Reliable delivery from orders of R500 and above.</p>
              <div className="mt-4 text-yellow-600 font-semibold">Free delivery after 6 orders</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(to bottom right, #9b5f44, #6d4332)'}}>
                <Beef size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#9b5f44'}}>Precision Meat Cutting</h3>
              <p className="text-gray-600 leading-relaxed">Bring your carcass for cold‑room storage and premium cuts at affordable prices. Expert butchers ensure perfect cuts every time.</p>
              <div className="mt-4 font-semibold" style={{color: '#9b5f44'}}>A-grade freshness guaranteed</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#9b5f44'}}>Complete Grocery Store</h3>
              <p className="text-gray-600 leading-relaxed">From pantry staples to daily essentials, plus DSTV, electricity payments, and airtime. Everything you need in one place.</p>
              <div className="mt-4 text-yellow-600 font-semibold">One-stop convenience</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-pad">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#ffbe00'}}>Why Choose Our Services?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the convenience and reliability that has made us the trusted choice for over a decade</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">Save Time</h3>
                  <p className="text-gray-300">No more standing for hours waiting for transport or dealing with long queues and exhausting trips.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">Stay Comfortable</h3>
                  <p className="text-gray-300">No more getting caught in the rain with heavy bags or dealing with uncomfortable weather conditions.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">Easy Payments</h3>
                  <p className="text-gray-300">Pay for DSTV, electricity, and airtime in-store. Swipe your SASSA card with ease and convenience.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">Community Care</h3>
                  <p className="text-gray-300">Especially focused on supporting pensioners and families in our village with dignity and respect.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
