import { Logo } from './Logo';
import { Facebook, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="w-10 h-10 text-white" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white tracking-tight leading-none">
                  R.SEABRA
                </span>
                <span className="text-[10px] text-blue-400 font-medium tracking-wider uppercase">
                  Construction Générale
                </span>
              </div>
            </div>
            <p className="max-w-sm mb-6">
              Engagement envers la qualité et la satisfaction de nos clients. 
              Construire des rêves et édifier l'avenir avec solidité et confiance.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-1">
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-1">
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-1">
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-1">
                <Twitter size={20} aria-hidden="true" />
              </a>
              <a href="https://wa.me/33751241317?text=Bonjour,%20je%20souhaite%20obtenir%20plus%20d'informations%20sur%20vos%20services." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-1">
                <MessageCircle size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">À Propos</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projets</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Résidentiel</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Commercial</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Industriel</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Rénovations</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} R.SEABRA. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Conditions d'Utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
