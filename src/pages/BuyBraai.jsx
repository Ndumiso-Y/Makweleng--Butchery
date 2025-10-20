import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import image1 from '../assets/raw-beef-steaks-optimized.webp'
import image2 from '../assets/DeliveryMan-RustedOrgange.png'
import image3 from '../assets/WomenShopping-RustedOrgange.webp'
import image4 from '../assets/grilled-kebabs-optimized.webp'

export default function BuyBraai() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const slides = [
    {
      image: image1,
      alt: "Premium raw beef steaks",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section with Carousel - Braai Services */}
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
      </section>

      {/* Braai Packages */}
      <section id="packages" className="py-20 bg-white">
        <div className="container-pad">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-chai">Braai Services</h2>
            <p className="text-xl text-brew">Ready-made packages for your perfect braai</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Family Package */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-roast">
              <div className="w-16 h-16 bg-mocha rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-chai">Family Package</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-rusty">R450</span>
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
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-rusty relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-2 text-sm font-bold text-white bg-rusty rounded-full">Most Popular</span>
              </div>
              <div className="w-16 h-16 bg-mocha rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-chai">Premium Package</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-rusty">R750</span>
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
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-roast">
              <div className="w-16 h-16 bg-mocha rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-chai">Basic Package</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-rusty">R280</span>
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
      <section className="py-16 bg-americano">
        <div className="container-pad text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Braai?</h2>
          <p className="text-xl text-gray-300 mb-8">Order your braai package today and get free delivery on orders over R500</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/27724746047" className="btn-primary text-xl px-12 py-6">
              WhatsApp Order
            </a>
            <a href="tel:0724746047" className="btn-secondary text-xl px-12 py-6 bg-white text-chai hover:bg-gray-100">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
