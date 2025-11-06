import { useState, useEffect } from 'react';
import { Clock, Sparkles } from 'lucide-react';
import { useMenu } from '../contexts/MenuContext';

const Menu = () => {
  const { menuItems } = useMenu();
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [filteredItems, setFilteredItems] = useState(menuItems);

  const categories = ['Alle', ...new Set(menuItems.map(item => item.category))];

  useEffect(() => {
    if (selectedCategory === 'Alle') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory, menuItems]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredItems]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-orange via-primary-500 to-primary-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
              Unser <span className="text-brand-black">Menü</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Entdecken Sie unsere sorgfältig kreierten Gerichte, zubereitet mit hochwertigsten Zutaten
            </p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12 md:py-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16 reveal">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-brand-orange text-white shadow-xl shadow-brand-orange/50 scale-105'
                    : 'bg-white text-brand-black border-2 border-gray-200 hover:border-brand-orange hover:shadow-lg'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="reveal card-hover bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {!item.available && (
                    <div className="absolute inset-0 bg-brand-black/80 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-white font-bold bg-red-600 px-6 py-3 rounded-xl text-sm shadow-xl">
                        Nicht verfügbar
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                      <Sparkles className="h-5 w-5 text-brand-orange" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  {/* Title and Price */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl md:text-2xl font-black text-brand-black leading-tight flex-1">
                      {item.name}
                    </h3>
                    <div className="flex items-center text-brand-orange font-black text-2xl ml-4">
                      <span>CHF {item.price.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-base mb-6 leading-relaxed min-h-[60px]">
                    {item.description}
                  </p>
                  
                  {/* Preparation Time */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-gray-500">
                      <div className="bg-brand-orange/10 p-2 rounded-lg mr-3">
                        <Clock className="h-5 w-5 text-brand-orange" />
                      </div>
                      <span className="font-semibold">{item.preparationTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 reveal">
              <div className="inline-block bg-brand-orange/10 p-6 rounded-full mb-6">
                <Sparkles className="h-12 w-12 text-brand-orange" />
              </div>
              <p className="text-xl text-gray-600 font-medium">
                Keine Produkte in dieser Kategorie gefunden.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;
