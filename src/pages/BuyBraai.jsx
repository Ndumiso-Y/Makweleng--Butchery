
import Section from '../components/Section'
import poster from '../assets/raw-beef-steaks-2024-09-17-03-02-53-utc.jpg'

export default function BuyBraai(){
  return (
    <div>
      <Section title="Buy & Braai" subtitle="A‑grade, juicy T‑bone and fresh cuts for sit‑in braai or takeaway.">
        <div className="rounded-xl2 overflow-hidden shadow-medium bg-black">
          <div className="relative aspect-video">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/yep3t_VE1IM?autoplay=1&mute=1&loop=1&playlist=yep3t_VE1IM"
              title="T-bone Steak Sizzling on Grill - Makweleng Butchery"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-6 text-center bg-grey-light">
            <h3 className="text-amber mb-2">Sizzling T-Bone Perfection</h3>
            <p>Watch our premium cuts cook to perfection on the grill</p>
          </div>
        </div>
      </Section>
    </div>
  )
}
