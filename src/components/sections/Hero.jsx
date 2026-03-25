import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub as Github, FaLinkedin as Linkedin, FaEnvelope as Mail, FaChevronDown as ChevronDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden z-10 px-4 pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-radial-gradient from-neon-purple/20 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto flex flex-col items-center text-center max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          {/* Abstract glowing orb behind text */}
          <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-neon-purple to-neon-cyan blur-[100px] opacity-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse" />
        </motion.div>

        {/* Profile Avatar */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="mb-6 relative group z-20 pointer-events-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-neon-purple rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img src="/profile.jpg" alt="Abhinandan Pandey" className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-[6px] border-[#0B0C10] shadow-[0_0_40px_rgba(155,81,224,0.4)]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-neon-cyan font-bold tracking-widest uppercase mb-4"
        >
          Portfolio of
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight"
        >
          Abhinandan Kumar <br className="hidden md:block"/> <span className="text-gradient">Pandey</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="h-20 md:h-12 mt-2 mb-10"
        >
          <TypeAnimation
            sequence={[
              'Data Scientist 📊', 2000,
              'Machine Learning Enthusiast 🧠', 2000,
              'Problem Solver 💡', 2000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-2xl md:text-3xl font-medium text-gray-300"
            repeat={Infinity}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 mt-4"
        >
          <a href="#projects" className="magnetic px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] min-w-[160px]">
            View Work
          </a>
          <a href="#contact" className="magnetic px-8 py-4 rounded-full glass border border-white/20 hover:bg-white/10 transition-colors duration-300 hover:scale-105 min-w-[160px]">
            Resume / Contact
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex gap-8 mt-16"
        >
          <a href="https://github.com/Abhinandan1pandey" target="_blank" rel="noopener noreferrer" className="magnetic text-gray-400 hover:text-neon-cyan transition-colors hover:scale-110"><Github size={28} /></a>
          <a href="https://www.linkedin.com/in/abhinandan-pandey" target="_blank" rel="noopener noreferrer" className="magnetic text-gray-400 hover:text-neon-cyan transition-colors hover:scale-110"><Linkedin size={28} /></a>
          <a href="mailto:abhinandanpandey672@gmail.com" className="magnetic text-gray-400 hover:text-neon-cyan transition-colors hover:scale-110"><Mail size={28} /></a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
