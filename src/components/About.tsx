import { motion } from 'motion/react';
import { CheckCircle, Users, Clock, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
                alt="Chantier de construction" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop" 
                alt="Architecte au travail" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            {/* New Company Badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-3xl font-display font-bold">Nouvelle</p>
              <p className="text-sm font-medium uppercase tracking-wider">Génération</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">À Propos de Nous</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              R.SEABRA : Votre Nouveau Partenaire de Confiance en Construction
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Récemment fondée cette année sur des valeurs de rigueur et d'innovation, R.SEABRA est une entreprise de construction générale dynamique basée à Commentry. Nous apportons une vision moderne et un savoir-faire actualisé à vos projets de construction neuve, de rénovation ou d'extension.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Notre équipe de professionnels passionnés s'engage à réaliser vos ambitions architecturales avec précision, en respectant les délais et votre budget. En tant que jeune entreprise, chaque projet est pour nous une opportunité de démontrer notre détermination et notre passion pour le travail bien fait.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-slate-900">Expertise Moderne</h4>
                  <p className="text-sm text-slate-500">Maîtrise des dernières normes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-slate-900">Équipe Dynamique</h4>
                  <p className="text-sm text-slate-500">Professionnels motivés.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-slate-900">Respect des Délais</h4>
                  <p className="text-sm text-slate-500">Planification rigoureuse.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-slate-900">Satisfaction Client</h4>
                  <p className="text-sm text-slate-500">Notre objectif premier.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
