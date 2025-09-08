
import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import deliveryImage from '../assets/black-deliveryman-holding-eco-mesh-bag-with-grocer-2025-03-18-18-17-38-utc.jpg'
import { Truck, Beef, ShoppingCart } from 'lucide-react'

export default function Services(){
  return (
    <div>
      {/* Hero Section with Delivery Image */}
      <section className="relative overflow-hidden bg-black min-h-[80vh]">
        <div className="absolute inset-0">
          <img 
            src={deliveryImage} 
            alt="Professional delivery service with eco-friendly bags" 
            className="w-full h-full object-cover object-[center_20%] opacity-60"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container-pad text-center flex items-center justify-center min-h-[80vh]">
          <div className="hero-content">
            <h1 className="text-white mb-8 drop-shadow-lg animate-fade-up">Our Services</h1>
            <p className="text-xl text-white font-medium max-w-3xl mx-auto drop-shadow-md animate-fade-up-delay">Doorstep delivery, precision meat cutting & storage, and comprehensive groceries — all designed for your convenience.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-pad">
          <div className="text-center mb-16">
            <h2 className="text-black mb-4">What We Offer</h2>
            <p className="text-grey-dark text-lg max-w-2xl mx-auto">Professional services designed to make your life easier</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center stagger-1 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-amber text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse-slow">Most Popular</span>
              </div>
              <div className="text-amber mb-6 icon-bounce">
                <Truck size={64} className="mx-auto" />
              </div>
              <h3 className="text-amber mb-4">Doorstep Delivery</h3>
              <p>Experience the ease of receiving groceries and essentials right at your doorstep. Reliable delivery from orders of R500 and above.</p>
            </div>
            <div className="card text-center stagger-2">
              <div className="text-amber mb-6 icon-bounce">
                <Beef size={64} className="mx-auto" />
              </div>
              <h3 className="text-amber mb-4">Precision Meat Cutting & Storage</h3>
              <p>Bring your carcass for cold‑room storage and premium cuts at affordable prices.</p>
            </div>
            <div className="card text-center stagger-3">
              <div className="text-amber mb-6 icon-bounce">
                <ShoppingCart size={64} className="mx-auto" />
              </div>
              <h3 className="text-amber mb-4">Comprehensive Grocery Supplies</h3>
              <p>From pantry staples to daily essentials, our shelves are stocked with quality products.</p>
            </div>
          </div>
        </div>
      </section>
      <Section title="Benefits">
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6">
          <li>No more standing for hours waiting for transport.</li>
          <li>No more getting caught in the rain with heavy bags.</li>
          <li>No more long queues and exhausting trips.</li>
          <li>Pay for DSTV, electricity, and airtime in‑store. Swipe your SASSA card with ease.</li>
        </ul>
      </Section>
    </div>
  )
}
