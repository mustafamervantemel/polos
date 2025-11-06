import { useEffect } from 'react';
import { Heart, Users, Award, Utensils, Sparkles } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const About = () => {
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
              Unsere <span className="text-brand-black">Geschichte</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Leidenschaft für Essen, Engagement für Exzellenz und die Liebe, Menschen zusammenzubringen
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal animate-slide-in-left">
              <div className="inline-block mb-6">
                <span className="bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  Unsere Mission
                </span>
              </div>
              <h2 className="text-5xl font-black text-brand-black mb-6 leading-tight">
                Die Geschichte von <span className="gradient-text">Polo's</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Die Geschichte von Polo's begann mit der Leidenschaft einer Familie für die Küche und 
                die Tradition der Gastfreundschaft. In der Schweiz eröffnet, wurde dieser Ort 
                mit der Zeit zu einem der beliebtesten Treffpunkte der Region.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Seit unserer Gründung haben wir uns darauf konzentriert, die reiche kulinarische 
                Vielfalt mit modernen Techniken zu kombinieren, um in jedem Gericht eine Geschichte zu erzählen. 
                Die Rezepte, die wir von unseren Vorfahren gelernt haben, werden heute mit einem zeitgemäßen Verständnis neu interpretiert.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Jeden Tag kommen unsere Gäste nicht nur zum Essen zu uns, sondern auch, 
                um Freundschaften zu schließen und schöne Erinnerungen zu sammeln. 
                Dieses Vertrauen ist das wertvollste Geschenk, das wir erhalten haben.
              </p>
            </div>
            <div className="reveal animate-slide-in-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift group">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Koch bereitet Essen zu"
                  className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-br from-brand-orange to-primary-600 rounded-full p-3">
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-black text-brand-black">Seit 2014</p>
                        <p className="text-sm text-gray-600">10 Jahre Exzellenz</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <h2 className="text-5xl font-black text-brand-black mb-6">
              Unsere <span className="gradient-text">Werte</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Diese Grundprinzipien leiten alles, was wir bei Polo's tun
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Leidenschaft',
                description: 'Wir stecken unser Herz in jedes Gericht, das wir kreieren',
                color: 'from-brand-orange to-primary-600'
              },
              {
                icon: Users,
                title: 'Gemeinschaft',
                description: 'Verbindungen durch gemeinsame Mahlzeiten schaffen',
                color: 'from-brand-orange to-primary-600'
              },
              {
                icon: Award,
                title: 'Exzellenz',
                description: 'Engagement für Qualität in jedem Detail',
                color: 'from-brand-orange to-primary-600'
              },
              {
                icon: Utensils,
                title: 'Tradition',
                description: 'Authentische Aromen und Techniken würdigen',
                color: 'from-brand-orange to-primary-600'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="reveal card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-brand-orange/30 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${value.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300`}>
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-brand-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-brand-orange/5 via-white to-brand-orange/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <h2 className="text-5xl font-black text-brand-black mb-6">
              Unser <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Die leidenschaftlichen Menschen, die Polo's besonders machen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: 'Hans Müller',
                role: 'Küchenchef',
                description: 'Mit 20 Jahren Küchenerfahrung bringt Hans authentische Aromen und innovative Techniken in jedes Gericht.',
                image: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Anna Schmid',
                role: 'Restaurantmanagerin',
                description: 'Anna sorgt dafür, dass sich jeder Gast willkommen fühlt und ein außergewöhnliches kulinarisches Erlebnis von Anfang bis Ende hat.',
                image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Peter Weber',
                role: 'Hauptsommelier',
                description: 'Peter kuratiert sorgfältig unsere Weinauswahl, die unsere Menüangebote perfekt ergänzt.',
                image: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((member, index) => (
              <div
                key={index}
                className="reveal card-hover bg-white rounded-3xl p-8 shadow-xl text-center border border-gray-100"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-2xl font-black text-brand-black mb-2">{member.name}</h3>
                <div className="inline-block bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-bold mb-4">
                  {member.role}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default About;
