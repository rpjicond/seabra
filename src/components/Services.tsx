import { motion } from 'motion/react';
import { Home, Building2, Factory, Hammer, PaintBucket, Wrench } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Résidentiel",
    description: "Construction de maisons haut de gamme, copropriétés et rénovations résidentielles aux finitions impeccables."
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Bâtiments d'entreprise, magasins et bureaux conçus pour la fonctionnalité et l'esthétique moderne."
  },
  {
    icon: Factory,
    title: "Industriel",
    description: "Entrepôts, usines et infrastructures lourdes respectant des normes de sécurité strictes."
  },
  {
    icon: Hammer,
    title: "Rénovations",
    description: "Revitalisation complète d'espaces, modernisation de structures et extensions."
  },
  {
    icon: PaintBucket,
    title: "Finitions",
    description: "Services de peinture, revêtements, plâtrerie et décoration intérieure."
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Maintenance préventive et corrective pour garantir la longévité de votre bien."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Nos Services</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
            Solutions Complètes en Ingénierie
          </h3>
          <p className="text-slate-600 text-lg">
            Des fondations aux finitions, nous offrons l'excellence technique et une gestion efficace pour tous types de travaux.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
