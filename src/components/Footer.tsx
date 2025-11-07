import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gradient-to-br from-brand-black to-gray-900 text-white py-12 border-t border-brand-orange/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-12 mb-8">
        {/* Brand Section */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img 
              src="/assets/polos-logo.png" 
              alt="Polo's Logo" 
              className="h-12 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== '/assets/logo.svg') {
                  target.src = '/assets/logo.svg';
                }
              }}
            />
          </div>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Authentische Aromen, moderne Präsentation und unvergessliche Atmosphäre.
          </p>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="bg-white/10 hover:bg-brand-orange p-3 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="bg-white/10 hover:bg-brand-orange p-3 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-black text-brand-orange mb-6">Kontakt</h3>
          <div className="space-y-4">
            <a 
              href="https://wa.me/41783119692" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-brand-orange transition-colors duration-300 group"
            >
              <div className="bg-brand-orange/20 p-2 rounded-lg mr-3 group-hover:bg-brand-orange transition-colors duration-300">
                <Phone className="h-4 w-4" />
              </div>
              <span>078 311 96 92</span>
            </a>
            <a 
              href="mailto:info@polos.ch" 
              className="flex items-center text-gray-300 hover:text-brand-orange transition-colors duration-300 group"
            >
              <div className="bg-brand-orange/20 p-2 rounded-lg mr-3 group-hover:bg-brand-orange transition-colors duration-300">
                <Mail className="h-4 w-4" />
              </div>
              <span>info@polos.ch</span>
            </a>
            <a
              href="https://share.google/WcW2mhMCDkJ38hQ43"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start text-gray-300 hover:text-brand-orange transition-colors duration-300 group"
            >
              <div className="bg-brand-orange/20 p-2 rounded-lg mr-3 group-hover:bg-brand-orange transition-colors duration-300 mt-1">
                <MapPin className="h-4 w-4" />
              </div>
              <span>Gotthardstrasse 18<br />8800 Thalwil, Schweiz</span>
            </a>
          </div>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-black text-brand-orange mb-6">Öffnungszeiten</h3>
          <div className="space-y-2 text-gray-300">
            <p>Montag - Donnerstag</p>
            <p className="text-brand-orange font-bold mb-4">11:00 - 22:00</p>
            <p>Freitag - Samstag</p>
            <p className="text-brand-orange font-bold mb-4">11:00 - 23:00</p>
            <p>Sonntag</p>
            <p className="text-brand-orange font-bold">12:00 - 21:00</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Polo's. Alle Rechte vorbehalten.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="/about" className="text-gray-400 hover:text-brand-orange text-sm transition-colors duration-300">
            Über uns
          </a>
          <a href="/menu" className="text-gray-400 hover:text-brand-orange text-sm transition-colors duration-300">
            Menü
          </a>
          <a href="/contact" className="text-gray-400 hover:text-brand-orange text-sm transition-colors duration-300">
            Kontakt
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
