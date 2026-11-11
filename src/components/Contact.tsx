import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-blue-950 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">Contactez-nous</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Donnons vie à votre projet
            </h3>
            <p className="text-blue-100 text-lg mb-12 leading-relaxed">
              Contactez-nous pour demander un devis ou planifier une visite technique. 
              Notre équipe est prête à vous aider.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-800/50 p-3 rounded-lg">
                  <Phone className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Téléphone</h4>
                  <p className="text-blue-200">+33 1 23 45 67 89</p>
                  <p className="text-blue-200">+33 6 12 34 56 78</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-800/50 p-3 rounded-lg">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-blue-200">contact@edificar.fr</p>
                  <p className="text-blue-200">devis@edificar.fr</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-800/50 p-3 rounded-lg">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Bureau</h4>
                  <p className="text-blue-200">19 Rue Pasteur</p>
                  <p className="text-blue-200">03600 Commentry, France</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">
            <h4 className="text-2xl font-bold mb-6">Envoyer un message</h4>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="01 23 45 67 89"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-slate-700">Service Intéressé</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="residencial">Construction Résidentielle</option>
                  <option value="comercial">Construction Commerciale</option>
                  <option value="reforma">Rénovation</option>
                  <option value="outro">Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  placeholder="Décrivez votre projet..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Envoyer le Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
