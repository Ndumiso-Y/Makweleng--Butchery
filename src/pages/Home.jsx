import { useState, useEffect } from 'react'
import image1 from '/dist/assets/raw-beef-steaks-2024-09-17-03-02-53-utc-Qs-9Wr_u.jpg'
import image2 from '/dist/assets/Delivery in yellow.jpg'
import image3 from '/dist/assets/women buying groceries.jpg'
import image4 from '/dist/assets/grilled-kebabs-and-vegetables-cooking-on-a-barbecu-2025-04-05-03-50-29-utc.jpg'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: image1,
      alt: "Premium raw beef steaks",
      duration: 5000 // First image displays longer
    },
    {
      image: image2,
      alt: "Delivery service in yellow",
      duration: 4000 // Better timing for human comprehension
    },
    {
      image: image3,
      alt: "Woman buying groceries",
      duration: 4000
    },
    {
      image: image4,
      alt: "Grilled kebabs and vegetables on barbecue",
      duration: 4000
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, slides[currentSlide].duration)

    return () => clearInterval(timer)
  }, [currentSlide, slides])
  return (
    <div>
      {/* Hero Section with Carousel */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Carousel Images */}
        <div className="absolute inset-0">
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
                className={`w-full h-full ${
                  index === 0 ? 'carousel-image-first' :
                  index === 1 ? 'carousel-image-second' :
                  'mobile-optimized-img'
                }`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white container-pad">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Premium <span style={{color: '#ffbe00'}}>Makweleng</span><br />
              Grocery & Butchery
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
              Makweleng Grocery, Butchery and delivery • Makweleng Liquor store • Makweleng Restaurant and Events venue — serving Makweleng Village with pride for over a decade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/27724746047" className="btn-primary text-xl px-12 py-6 transform hover:scale-105 transition-all duration-300">
                Order Now
              </a>
              <a href="#services" className="btn-secondary text-xl px-12 py-6 transform hover:scale-105 transition-all duration-300">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container-pad">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Makweleng</h2>
            <p className="text-xl text-gray-600">Family-run. Community-driven. Over a decade serving Makweleng with pride.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 - Delivery */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#ffbe00'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#9b5f44'}}>Doorstep Delivery</h3>
              <p className="text-gray-600 mb-4">Reliable delivery from orders of R500+. No more queues, no more heavy bags — we bring quality to your door.</p>
              <div className="font-semibold" style={{color: '#ffbe00'}}>Free delivery after 6 orders</div>
            </div>

            {/* Service 2 - Meat */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#9b5f44'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#9b5f44'}}>Precision Meat Cutting</h3>
              <p className="text-gray-600 mb-4">Cold-room storage and A-grade cuts at affordable prices. Expert butchers ensuring perfect cuts every time.</p>
              <div className="font-semibold" style={{color: '#9b5f44'}}>Freshness guaranteed</div>
            </div>

            {/* Service 3 - Complete */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#ffbe00'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#9b5f44'}}>One-Stop Groceries</h3>
              <p className="text-gray-600 mb-4">Staples, electricity & DSTV payments, airtime, and more. Everything you need in one convenient location.</p>
              <div className="font-semibold" style={{color: '#ffbe00'}}>Complete convenience</div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-pad">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <h2 className="text-4xl font-bold mb-6" style={{color: '#9b5f44'}}>
                  Why Choose <span style={{color: '#ffbe00'}}>Makweleng</span>?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  For over a decade, we've been proudly serving the Makweleng Village community with premium meat cuts, fresh groceries, and reliable delivery services.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#ffbe00'}}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{color: '#9b5f44'}}>10+ Years Experience</h3>
                      <p className="text-gray-600">Trusted by the community for over a decade</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#ffbe00'}}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{color: '#9b5f44'}}>A-Grade Quality</h3>
                      <p className="text-gray-600">Premium cuts and fresh products guaranteed</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#ffbe00'}}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{color: '#9b5f44'}}>Free Delivery</h3>
                      <p className="text-gray-600">After 6 orders - convenience at your doorstep</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a href="/about" className="btn-secondary px-8 py-3" style={{color: '#9b5f44', borderColor: '#9b5f44'}}>
                    Learn More About Us
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-8 bg-gray-50 rounded-xl">
                  <div className="text-4xl font-bold mb-2" style={{color: '#ffbe00'}}>500+</div>
                  <div className="text-gray-600 font-medium">Happy Customers</div>
                </div>
                <div className="text-center p-8 bg-gray-50 rounded-xl">
                  <div className="text-4xl font-bold mb-2" style={{color: '#ffbe00'}}>10+</div>
                  <div className="text-gray-600 font-medium">Years Serving</div>
                </div>
                <div className="text-center p-8 bg-gray-50 rounded-xl">
                  <div className="text-4xl font-bold mb-2" style={{color: '#ffbe00'}}>5★</div>
                  <div className="text-gray-600 font-medium">Service Rating</div>
                </div>
                <div className="text-center p-8 bg-gray-50 rounded-xl">
                  <div className="text-4xl font-bold mb-2" style={{color: '#ffbe00'}}>24/7</div>
                  <div className="text-gray-600 font-medium">WhatsApp Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container-pad text-center">
          <h2 className="text-4xl font-bold mb-8" style={{color: '#ffbe00'}}>Order Today, Delivered to Your Doorstep</h2>
          <p className="text-xl text-gray-300 mb-8">Minimum order R500. Free delivery after 6 orders (T&Cs apply).</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/27724746047" className="btn-primary text-xl px-12 py-6">
              WhatsApp 072 474 6047
            </a>
            <a href="https://wa.me/27760114405" className="btn-secondary text-xl px-12 py-6 bg-white hover:bg-gray-100" style={{color: '#9b5f44'}}>
              WhatsApp 076 011 4405
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}