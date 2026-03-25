import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: 'hero' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Certifications', href: 'certifications' },
  { name: 'Achievements', href: 'achievements' },
  { name: 'Resume', href: 'resume' },
  { name: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const scrollPosition = window.scrollY + 200; // offset
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.href);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          if (elementPosition <= scrollPosition) {
            setActiveItem(item.name);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href, name) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - 80, // offset for sticky nav
        behavior: 'smooth'
      });
      setActiveItem(name);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050508]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleClick(e, 'hero', 'Home')} className="text-xl md:text-2xl font-black font-display tracking-tight text-white magnetic">
          AP Portfolio
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.href}`}
              onClick={(e) => handleClick(e, item.href, item.name)}
              className={`magnetic px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeItem === item.name
                  ? 'bg-blue-600 font-bold text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden text-white cursor-pointer magnetic px-4 py-2 border border-white/10 rounded-lg">
          <span className="text-sm font-bold text-neon-cyan">Menu</span>
        </div>
      </div>
    </motion.nav>
  );
}
