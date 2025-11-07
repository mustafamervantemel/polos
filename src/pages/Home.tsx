import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin, ChefHat, Sparkles, Award, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import { useMenu } from '../contexts/MenuContext';

const Home = () => {
  const { menuItems } = useMenu();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Get most popular items
  const mostPopularItems = menuItems.filter(item => item.isMostPopular && item.available);
  const itemsToShow = mostPopularItems.length > 0 ? mostPopularItems : menuItems.filter(item => item.available).slice(0, 4);
  const itemsPerPage = 4;
  const maxIndex = Math.max(0, itemsToShow.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

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
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/60 to-brand-black/70" />
        <div className="absolute inset-0 bg-brand-orange/10" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 flex flex-col items-center animate-fade-in-up">
          <div className="flex items-center justify-center mb-6 animate-float">
            <div className="bg-white rounded-full p-4 shadow-2xl hover-glow">
              <img 
                src="/assets/polos-logo.png" 
                alt="Polo's Logo" 
                className="h-20 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== '/assets/logo.svg') {
                    target.src = '/assets/logo.svg';
                  }
                }}
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">
            <span className="block text-brand-orange mb-2">Willkommen bei</span>
            <span className="block text-white">Polo's</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl drop-shadow-lg">
            Authentische Aromen, moderne Präsentation und unvergessliche Atmosphäre.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Link
              to="/menu"
              className="group btn-primary text-lg px-10 py-4 rounded-xl font-bold tracking-wide inline-flex items-center justify-center space-x-2"
            >
              <span>Menü ansehen</span>
              <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            </Link>
            <Link
              to="/about"
              className="btn-secondary text-lg px-10 py-4 rounded-xl font-bold tracking-wide inline-flex items-center justify-center space-x-2"
            >
              <span>Unsere Geschichte</span>
              <ChefHat className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <h2 className="text-5xl font-black text-brand-black mb-6">
              Warum <span className="gradient-text">Polo's</span> wählen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Wir kombinieren traditionelle Rezepte mit modernen Techniken, um unvergessliche Geschmackserlebnisse zu schaffen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: ChefHat,
                title: 'Expertenköche',
                description: 'Unsere talentierten Köche bringen jahrelange Erfahrung und Leidenschaft in jedes Gericht',
                color: 'from-brand-orange to-primary-600'
              },
              {
                icon: Clock,
                title: 'Täglich frisch',
                description: 'Alle Zutaten werden täglich frisch geliefert, um höchste Qualität zu gewährleisten',
                color: 'from-brand-orange to-primary-600'
              },
              {
                icon: Star,
                title: '5-Sterne-Service',
                description: 'Außergewöhnlicher Service, der jeden Besuch unvergesslich macht',
                color: 'from-brand-orange to-primary-600'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="reveal card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-brand-orange/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Info */}
      <section className="py-24 bg-gradient-to-br from-brand-orange/5 via-white to-brand-orange/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal animate-slide-in-left">
              <div className="inline-block mb-4">
                <span className="bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  Premium Experience
                </span>
              </div>
              <h2 className="text-5xl font-black text-brand-black mb-6 leading-tight">
                Erstklassiges kulinarisches Erlebnis
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Polo's, im Herzen der Stadt gelegen, bietet eine elegante Atmosphäre, 
                perfekt für romantische Abendessen, Familienfeiern oder Geschäftstreffen.
              </p>
              
              <div className="space-y-5 mb-10">
                {[
                  { icon: MapPin, text: 'Gotthardstrasse 18, 8800 Thalwil' },
                  { icon: Clock, text: 'Täglich geöffnet: 11:00 - 22:00' },
                  { icon: Star, text: '4.9/5 Sterne • 500+ Bewertungen' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="bg-brand-orange/10 p-3 rounded-lg group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
                      <item.icon className="h-6 w-6 text-brand-orange group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
              >
                <MapPin className="h-5 w-5" />
                <span>Wegbeschreibung</span>
              </Link>
            </div>
            
            <div className="reveal animate-slide-in-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift group">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent z-10" />
                <img
                  src="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Restaurant Innenraum"
                  className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center space-x-4">
                      <div className="bg-brand-orange rounded-full p-3">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-brand-black">Ausgezeichnet</p>
                        <p className="text-sm text-gray-600">Beste Gastronomie 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Items Section */}
      {itemsToShow.length > 0 && (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12 reveal">
              <div>
                <h2 className="text-5xl font-black text-brand-black mb-2">
                  Unsere <span className="gradient-text">Spezialitäten</span>
                </h2>
                <div className="h-1 w-24 bg-brand-orange rounded-full"></div>
              </div>
              {itemsToShow.length > itemsPerPage && (
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="bg-white hover:bg-brand-orange text-gray-700 hover:text-white p-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
                    aria-label="Vorherige"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-brand-orange hover:bg-primary-600 text-white p-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Nächste"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              )}
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
              >
                {itemsToShow.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 group card-hover flex flex-col h-full">
                      <div className="relative overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4">
                          <div className="bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            CHF {item.price.toFixed(2)}
                          </div>
                        </div>
                        {item.isMostPopular && (
                          <div className="absolute top-4 left-4">
                            <div className="bg-gradient-to-r from-brand-orange to-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                              Meist gewählt
                            </div>
                          </div>
                        )}
                        <div className="absolute bottom-4 left-4 flex items-center gap-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <span className="text-white text-sm font-bold ml-2 drop-shadow-lg">(5.00)</span>
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-black text-brand-black mb-3">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed min-h-[3rem]">
                          {item.description}
                        </p>
                        <div className="mt-auto">
                          <a
                            href="https://wa.me/41783119692"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-gradient-to-r from-brand-orange to-primary-600 text-white px-6 py-3 rounded-xl font-bold hover:from-primary-600 hover:to-brand-orange transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center space-x-2"
                          >
                            <Phone className="h-5 w-5" />
                            <span>Jetzt bestellen</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-brand-orange to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Zufriedene Gäste' },
              { number: '4.9', label: 'Sterne Bewertung' },
              { number: '50+', label: 'Gerichte' },
              { number: '10+', label: 'Jahre Erfahrung' }
            ].map((stat, index) => (
              <div key={index} className="reveal">
                <div className="text-5xl font-black mb-2">{stat.number}</div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Access Section */}
     

      <CallToAction />
    </div>
  );
};

export default Home;
