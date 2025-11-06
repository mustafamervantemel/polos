import { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Star, Send, ArrowRight } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const Contact = () => {
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
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-brand-orange via-primary-500 to-primary-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
              <span className="text-brand-black">Kontakt</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Wir würden gerne von Ihnen hören. Besuchen Sie uns, rufen Sie an oder senden Sie uns eine Nachricht
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="reveal animate-slide-in-left">
              <div className="inline-block mb-6">
                <span className="bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  Kontaktinformationen
                </span>
              </div>
              <h2 className="text-5xl font-black text-brand-black mb-10">Kontaktieren Sie uns</h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: 'Adresse',
                    content: 'Bahnhofstrasse 123\n8001 Zürich, Schweiz',
                    color: 'from-brand-orange to-primary-600'
                  },
                  {
                    icon: Phone,
                    title: 'Telefon',
                    content: '+41 78 311 96 92',
                    subtitle: 'Für Reservierungen und Bestellungen über WhatsApp',
                    color: 'from-brand-orange to-primary-600'
                  },
                  {
                    icon: Mail,
                    title: 'E-Mail',
                    content: 'info@polos.ch',
                    subtitle: 'Wir antworten innerhalb von 24 Stunden',
                    color: 'from-brand-orange to-primary-600'
                  },
                  {
                    icon: Clock,
                    title: 'Öffnungszeiten',
                    content: 'Montag - Donnerstag: 11:00 - 22:00\nFreitag - Samstag: 11:00 - 23:00\nSonntag: 12:00 - 21:00',
                    color: 'from-brand-orange to-primary-600'
                  }
                ].map((item, index) => (
                  <div key={index} className="card-hover bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-brand-orange/30">
                    <div className="flex items-start space-x-4">
                      <div className={`bg-gradient-to-br ${item.color} p-4 rounded-xl shadow-lg flex-shrink-0`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-black text-brand-black mb-2">{item.title}</h3>
                        <p className="text-gray-700 font-medium whitespace-pre-line">{item.content}</p>
                        {item.subtitle && (
                          <p className="text-sm text-gray-500 mt-2">{item.subtitle}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reviews */}
              <div className="mt-12 reveal card-hover bg-gradient-to-br from-brand-orange/5 to-white rounded-2xl p-8 shadow-lg border border-brand-orange/20">
                <h3 className="text-2xl font-black text-brand-black mb-6">Was unsere Gäste sagen</h3>
                <div className="space-y-6">
                  {[
                    {
                      text: '"Großartiges Essen und außergewöhnlicher Service! Das Essen war perfekt zubereitet und die Atmosphäre ideal für ein romantisches Abendessen."',
                      author: 'Sarah M.'
                    },
                    {
                      text: '"Das beste Restaurant in der Stadt! Das Personal ist unglaublich freundlich und das Essen ist ständig perfekt."',
                      author: 'Thomas K.'
                    }
                  ].map((review, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex text-brand-orange mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-3 italic leading-relaxed">
                        {review.text}
                      </p>
                      <p className="text-sm font-bold text-brand-black">— {review.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="reveal animate-slide-in-right">
              <div className="sticky top-24">
                <h2 className="text-5xl font-black text-brand-black mb-8">Finden Sie uns</h2>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift group">
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-[500px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 mb-6 mx-auto w-24 h-24 flex items-center justify-center shadow-xl">
                        <MapPin className="h-12 w-12 text-brand-orange" />
                      </div>
                      <p className="text-gray-700 font-medium text-lg mb-2">Interaktive Karte</p>
                      <p className="text-sm text-gray-600 mb-6">
                        Bahnhofstrasse 123, 8001 Zürich, Schweiz
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href="https://maps.google.com/?q=Bahnhofstrasse+123+8001+Zürich+Schweiz"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center justify-center space-x-2"
                        >
                          <MapPin className="h-5 w-5" />
                          <span>In Google Maps öffnen</span>
                        </a>
                        <a
                          href="https://wa.me/41783119692"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center space-x-2"
                        >
                          <Phone className="h-5 w-5" />
                          <span>WhatsApp Bestellung</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-br from-brand-orange/5 via-white to-brand-orange/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-5xl font-black text-brand-black mb-6">
              Senden Sie uns eine <span className="gradient-text">Nachricht</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Haben Sie eine Frage oder möchten Sie eine Reservierung vornehmen? Wir würden gerne von Ihnen hören.
            </p>
          </div>

          <form className="reveal card-hover bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-brand-black mb-2">
                  Vollständiger Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all duration-300"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-brand-black mb-2">
                  E-Mail-Adresse
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all duration-300"
                  placeholder="ihre@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-bold text-brand-black mb-2">
                Betreff
              </label>
              <select
                id="subject"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all duration-300"
              >
                <option value="">Betreff auswählen</option>
                <option value="reservation">Reservierung</option>
                <option value="catering">Catering</option>
                <option value="feedback">Feedback</option>
                <option value="other">Anderes</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-bold text-brand-black mb-2">
                Nachricht
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all duration-300 resize-none"
                placeholder="Teilen Sie uns mit, wie wir Ihnen helfen können..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-5 text-lg flex items-center justify-center space-x-3 group"
            >
              <Send className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              <span>Nachricht senden</span>
            </button>
          </form>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Contact;
