import loyaltyCard from '../assets/loyaltycard.png'

export default function Promotions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with New Cover Image */}
      <section className="relative overflow-hidden bg-black min-h-[80vh]">
        <div className="absolute inset-0">
          <img
            src={loyaltyCard}
            alt="Loyalty rewards program"
            className="w-full h-full opacity-70 mobile-optimized-img"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
        </div>
        <div className="relative container-pad text-center flex items-center justify-center min-h-[80vh]">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Specials & <span style={{color: '#ffbe00'}}>Loyalty Rewards</span>
            </h1>
            <p className="text-2xl text-white mb-8 drop-shadow-lg font-light opacity-90">
              Monthly and mid‑month deals, plus a loyalty reward after 6 delivery orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/27724746047" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
                Start Earning Rewards
              </a>
              <a href="#promotions" className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white font-bold px-8 py-4 rounded-full border-2 border-white transition-all duration-300 transform hover:scale-105">
                View Current Deals
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Content */}
      <section id="promotions" className="py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container-pad">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#9b5f44'}}>Current Promotions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Save more with our exclusive deals and earn rewards for your loyalty</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Monthly & Mid-Month Promotions */}
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-2" style={{color: '#9b5f44'}}>Monthly & Mid‑Month Promotions</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start p-6 bg-yellow-50 rounded-xl">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2" style={{color: '#9b5f44'}}>Maize Meal Saver</h4>
                    <p className="text-gray-700">R20 off selected 10kg bags (while stocks last).</p>
                  </div>
                </div>
                <div className="flex items-start p-6 bg-yellow-50 rounded-xl">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2" style={{color: '#9b5f44'}}>Mid‑Month Essentials</h4>
                    <p className="text-gray-700">Bundle discount on sugar, oil, and tea.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Loyalty Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
              <div className="relative">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-yellow-400">Loyalty Rewards Program</h3>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4">How It Works:</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">1</div>
                      <span>Make 6 delivery orders</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">2</div>
                      <span>Get FREE delivery or discount</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">3</div>
                      <span>Start earning the next reward!</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-6">*Terms & conditions apply. Minimum order value required.</p>

                <a href="https://wa.me/27724746047" className="block w-full text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
                  Join Loyalty Program
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Info */}
      <section className="py-16 bg-white">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center" style={{color: '#9b5f44'}}>Store Info</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#ffbe00'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{color: '#9b5f44'}}>Hours</h3>
                <p className="text-gray-600">Mon–Sat 8:00–18:00 • Sun 9:00–15:00</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#ffbe00'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{color: '#9b5f44'}}>Delivery Minimum</h3>
                <p className="text-gray-600">R500.00</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#ffbe00'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{color: '#9b5f44'}}>Delivery Area</h3>
                <p className="text-gray-600">Delivery available within Makweleng Village & nearby areas. Call to confirm your street.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center" style={{color: '#9b5f44'}}>Terms & Conditions</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Minimum order for delivery: R500.00.</li>
                <li>Delivery area limited to Makweleng Village & nearby. Additional fee may apply outside radius.</li>
                <li>Free delivery reward applies after six (6) completed delivery orders under one customer name/number.</li>
                <li>Promotions are valid while stocks last and may change without notice.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="container-pad text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Earning Rewards?</h2>
          <p className="text-xl text-gray-300 mb-8">Order today and start your journey to free delivery</p>
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
