import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import OptimizedImage from '../components/OptimizedImage'
import OptimizedVideo from '../components/OptimizedVideo'
import { Truck, Beef, ShoppingCart } from 'lucide-react'
import deliveryImage from '../assets/DeliveryMan-RustedOrgange.png'
import foodDeliveryVideo from '../assets/food-delivery.mp4'
import image1 from '../assets/raw-beef-steaks-optimized.webp'
import image2 from '../assets/DeliveryMan-RustedOrgange.png'
import image3 from '../assets/WomenShopping-RustedOrgange.webp'
import image4 from '../assets/grilled-kebabs-optimized.webp'

export default function Services(){
  const [currentSlide, setCurrentSlide] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const slides = [
    {
      image: image1,
      alt: "Quality raw beef steaks",
      duration: 5000
    },
    {
      image: image2,
      alt: "Delivery service in yellow",
      duration: 4000
    },
    {
      image: image3,
      alt: "Women buying groceries",
      duration: 4000
    },
    {
      image: image4,
      alt: "Grilled kebabs and vegetables on barbecue",
      duration: 4000
    }
  ]

  useEffect(() => {
    const preloadImages = [image1, image2]
    preloadImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      link.fetchPriority = 'high'
      document.head.appendChild(link)
    })
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, slides[currentSlide].duration)

    return () => clearInterval(timer)
  }, [currentSlide, slides])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Carousel Images */}
        <motion.div
          className="absolute inset-0"
          style={{ y: scrollY * 0.5 }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                loading={index <= 1 ? 'eager' : 'lazy'}
                className={`w-full h-full object-cover ${
                  index === 0 ? 'carousel-image-first' :
                  index === 1 ? 'delivery-man-image' :
                  index === 2 ? 'shopping-woman-image' :
                  'mobile-optimized-img'
                }`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          ))}
        </motion.div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-rusty scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white container-pad">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Our <span className="text-rusty">Services</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 font-light opacity-90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Doorstep delivery, precision meat cutting & storage, and comprehensive groceries — all designed for your convenience.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        {/* Full Background Video with Fade Effects */}
        <div className="absolute inset-0 opacity-15">
          <OptimizedVideo
            src={foodDeliveryVideo}
            autoplay={true}
            loop
            muted
            lazy={true}
            className="w-full h-full object-cover food-delivery-video"
            poster={deliveryImage}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-60"></div>
        </div>

        <div className="container-pad relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-chai mb-6">What We Offer</h2>
            <p className="text-xl text-brew max-w-3xl mx-auto leading-relaxed">Professional services designed to make your life easier and more convenient</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-roast">
              <div className="absolute top-4 right-4">
                <span className="bg-rusty text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">Most Popular</span>
              </div>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-rusty to-mocha rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                <Truck size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-chai">Doorstep Delivery</h3>
              <p className="text-brew leading-relaxed">Experience the ease of receiving groceries and essentials right at your doorstep. Reliable delivery from orders of R500 and above.</p>
              <div className="mt-4 text-rusty font-semibold">Free delivery after 6 orders</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-roast">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-mocha to-chai rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                <Beef size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-chai">Precision Meat Cutting</h3>
              <p className="text-brew leading-relaxed">Bring your carcass for cold‑room storage and quality cuts at affordable prices. Expert butchers ensure perfect cuts every time.</p>
              <div className="mt-4 font-semibold text-chai">Quality freshness guaranteed</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-roast">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-mocha to-chai rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-chai">Complete Grocery Store</h3>
              <p className="text-brew leading-relaxed">From pantry staples to daily essentials, plus DSTV, electricity payments, and airtime. Everything you need in one place.</p>
              <div className="mt-4 text-chai font-semibold">One-stop convenience</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-americano text-white">
        <div className="container-pad">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the convenience and reliability that has made us the trusted choice for over a decade</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brew p-8 rounded-2xl hover:bg-mocha transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-mocha rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Save Time</h3>
                  <p className="text-gray-300">No more standing for hours waiting for transport or dealing with long queues and exhausting trips.</p>
                </div>
              </div>
            </div>
            <div className="bg-brew p-8 rounded-2xl hover:bg-mocha transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-mocha rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Stay Comfortable</h3>
                  <p className="text-gray-300">No more getting caught in the rain with heavy bags or dealing with uncomfortable weather conditions.</p>
                </div>
              </div>
            </div>
            <div className="bg-brew p-8 rounded-2xl hover:bg-mocha transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-mocha rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Easy Payments</h3>
                  <p className="text-gray-300">Pay for DSTV, electricity, and airtime in-store. Swipe your SASSA card with ease and convenience.</p>
                </div>
              </div>
            </div>
            <div className="bg-brew p-8 rounded-2xl hover:bg-mocha transition-colors duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-mocha rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Community Care</h3>
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
