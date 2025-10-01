import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Truck, Beef, ShoppingCart } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import OptimizedImage from '../components/OptimizedImage'
import image1 from '../assets/raw-beef-steaks-optimized.webp'
import image2 from '../assets/DeliveryMan-RustedOrgange.png'
import image3 from '../assets/WomenShopping-RustedOrgange.webp'
import image4 from '../assets/grilled-kebabs-optimized.webp'
// Story-driven narrative assets (in narrative order)
import butcherImage from '../assets/ManCutting-optimized.webp' // 1. Butcher with knife & cutting board (prep)
import meatImage from '../assets/isolated-meat-4-optimized.webp' // 2. Picture of meat (product quality)
import braaiStandImage from '../assets/BraaiStand-RustedOrgange.png' // 3. BBQ stand (cooking/serving)
import deliveryBikeImage from '../assets/Bike-RustedOrgange.png' // 4. Delivery bike (fulfillment)

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const servicesRef = useRef(null)
  const whyChooseRef = useRef(null)

  // Story narrative refs (in order: prep → product → cook → deliver)
  const butcherRef = useRef(null) // 1. Butcher (prep)
  const meatRef = useRef(null) // 2. Meat (product quality)
  const braaiStandRef = useRef(null) // 3. BBQ stand (cooking/serving)
  const deliveryBikeRef = useRef(null) // 4. Delivery bike (fulfillment)

  // Why Choose section refs (quality + speed)
  const whyChooseMeatRef = useRef(null) // Quality badge
  const whyChooseBikeRef = useRef(null) // Speed/delivery


  const slides = [
    {
      image: image1,
      alt: "Premium raw beef steaks",
      duration: 5000 // First image displays longer
    },
    {
      image: image2,
      alt: "Delivery service in yellow",
      duration: 4000 // Mobile focal point ~48%
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

  // Preload critical images
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

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  // Mouse tilt disabled to prevent conflicts

  // Story-driven GSAP animations
  useEffect(() => {
    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth <= 640
    const isTablet = window.innerWidth > 640 && window.innerWidth <= 1024

    if (shouldReduceMotion) {
      // Static placement when motion is reduced
      if (butcherRef.current) gsap.set(butcherRef.current, { opacity: 1 })
      if (meatRef.current) gsap.set(meatRef.current, { opacity: 1 })
      if (deliveryBikeRef.current) gsap.set(deliveryBikeRef.current, { opacity: 1 })
      if (braaiStandRef.current) gsap.set(braaiStandRef.current, { opacity: 1 })
      if (whyChooseMeatRef.current) gsap.set(whyChooseMeatRef.current, { opacity: 1 })
      if (whyChooseBikeRef.current) gsap.set(whyChooseBikeRef.current, { opacity: 1 })
      return
    }

    // === SERVICES SECTION: Story-driven narrative ===

    // 1. BUTCHER - slide from left with perspective
    if (butcherRef.current && !isMobile) {
      gsap.set(butcherRef.current, {
        opacity: 0,
        x: -60,
        rotationZ: -2,
        rotationY: 6,
        rotationX: 2,
        scale: 0.9
      })

      const butcherTl = gsap.timeline({
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          once: true
        }
      })

      butcherTl
        .to(butcherRef.current, {
          opacity: 1,
          x: 0,
          rotationZ: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out"
        })
        .to(butcherRef.current, {
          y: "+=6",
          duration: 2.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        }, "-=0.2")
    }

    // 2. MEAT - slide from top with scale (always visible on mobile)
    if (meatRef.current) {
      gsap.set(meatRef.current, {
        opacity: 0,
        y: -32,
        rotationY: -4,
        rotationX: 2,
        scale: isMobile ? 0.85 : 0.96
      })

      const meatTl = gsap.timeline({
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 75%",
          once: true
        }
      })

      meatTl
        .to(meatRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2
        })
        .to(meatRef.current, {
          y: "+=6",
          duration: 2.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        }, "-=0.2")
    }

    // 3. DELIVERY BIKE - slide from right with roll (always visible, smaller on mobile)
    if (deliveryBikeRef.current) {
      gsap.set(deliveryBikeRef.current, {
        opacity: 0,
        x: 70,
        rotationY: -3,
        scale: isMobile ? 0.7 : 0.9
      })

      const bikeTl = gsap.timeline({
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 70%",
          once: true
        }
      })

      bikeTl
        .to(deliveryBikeRef.current, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.4
        })
        .to(deliveryBikeRef.current, {
          x: "+=5",
          rotationZ: "+=1.5",
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        }, "-=0.2")
    }

    // 4. BBQ STAND - slide from right with heat shimmer
    if (braaiStandRef.current && !isMobile) {
      gsap.set(braaiStandRef.current, {
        opacity: 0,
        x: 50,
        rotationZ: 2,
        rotationY: -6,
        rotationX: 1,
        scale: 0.9
      })

      const bbqTl = gsap.timeline({
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 65%",
          once: true
        }
      })

      bbqTl
        .to(braaiStandRef.current, {
          opacity: 1,
          x: 0,
          rotationZ: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.6
        })
        .to(braaiStandRef.current, {
          scale: "+=0.01",
          duration: 3.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        }, "-=0.2")
    }

    // Content reveals for Services section
    const servicesTl = gsap.timeline({
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 75%",
        once: true
      }
    })

    // Services header
    servicesTl.fromTo(".services-header",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
    )

    // Service cards with stagger
    servicesTl.fromTo(".service-card",
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1
      },
      "-=0.3"
    )

    // === WHY CHOOSE SECTION: Quality + Speed ===

    // MEAT (Quality Badge) - slide from top, facing inward
    if (whyChooseMeatRef.current && !isMobile) {
      gsap.set(whyChooseMeatRef.current, {
        opacity: 0,
        y: -24,
        rotationY: 3,
        rotationX: 2,
        scale: 0.9
      })

      const whyMeatTl = gsap.timeline({
        scrollTrigger: {
          trigger: whyChooseRef.current,
          start: "top 80%",
          once: true
        }
      })

      whyMeatTl
        .to(whyChooseMeatRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out"
        })
        .to(whyChooseMeatRef.current, {
          y: "+=6",
          duration: 2.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        }, "-=0.2")
    }

    // DELIVERY BIKE (Speed) - slide from right with roll (visible on all devices, smaller on mobile)
    if (whyChooseBikeRef.current) {
      gsap.set(whyChooseBikeRef.current, {
        opacity: 0,
        x: 70,
        rotationY: -4,
        scale: isMobile ? 0.7 : 0.9
      })

      const whyBikeTl = gsap.timeline({
        scrollTrigger: {
          trigger: whyChooseRef.current,
          start: "top 75%",
          once: true
        }
      })

      whyBikeTl
        .to(whyChooseBikeRef.current, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.3
        })
        .to(whyChooseBikeRef.current, {
          x: "+=5",
          rotationZ: "+=1.5",
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        }, "-=0.2")
    }

    // Content reveals for Why Choose section
    const whyChooseTl = gsap.timeline({
      scrollTrigger: {
        trigger: whyChooseRef.current,
        start: "top 75%",
        once: true
      }
    })

    // Why Choose header and content
    whyChooseTl.fromTo(".why-choose-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )

    // Bullet points with stagger
    whyChooseTl.fromTo(".why-choose-text .flex",
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1
      },
      "-=0.4"
    )

    // CTA button
    whyChooseTl.fromTo(".why-choose-text .btn-secondary",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.2"
    )

    // Stats cards with stagger
    whyChooseTl.fromTo(".stat-card",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08
      },
      "-=0.3"
    )

    // Mouse tilt disabled to prevent animation conflicts

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  return (
    <div>
      {/* Hero Section with Carousel */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
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
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-rusty">Makweleng</span><br />
              Grocery & Butchery
            </motion.h1>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-lg md:text-xl font-medium text-rusty italic">
                "Your convenience is our Priority"
              </p>
            </motion.div>
            <motion.p
              className="text-xl md:text-2xl mb-8 font-light opacity-90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Makweleng Grocery, Butchery and delivery • Makweleng Liquor store • Makweleng Restaurant and Events venue — serving Makweleng Village with pride for over a decade.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <motion.a
                href="https://wa.me/27724746047"
                className="btn-primary text-xl px-12 py-6"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Order Now
              </motion.a>
              <motion.a
                href="#services"
                className="btn-secondary text-xl px-12 py-6"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Our Services
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className="py-20 bg-white relative overflow-hidden"
        style={{ perspective: '900px' }}
      >
        {/* Story Pipeline: Butcher → Meat → Delivery → BBQ (left to right) */}

        {/* 1. BUTCHER (Prep) - Far left edge, facing inward */}
        <div
          ref={butcherRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 md:w-48 md:h-48 lg:w-64 lg:h-64 z-5 hidden md:block"
          style={{
            pointerEvents: 'none',
            userSelect: 'none'
          }}
          aria-hidden="true"
        >
          <img
            src={butcherImage}
            alt=""
            className="w-full h-full object-contain filter drop-shadow-lg"
            loading="lazy"
          />
        </div>

        {/* 2. MEAT (Product Quality) - Small accent near heading, upper right */}
        <div
          ref={meatRef}
          className="absolute top-16 right-8 w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 z-5 hidden sm:block"
          style={{
            pointerEvents: 'none',
            userSelect: 'none'
          }}
          aria-hidden="true"
        >
          <img
            src={meatImage}
            alt=""
            className="w-full h-full object-contain filter drop-shadow-lg"
            loading="lazy"
          />
        </div>

        {/* 3. DELIVERY BIKE - Near first card, angled toward cards */}
        <div
          ref={deliveryBikeRef}
          className="absolute bottom-1/3 left-1/4 w-10 h-10 sm:w-14 sm:h-14 md:w-32 md:h-32 lg:w-40 lg:h-40 z-5"
          style={{
            pointerEvents: 'none',
            userSelect: 'none'
          }}
          aria-hidden="true"
        >
          <img
            src={deliveryBikeImage}
            alt=""
            className="w-full h-full object-contain filter drop-shadow-lg bike-image"
            loading="lazy"
          />
        </div>

        {/* 4. BBQ STAND - Far right edge, angled inward */}
        <div
          ref={braaiStandRef}
          className="absolute right-0 bottom-8 w-16 h-16 md:w-40 md:h-40 lg:w-48 lg:h-48 z-5 hidden md:block"
          style={{
            pointerEvents: 'none',
            userSelect: 'none'
          }}
          aria-hidden="true"
        >
          <img
            src={braaiStandImage}
            alt=""
            className="w-full h-full object-contain filter drop-shadow-lg braai-stand-image"
            loading="lazy"
          />
        </div>

        <div className="container-pad relative z-20">
          <div className="text-center mb-16 services-header">
            <h2 className="text-4xl font-bold text-chai mb-4">Our Services</h2>
            <p className="text-xl text-brew">From prep to delivery — we handle every step with care and precision.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 services-grid">
            {/* Service 1 - Delivery */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center service-card border border-roast">
              <div
                className="w-16 h-16 bg-rusty rounded-full flex items-center justify-center mx-auto mb-6 service-icon"
              >
                <Truck size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-chai">Doorstep Delivery</h3>
              <p className="text-gray-600 mb-4">Reliable delivery for orders over R500, quality brought to your doorstep, no queues or travel.</p>
              <div className="font-semibold text-rusty">Free delivery after 6 orders</div>
            </div>

            {/* Service 2 - Meat */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center service-card border border-roast">
              <div
                className="w-16 h-16 bg-mocha rounded-full flex items-center justify-center mx-auto mb-6 service-icon"
              >
                <Beef size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-chai">Precision Meat Cutting</h3>
              <p className="text-gray-600 mb-4">Cold-room storage and A-grade cuts at affordable prices. Trust us with your meat needs.</p>
              <div className="font-semibold text-chai">Freshness guaranteed</div>
            </div>

            {/* Service 3 - Complete */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center service-card border border-roast">
              <div
                className="w-16 h-16 bg-mocha rounded-full flex items-center justify-center mx-auto mb-6 service-icon"
              >
                <ShoppingCart size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-chai">One-Stop Groceries</h3>
              <p className="text-gray-600 mb-4">Staples, electricity & DSTV payments, airtime, and more. Everything you need in one convenient location.</p>
              <div className="font-semibold text-rusty">Complete convenience</div>
            </div>
          </div>

        </div>

      </section>

      {/* Why Choose Us Section */}
      <section
        ref={whyChooseRef}
        className="py-20 bg-brew relative overflow-hidden"
        style={{ perspective: '900px' }}
      >
        {/* Quality + Speed Focus */}

        {/* MEAT (Quality Badge) - Near heading, facing inward */}
        <div
          ref={whyChooseMeatRef}
          className="absolute top-8 left-8 w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 z-5 hidden sm:block"
          style={{
            pointerEvents: 'none',
            userSelect: 'none'
          }}
          aria-hidden="true"
        >
          <img
            src={meatImage}
            alt=""
            className="w-full h-full object-contain filter drop-shadow-lg"
            loading="lazy"
          />
        </div>

        {/* DELIVERY BIKE (Speed) - Bottom right near stats, angled toward content */}
        <div
          ref={whyChooseBikeRef}
          className="absolute bottom-16 right-4 w-10 h-10 sm:w-14 sm:h-14 md:w-40 md:h-40 lg:w-48 lg:h-48 z-5"
          style={{
            pointerEvents: 'none',
            userSelect: 'none'
          }}
          aria-hidden="true"
        >
          <img
            src={deliveryBikeImage}
            alt=""
            className="w-full h-full object-contain filter drop-shadow-lg bike-image"
            loading="lazy"
          />
        </div>

        <div className="container-pad relative z-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center why-choose-content">
              {/* Content */}
              <div className="why-choose-text">
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Why Choose <span className="text-rusty">Makweleng</span>?
                </h2>
                <p className="text-xl text-white leading-relaxed mb-8">
                  For over a decade, we've been proudly serving the Makweleng Village community with premium meat cuts, fresh groceries, and reliable delivery services.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-mocha rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">10+ Years Experience</h3>
                      <p className="text-gray-300">Trusted by the community for over a decade</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-mocha rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">A-Grade Quality</h3>
                      <p className="text-gray-300">Premium cuts and fresh products guaranteed</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-mocha rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Free Delivery</h3>
                      <p className="text-gray-300">After 6 orders - convenience at your doorstep</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pb-4">
                  <a href="/about" className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-brew transition-all duration-300">
                    Learn More About Us
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 why-choose-stats">
                <div className="text-center p-8 bg-white rounded-xl stat-card">
                  <div className="text-4xl font-bold mb-2 text-rusty">500+</div>
                  <div className="text-gray-600 font-medium">Happy Customers</div>
                </div>
                <div className="text-center p-8 bg-white rounded-xl stat-card">
                  <div className="text-4xl font-bold mb-2 text-rusty">10+</div>
                  <div className="text-gray-600 font-medium">Years Serving</div>
                </div>
                <div className="text-center p-8 bg-white rounded-xl stat-card">
                  <div className="text-4xl font-bold mb-2 text-rusty">5★</div>
                  <div className="text-gray-600 font-medium">Service Rating</div>
                </div>
                <div className="text-center p-8 bg-white rounded-xl stat-card">
                  <div className="text-4xl font-bold mb-2 text-rusty">24/7</div>
                  <div className="text-gray-600 font-medium">WhatsApp Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-americano text-white">
        <div className="container-pad text-center">
          <h2 className="text-4xl font-bold mb-8 text-rusty">Order Today, Delivered to Your Doorstep</h2>
          <p className="text-xl text-gray-300 mb-8">Minimum order R500. Free delivery after 6 orders (T&Cs apply).</p>

          {/* Operational Hours */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-rusty mb-4">Operational Hours</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <div className="font-semibold text-white mb-2">Monday - Saturday</div>
                <div className="text-lg">07:00 - 17:00</div>
              </div>
              <div>
                <div className="font-semibold text-white mb-2">Sunday Schedule</div>
                <div className="text-sm">
                  <div>First & Last Sunday: 07:00 - 16:00</div>
                  <div>Mid Month Sunday: 07:00 - 15:00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/27724746047" className="btn-primary text-xl px-12 py-6">
              WhatsApp 072 474 6047
            </a>
            <a href="https://wa.me/27760114405" className="btn-secondary text-xl px-12 py-6 bg-white hover:bg-gray-100 text-chai">
              WhatsApp 076 011 4405
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}