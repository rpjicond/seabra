import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    title: "Chantier en Cours"
  },
  {
    url: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop",
    title: "Structure en Béton"
  },
  {
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    title: "Travaux de Fondation"
  },
  {
    url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
    title: "Construction de Structure"
  },
  {
    url: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=2064&auto=format&fit=crop",
    title: "Gros Œuvre"
  },
  {
    url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
    title: "Charpente Métallique"
  },
  {
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop",
    title: "Développement Urbain"
  },
  {
    url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    title: "Ingénierie sur Site"
  }
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0
  })
};

export default function Gallery() {
  const [page, setPage] = useState([0, 0]);
  const [currentIndex, direction] = page;

  // Handle auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]); // Reset timer on index change

  const paginate = (newDirection: number) => {
    const newIndex = (currentIndex + newDirection + images.length) % images.length;
    setPage([newIndex, newDirection]);
  };

  // Calculate absolute index for images array
  const imageIndex = Math.abs(currentIndex % images.length);
  const currentImage = images[imageIndex];

  return (
    <section id="gallery" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">Notre Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Galerie de Réalisations
          </h3>
        </div>

        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group bg-slate-800">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0"
            >
              <img
                src={currentImage.url}
                alt={currentImage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <motion.h4 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-3xl font-bold text-white"
                >
                  {currentImage.title}
                </motion.h4>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white z-10"
            aria-label="Image précédente"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white z-10"
            aria-label="Image suivante"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 right-8 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const direction = index > imageIndex ? 1 : -1;
                  setPage([index, direction]);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === imageIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
