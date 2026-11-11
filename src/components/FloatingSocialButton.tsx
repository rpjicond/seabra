import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  X, 
  Share2, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Phone, 
  Mail 
} from 'lucide-react';

interface SocialLink {
  id: string;
  name: string;
  label: string;
  icon: typeof MessageCircle;
  href: string;
  color: string;
  hoverColor: string;
}

export default function FloatingSocialButton() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const phoneNumber = "33751241317";
  const whatsappMessage = "Bonjour, je souhaite obtenir plus d'informations sur vos services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const socialLinks: SocialLink[] = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      label: 'Discuter sur WhatsApp',
      icon: MessageCircle,
      href: whatsappUrl,
      color: 'bg-emerald-500 text-white',
      hoverColor: 'hover:bg-emerald-600',
    },
    {
      id: 'phone',
      name: 'Téléphone',
      label: '+33 7 51 24 13 17',
      icon: Phone,
      href: 'tel:+33751241317',
      color: 'bg-blue-600 text-white',
      hoverColor: 'hover:bg-blue-700',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      label: 'Suivre sur Instagram',
      icon: Instagram,
      href: 'https://instagram.com',
      color: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white',
      hoverColor: 'hover:opacity-90',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      label: 'Page Facebook',
      icon: Facebook,
      href: 'https://facebook.com',
      color: 'bg-blue-700 text-white',
      hoverColor: 'hover:bg-blue-800',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      label: 'Profil LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      color: 'bg-[#0077b5] text-white',
      hoverColor: 'hover:bg-[#006097]',
    },
    {
      id: 'email',
      name: 'Email',
      label: 'contact@edificar.fr',
      icon: Mail,
      href: 'mailto:contact@edificar.fr',
      color: 'bg-amber-600 text-white',
      hoverColor: 'hover:bg-amber-700',
    },
  ];

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Vertical list of social links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
            className="flex flex-col items-end gap-3 mb-3"
            role="menu"
            aria-orientation="vertical"
            aria-label="Réseaux sociaux et contact"
          >
            {socialLinks.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      delay: (socialLinks.length - 1 - index) * 0.04,
                      type: 'spring',
                      stiffness: 350,
                      damping: 25 
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: 10, 
                    scale: 0.8,
                    transition: { duration: 0.15 } 
                  }}
                  className="flex items-center gap-3 group"
                >
                  {/* Tooltip / Label */}
                  <span className="bg-slate-900/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg border border-slate-700/60 opacity-90 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none select-none">
                    {item.label}
                  </span>

                  {/* Circular Button */}
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={item.name}
                    role="menuitem"
                    className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 transform group-hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${item.color} ${item.hoverColor}`}
                    onClick={() => {
                      // small timeout so user sees feedback
                      setTimeout(() => setIsOpen(false), 200);
                    }}
                  >
                    <IconComponent size={22} className="shrink-0" />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={isOpen ? "Fermer le menu des réseaux sociaux" : "Ouvrir les réseaux sociaux"}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all duration-300 ${
          isOpen ? 'bg-slate-900 hover:bg-slate-800' : 'bg-emerald-500 hover:bg-emerald-600'
        }`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={26} strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle size={28} fill="white" className="text-emerald-500" />
              {/* Subtle badge indicator */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white border border-emerald-500"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
