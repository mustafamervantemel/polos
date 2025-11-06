import { Phone, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="relative py-20 bg-gradient-to-br from-brand-orange via-primary-500 to-primary-600 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-2xl">
            Bereit für ein großartiges kulinarisches Erlebnis?
          </h2>
          <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
            Bestellen Sie über WhatsApp oder rufen Sie uns für Reservierungen an
          </p>
          <a
            href="https://wa.me/41783119692"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-3 bg-[#25D366] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#20BA5A] transition-all duration-300 shadow-2xl hover:shadow-[#25D366]/50 hover:scale-105"
          >
            <div className="bg-white/20 rounded-full p-2 group-hover:rotate-12 transition-transform duration-300">
              <Phone className="h-6 w-6" />
            </div>
            <span>WhatsApp Bestellung: +41 78 311 96 92</span>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
