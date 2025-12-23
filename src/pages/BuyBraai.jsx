import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import image1 from '../assets/raw-beef-steaks-optimized.webp'
import image2 from '../assets/DeliveryMan-RustedOrgange-optimized.webp'
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
    const preloadImages = [image1, image2, image3, image4]
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
              <a href="https://wa.me/27766386581" className="btn-primary inline-block text-xl px-12 py-4">
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
            <a href="https://wa.me/27766386581" className="btn-primary text-xl px-12 py-6">
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
