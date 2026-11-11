import { motion } from 'motion/react';
import { ArrowRight, HardHat, Ruler, BrickWall, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
          alt="Construction Site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 mb-6 backdrop-blur-sm">
              <HardHat size={16} />
              <span className="text-sm font-medium uppercase tracking-wider">Excellence en Construction</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
              Construire l'<span className="text-blue-400">Avenir</span> avec Solidité.
            </h1>
            
            <p className="text-lg text-slate-200 mb-8 max-w-xl leading-relaxed">
              Nous transformons vos projets en réalité avec une ingénierie de pointe, 
              des matériaux de haute qualité et un engagement indéfectible envers les délais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-blue-950 bg-white rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900"
              >
                Démarrer un Projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-white/20 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
              >
                Voir le Portfolio
              </a>
            </div>
          </motion.div>

          {/* Floating Cards / Visual Elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 transform hover:-translate-y-2 transition-transform duration-300">
                  <Ruler className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Planification</h3>
                  <p className="text-blue-100 text-sm">Projets détaillés et précis pour votre chantier.</p>
                </div>
                <div className="bg-blue-600 p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                  <BrickWall className="w-10 h-10 text-white mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Exécution</h3>
                  <p className="text-blue-100 text-sm">Main-d'œuvre qualifiée et matériaux premium.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                  <Truck className="w-10 h-10 text-blue-900 mb-4" />
                  <h3 className="text-xl font-bold text-blue-950 mb-2">Logistique</h3>
                  <p className="text-slate-600 text-sm">Gestion efficace des ressources et des délais.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                  <h3 className="text-xl font-bold text-white mb-2">Engagement</h3>
                  <p className="text-blue-100 text-sm">Une vision moderne et dynamique pour vos chantiers.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
