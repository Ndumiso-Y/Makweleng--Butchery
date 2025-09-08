
import Section from '../components/Section'
import promos from '../data/promos.json'
import loyaltyImage from '../assets/loyalty.png'

export default function Promotions(){
  return (
    <div>
      {/* Hero Section with Loyalty Image */}
      <section className="relative overflow-hidden bg-black min-h-[80vh]">
        <div className="absolute inset-0">
          <img 
            src={loyaltyImage} 
            alt="Loyalty rewards program - Free delivery after 6 orders" 
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container-pad text-center flex items-center justify-center min-h-[80vh]">
          <div className="max-w-4xl">
            <h1 className="text-white mb-8 drop-shadow-lg">Specials & Loyalty Rewards</h1>
            <p className="text-xl text-white font-medium mb-12 drop-shadow-md">Monthly and mid‑month deals, plus a loyalty reward after 6 delivery orders.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-90 rounded-xl2 p-6 shadow-medium">
                <h3 className="text-black mb-4">Monthly & Mid‑Month Promotions</h3>
                <ul className="text-left list-disc pl-6 space-y-2">
                  {promos.monthly.map((p, i) => <li key={i} className="text-grey-dark"><span className="font-semibold text-black">{p.title}:</span> {p.desc}</li>)}
                </ul>
              </div>
              <div className="bg-white bg-opacity-90 rounded-xl2 p-6 shadow-medium">
                <h3 className="text-black mb-4">{promos.loyalty.headline}</h3>
                <p className="text-grey-dark">{promos.loyalty.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section title="Store Info">
        <ul className="space-y-2">
          <li><span className="font-semibold">Hours:</span> {promos.hours}</li>
          <li><span className="font-semibold">Delivery Minimum:</span> {promos.delivery.minimumOrder}</li>
          <li><span className="font-semibold">Delivery Area:</span> {promos.delivery.radiusNote}</li>
        </ul>
      </Section>

      <Section title="Terms & Conditions">
        <ol className="list-decimal pl-6 space-y-2">
          {promos.terms.map((t, i)=> <li key={i}>{t}</li>)}
        </ol>
      </Section>
    </div>
  )
}
