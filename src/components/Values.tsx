import { motion } from 'motion/react';
import { ShieldCheck, Award, Lightbulb, Leaf } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: "Sécurité",
    description: "La sécurité de nos équipes et de nos clients est notre priorité absolue. Nous respectons rigoureusement toutes les normes en vigueur.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20"
  },
  {
    icon: Award,
    title: "Qualité",
    description: "Nous nous engageons à livrer des ouvrages d'une qualité irréprochable, en utilisant les meilleurs matériaux et techniques.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/20"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous intégrons les dernières technologies de construction pour optimiser les délais, les coûts et la durabilité de nos projets.",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    borderColor: "border-amber-400/20"
  },
  {
    icon: Leaf,
    title: "Durabilité",
    description: "Nous construisons en pensant à l'avenir, en privilégiant des pratiques respectueuses de l'environnement et éco-responsables.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20"
  }
];

export default function Values() {
  return (
    <section id="values" className="py-24 bg-blue-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 L100 0 L100 100 Z" fill="white" />
            </svg>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-300 font-semibold tracking-wide uppercase text-sm mb-3">Nos Valeurs</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ce qui nous guide
          </h3>
          <p className="text-blue-100 text-lg">
            Nos principes fondamentaux sont au cœur de chaque décision et de chaque brique posée.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-blue-800/40 backdrop-blur-sm p-8 rounded-2xl border border-blue-700/50 hover:bg-blue-800/60 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-blue-900/20"
            >
              <div className={`w-16 h-16 ${value.bgColor} ${value.borderColor} border rounded-2xl flex items-center justify-center ${value.color} mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                <value.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">{value.title}</h4>
              <p className="text-blue-100 leading-relaxed text-sm group-hover:text-white transition-colors">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
