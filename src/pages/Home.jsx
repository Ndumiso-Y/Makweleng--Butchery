
import Section from '../components/Section'
import { Link } from 'react-router-dom'
import poster from '../assets/raw-beef-steaks-2024-09-17-03-02-53-utc.jpg'
import { Truck, Beef, ShoppingCart, DollarSign, Gift, Star } from 'lucide-react'

export default function Home(){
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black min-h-[60vh] md:min-h-[70vh]" aria-label="Hero">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <img src={poster} alt="Fresh T-bone steak" className="w-full h-[60vh] md:h-[70vh] object-cover object-center" loading="eager" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-pad">
            <div className="max-w-2xl hero-content">
              <h1 className="text-white animate-fade-up text-3xl md:text-5xl">Fresh Meat. Groceries. Delivered.</h1>
              <p className="mt-6 text-lg md:text-xl text-white font-medium animate-fade-up-delay">A‑grade cuts, everyday essentials, and doorstep delivery for Makweleng Village — because your convenience is our priority.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
                <a href="#whatsapp" className="btn-primary animate-pulse-slow shadow-lg" aria-label="Order on WhatsApp">Order on WhatsApp</a>
                <Link to="/services" className="bg-white text-black px-6 py-3 rounded-xl2 font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg inline-flex items-center justify-center" aria-label="View our services">View Our Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Why Makweleng" title="Family‑Run. Community‑Driven." subtitle="Over a decade serving Makweleng with pride. We carry the load so you don't have to.">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card stagger-1">
            <div className="text-amber mb-4 icon-bounce">
              <Truck size={48} />
            </div>
            <h3 className="text-amber mb-2">Doorstep Delivery</h3>
            <p>Reliable delivery from orders of R500+. No more queues, no more heavy bags.</p>
          </div>
          <div className="card stagger-2">
            <div className="text-amber mb-4 icon-bounce">
              <Beef size={48} />
            </div>
            <h3 className="text-amber mb-2">Precision Meat Cutting</h3>
            <p>Cold‑room storage and premium cuts at affordable prices.</p>
          </div>
          <div className="card stagger-3">
            <div className="text-amber mb-4 icon-bounce">
              <ShoppingCart size={48} />
            </div>
            <h3 className="text-amber mb-2">One‑Stop Groceries</h3>
            <p>Staples, electricity & DSTV payments, airtime, and more.</p>
          </div>
        </div>
      </Section>

      <Section bg="dark" title="Juicy A‑Grade Meat, Perfect for Any Braai" subtitle="Sit‑in or takeaway — T‑bone cravings covered.">
        <div className="mt-8 animate-scale-in">
          <Link to="/buy-braai" className="btn-primary animate-bounce-soft">Explore Buy & Braai</Link>
        </div>
      </Section>

      <Section bg="amber" title="Save More with Makweleng" subtitle="Check monthly and mid‑month specials, plus loyalty rewards.">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card stagger-1">
            <div className="text-black mb-4 icon-bounce">
              <DollarSign size={48} />
            </div>
            <h3 className="mb-2">Monthly Specials</h3>
            <p>Promotions on essentials — updated regularly.</p>
          </div>
          <div className="card stagger-2">
            <div className="text-black mb-4 icon-bounce">
              <Gift size={48} />
            </div>
            <h3 className="mb-2">Loyalty Rewards</h3>
            <p>Free delivery after 6 orders (T&Cs apply).</p>
          </div>
        </div>
      </Section>

      <Section title="What Our Customers Say">
        <div className="grid md:grid-cols-3 gap-8">
          <blockquote className="card border-l-4 border-amber stagger-1">
            <div className="flex text-amber mb-3 animate-fade-in">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" className="icon-bounce" />
              ))}
            </div>
            <p className="italic">"Delivery changed my life — no more carrying heavy bags in the heat."</p>
            <footer className="mt-4 text-sm text-grey-medium font-medium">— Local Pensioner</footer>
          </blockquote>
          <blockquote className="card border-l-4 border-amber stagger-2">
            <div className="flex text-amber mb-3 animate-fade-in">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" className="icon-bounce" />
              ))}
            </div>
            <p className="italic">"Best T‑bone around. Juicy, fresh, and affordable."</p>
            <footer className="mt-4 text-sm text-grey-medium font-medium">— Community Member</footer>
          </blockquote>
          <blockquote className="card border-l-4 border-amber stagger-3">
            <div className="flex text-amber mb-3 animate-fade-in">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" className="icon-bounce" />
              ))}
            </div>
            <p className="italic">"Friendly staff, fast service, and great prices."</p>
            <footer className="mt-4 text-sm text-grey-medium font-medium">— Regular Customer</footer>
          </blockquote>
        </div>
      </Section>

      <section id="whatsapp" className="bg-black text-white py-16" aria-label="Order via WhatsApp">
        <div className="container-pad text-center">
          <h2 className="text-amber animate-fade-up">Order Today, Delivered to Your Doorstep</h2>
          <p className="mt-6 text-xl text-grey-light animate-fade-up-delay">Minimum order R500. Free delivery after 6 orders (T&Cs apply).</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
            <a className="btn-primary animate-pulse-slow" href="https://wa.me/27724746047" target="_blank" rel="noreferrer">WhatsApp 072 474 6047</a>
            <a className="btn-outline text-white border-white hover:text-black" href="https://wa.me/27760114405" target="_blank" rel="noreferrer">WhatsApp 076 011 4405</a>
          </div>
        </div>
      </section>
    </div>
  )
}
