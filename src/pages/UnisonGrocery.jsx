import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, ShoppingBasket } from 'lucide-react'
import Section from '../components/Section'
import { groceryItems } from '../data/groceryItems'

export default function UnisonGrocery() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(groceryItems.map(item => item.category))]

  const filteredItems = useMemo(() => {
    return groceryItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <>
      <Section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <ShoppingBasket className="w-16 h-16 text-rusty" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-rusty to-orange-600 bg-clip-text text-transparent">
            Unison Grocery
          </h1>
          <p className="text-xl text-brew leading-relaxed">
            Browse our comprehensive grocery catalogue with competitive prices.
            Find everything you need for your home, delivered right to your doorstep.
          </p>
        </motion.div>
      </Section>

      <Section className="bg-white py-16">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brew w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-chai rounded-full focus:outline-none focus:border-rusty transition-colors text-brew"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-rusty text-white shadow-lg'
                      : 'bg-chai/20 text-brew hover:bg-chai/40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-brew font-semibold">
              {filteredItems.length} {filteredItems.length === 1 ? 'product' : 'products'} found
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-chai/30 hover:border-rusty/50"
              >
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-xs font-bold text-rusty bg-orange-100 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-mocha mb-2">
                    {item.name}
                  </h3>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-2xl font-black text-rusty">
                        R{item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <ShoppingBasket className="w-16 h-16 text-chai mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brew mb-2">No products found</h3>
              <p className="text-roast">Try adjusting your search or filter</p>
            </div>
          )}

          {/* Order CTA */}
          <div className="mt-16 bg-gradient-to-r from-rusty to-orange-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Order?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us on WhatsApp to place your order and we'll deliver to your doorstep!
            </p>
            <a
              href="https://wa.me/27766386581"
              className="inline-flex items-center bg-white text-rusty font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.251"/>
              </svg>
              Order on WhatsApp
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
