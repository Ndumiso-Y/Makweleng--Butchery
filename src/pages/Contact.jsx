
import Section from '../components/Section'
import meatImage from '../assets/raw-meat-steaks-on-a-dark-background-ready-to-roas-2025-02-12-22-41-18-utc.jpg'

export default function Contact(){
  return (
    <div>
      {/* Hero Section with Meat Image */}
      <section className="relative overflow-hidden bg-black min-h-[80vh]">
        <div className="absolute inset-0">
          <img 
            src={meatImage} 
            alt="Fresh raw meat steaks ready for roasting" 
            className="w-full h-full object-cover object-center opacity-60"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container-pad text-center flex items-center justify-center min-h-[80vh]">
          <div className="max-w-5xl">
            <h1 className="text-white mb-8 drop-shadow-lg">Contact Us</h1>
            <p className="text-xl text-white font-medium mb-12 drop-shadow-md">Call or WhatsApp to order. We deliver to your doorstep for orders from R500 and above.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-90 rounded-xl2 p-6 shadow-medium">
                <h3 className="text-black mb-6">Get In Touch</h3>
                <div className="space-y-4 text-left">
                  <p><span className="font-semibold text-black">Address:</span> <span className="text-grey-dark">30465 Makweleng Section, Mabeskraal, 0313</span></p>
                  <p><span className="font-semibold text-black">Email:</span> <a className="text-amber hover:text-amber font-medium" href="mailto:info@makwelengroup.co.za">info@makwelengroup.co.za</a></p>
                  <p><span className="font-semibold text-black">Phone:</span> <a className="text-amber hover:text-amber font-medium" href="tel:+27724746047">072 474 6047</a> / <a className="text-amber hover:text-amber font-medium" href="tel:+27760114405">076 011 4405</a></p>
                  <p><span className="font-semibold text-black">Hours:</span> <span className="text-grey-dark">Mon–Sat 8:00–18:00 • Sun 9:00–15:00</span></p>
                </div>
              </div>
              <div className="bg-white bg-opacity-90 rounded-xl2 p-6 shadow-medium">
                <h3 className="text-black mb-6">Send Message</h3>
                <form className="space-y-4" action="#" method="post" aria-label="Contact form">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                    <input id="name" name="name" className="w-full rounded-xl2 border-grey-medium" placeholder="Your name" aria-label="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="contact">Phone or Email</label>
                    <input id="contact" name="contact" className="w-full rounded-xl2 border-grey-medium" placeholder="Contact detail" aria-label="Phone or email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                    <textarea id="message" name="message" className="w-full rounded-xl2 border-grey-medium" rows="3" placeholder="What do you need?" aria-label="Message"></textarea>
                  </div>
                  <button type="button" className="btn-primary w-full" aria-label="Send enquiry">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-20 bg-white">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="text-black mb-4">Find Us</h2>
            <p className="text-grey-dark text-lg">Located in Makweleng Village, Mabeskraal</p>
          </div>
          <div className="rounded-xl2 overflow-hidden shadow-medium">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.8946!2d27.25!3d-25.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM5JzAwLjAiUyAyN8KwMTUnMDAuMCJF!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Makweleng Butchery Location"
            ></iframe>
          </div>
          <div className="text-center mt-8">
            <p className="text-grey-dark mb-4">Can't find us? Call us for directions!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+27724746047" 
                className="btn-primary"
              >
                Call 072 474 6047
              </a>
              <a 
                href="https://wa.me/27724746047" 
                target="_blank" 
                rel="noreferrer"
                className="btn-outline"
              >
                WhatsApp for Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="whatsapp" className="bg-brown text-white py-12" aria-label="Order via WhatsApp">
        <div className="container-pad">
          <h2 className="text-amber">Order Today, Delivered to Your Doorstep</h2>
          <p className="mt-2 text-grayx-100">Minimum order R500. Free delivery after 6 orders (T&Cs apply).</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a className="btn-primary" href="https://wa.me/27724746047" target="_blank" rel="noreferrer">WhatsApp 072 474 6047</a>
            <a className="btn-outline" href="https://wa.me/27760114405" target="_blank" rel="noreferrer">WhatsApp 076 011 4405</a>
          </div>
        </div>
      </section>
    </div>
  )
}
