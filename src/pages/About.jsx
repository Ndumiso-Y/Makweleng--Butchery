
import Section from '../components/Section'
import womanGroceries from '../assets/womangroceries.jpg'

export default function About(){
  return (
    <div>
      {/* Hero Section with Woman Groceries Image */}
      <section className="relative overflow-hidden bg-black min-h-[80vh]">
        <div className="absolute inset-0">
          <img 
            src={womanGroceries} 
            alt="Woman with groceries - community focused service" 
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container-pad text-center flex items-center justify-center min-h-[80vh]">
          <div className="max-w-4xl">
            <h1 className="text-white mb-8 drop-shadow-lg">About Us</h1>
            <p className="text-xl text-white font-medium mb-12 drop-shadow-md">Makweleng Grocery, Butchery & Delivery is a family‑run business in Makweleng Village (Mabeskraal), Rustenburg.</p>
            
            <div className="bg-white bg-opacity-90 rounded-xl2 p-8 shadow-medium max-w-3xl mx-auto">
              <p className="text-lg text-grey-dark mb-6">For over a decade, we've served the community with basic grocery supplies, fresh high‑quality A‑grade meat, and doorstep delivery. We focus on convenience and dignity for pensioners and families — reducing long walks, queues, and heavy loads.</p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-amber text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">10+</span>
                  </div>
                  <div className="text-black font-semibold">Years Serving</div>
                </div>
                <div className="text-center">
                  <div className="bg-amber text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">500+</span>
                  </div>
                  <div className="text-black font-semibold">Families Served</div>
                </div>
                <div className="text-center">
                  <div className="bg-amber text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">R500</span>
                  </div>
                  <div className="text-black font-semibold">Min Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section title="What Makes Us Different">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="bg-amber text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-amber mb-2">Convenience‑First</h3>
            <p>Delivery designed to remove long walks, queues, and heavy loads.</p>
          </div>
          <div className="card text-center">
            <div className="bg-amber text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-amber mb-2">Community‑Focused</h3>
            <p>Especially supporting pensioners and families in our village.</p>
          </div>
          <div className="card text-center">
            <div className="bg-amber text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-amber mb-2">Family Network</h3>
            <p>Part of a family network of local businesses serving Makweleng.</p>
          </div>
        </div>
      </Section>
      <Section title="Mission, Vision & Values">
        <h3 className="mt-2">Mission</h3>
        <p>Create awareness and scale our delivery service so no one in the village is left behind.</p>
        <h3 className="mt-6">Vision</h3>
        <p>Quality supplies and fresh meat delivered to your door — comfort without leaving home.</p>
        <h3 className="mt-6">Values</h3>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Quality Excellence</li>
          <li>Customer‑Centric Service</li>
          <li>Community Care</li>
        </ul>
      </Section>
    </div>
  )
}
