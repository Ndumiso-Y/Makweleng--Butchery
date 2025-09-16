import assortedMeat from '../assets/raw-meat-steaks-on-a-dark-background-ready-to-roas-2025-02-12-22-41-18-utc.jpg'
import tBonePortrait from '../assets/raw-beef-steaks-2024-09-17-03-02-53-utc.jpg'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with New Cover Image */}
      <section className="relative overflow-hidden bg-black min-h-[80vh]">
        <div className="absolute inset-0">
          <img
            src={assortedMeat}
            alt="Premium assorted meat cuts"
            className="w-full h-full opacity-75 contact-image-mobile"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
        </div>


        <div className="relative container-pad text-center flex items-center justify-center min-h-[80vh]">
          <div className="max-w-5xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
              Contact <span style={{color: '#ffbe00'}}>Us</span>
            </h1>
            <p className="text-2xl mb-8 drop-shadow-lg font-light opacity-90">
              Call or WhatsApp to order. We deliver to your doorstep for orders from R500 and above.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/27724746047" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.251"/>
                </svg>
                <span>WhatsApp Order</span>
              </a>
              <a href="tel:0724746047" className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white font-bold px-8 py-4 rounded-full border-2 border-white transition-all duration-300 transform hover:scale-105">
                Call Direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="py-16 relative">
        <div className="container-pad">
          {/* Portrait Image positioned elegantly */}
          <div className="absolute top-8 right-8 hidden lg:block z-10">
            <div className="bg-white bg-opacity-95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src={tBonePortrait}
                alt="Premium T-bone steak"
                className="w-28 h-40 object-cover rounded-xl"
                loading="lazy"
              />
              <div className="text-center mt-2">
                <p className="text-xs font-semibold text-gray-700">Premium T-bone</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-8" style={{color: '#9b5f44'}}>Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#ffbe00'}}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg" style={{color: '#9b5f44'}}>Address</h3>
                    <p className="text-gray-600">30465 Makweleng Section, Mabeskraal, 0313</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#ffbe00'}}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg" style={{color: '#9b5f44'}}>Email</h3>
                    <p className="text-gray-600">info@makwelengroup.co.za</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#ffbe00'}}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg" style={{color: '#9b5f44'}}>Phone</h3>
                    <p className="text-gray-600">072 474 6047 / 076 011 4405</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#ffbe00'}}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg" style={{color: '#9b5f44'}}>Hours</h3>
                    <p className="text-gray-600">Mon–Sat 8:00–18:00 • Sun 9:00–15:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-8" style={{color: '#9b5f44'}}>Send Message</h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone or Email</label>
                  <input
                    type="text"
                    placeholder="Contact detail"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="4"
                    placeholder="What do you need?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-center"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center" style={{color: '#9b5f44'}}>Find Us</h2>

            {/* Interactive Map */}
            <div className="rounded-lg h-96 mb-8 overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.7!2d27.2!3d-25.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMakweleng%2C+Mabeskraal%2C+0313!5e0!3m2!1sen!2sza!4v1"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Makweleng Butchery Location"
              />
            </div>

            {/* Can't Find Us */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4" style={{color: '#9b5f44'}}>Can't find us? Call us for directions!</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:0724746047" className="btn-primary">
                  Call 072 474 6047
                </a>
                <a href="https://wa.me/27724746047" className="btn-secondary" style={{color: '#9b5f44', borderColor: '#9b5f44'}}>
                  WhatsApp for Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="container-pad text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Order Today, Delivered to Your Doorstep</h2>
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
