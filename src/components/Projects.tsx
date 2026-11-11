import { motion } from 'motion/react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Résidence Vue Azur",
    category: "Résidentiel",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop",
    location: "Nice, France"
  },
  {
    id: 2,
    title: "Complexe Horizon",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1541888086925-0c13322558f1?q=80&w=2070&auto=format&fit=crop",
    location: "Paris, La Défense"
  },
  {
    id: 3,
    title: "Centre Commercial Nord",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop",
    location: "Lyon, France"
  },
  {
    id: 4,
    title: "Manoir du Lac",
    category: "Résidentiel",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop",
    location: "Annecy, France"
  },
  {
    id: 5,
    title: "Centre Logistique Alpha",
    category: "Industriel",
    image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=2079&auto=format&fit=crop",
    location: "Marseille, France"
  },
  {
    id: 6,
    title: "Rénovation Loft Urbain",
    category: "Intérieurs",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
    location: "Bordeaux, France"
  }
];

const categories = ["Tous", "Résidentiel", "Commercial", "Industriel", "Intérieurs"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Des Réalisations qui Inspirent
            </h3>
            <p className="text-slate-600">
              Découvrez certains de nos projets récents et la qualité que nous livrons.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Catégories de projets">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                aria-controls={`projects-panel-${cat}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                  activeCategory === cat
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-blue-300 text-sm font-medium mb-1">{project.category}</span>
                <h4 className="text-white text-xl font-bold mb-1">{project.title}</h4>
                <p className="text-slate-300 text-sm flex items-center gap-1">
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
