import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChefHat, Settings } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if logo exists - try PNG first, then SVG
    const img = new Image();
    img.src = '/assets/polos-logo.png';
    img.onload = () => setLogoLoaded(true);
    img.onerror = () => {
      // Try SVG as fallback
      const svgImg = new Image();
      svgImg.src = '/assets/logo.svg';
      svgImg.onload = () => setLogoLoaded(true);
      svgImg.onerror = () => setLogoError(true);
    };
  }, []);

  const navigation = [
    { name: 'Startseite', href: '/' },
    { name: 'Über uns', href: '/about' },
    { name: 'Menü', href: '/menu' },
    { name: 'Kontakt', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-brand-orange shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {/* Polo's Logo */}
            {logoLoaded && !logoError ? (
              <img 
                src="/assets/polos-logo.png" 
                alt="Polo's Logo" 
                className="h-28 w-auto"
                onError={(e) => {
                  // Fallback to SVG if PNG fails
                  const target = e.target as HTMLImageElement;
                  if (target.src !== '/assets/logo.svg') {
                    target.src = '/assets/logo.svg';
                  } else {
                    setLogoError(true);
                  }
                }}
              />
            ) : (
              <ChefHat className="h-12 w-12 text-white" />
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-white border-b-2 border-white font-semibold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-3">
              <Link
                to="/admin/login"
                className="flex items-center space-x-2 bg-white/20 text-white px-3 py-2 rounded-lg hover:bg-white/30 transition-colors duration-200 text-sm backdrop-blur-sm"
              >
                <Settings className="h-4 w-4" />
                <span>Verwaltung</span>
              </Link>
              <a
                href="https://wa.me/41783119692"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-brand-black text-white px-4 py-2 rounded-lg hover:bg-brand-black/90 transition-colors duration-200 shadow-md"
              >
                <Phone className="h-4 w-4" />
                <span>WhatsApp Bestellung</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/80 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-brand-orange border-t border-white/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-white bg-white/20 font-semibold'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mx-3 mt-4 space-y-2">
                <Link
                  to="/admin/login"
                  className="flex items-center space-x-2 bg-white/20 text-white px-3 py-2 rounded-md hover:bg-white/30 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Settings className="h-4 w-4" />
                  <span>Verwaltung</span>
                </Link>
                <a
                  href="https://wa.me/41783119692"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-brand-black text-white px-3 py-2 rounded-md hover:bg-brand-black/90 transition-colors duration-200"
                >
                  <Phone className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;