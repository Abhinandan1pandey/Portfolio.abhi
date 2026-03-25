import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';

export default function Resume() {
  return (
    <section id="resume" className="relative w-full py-32 px-4 z-10 bg-[#0B0C10]">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card flex flex-col items-center justify-center p-12 md:p-20 text-center bg-gradient-to-br from-[#11131c]/80 to-[#0f111a] border border-white/5 rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 blur-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 text-white leading-tight">
            Ready to dive <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-blue-500">Deeper?</span>
          </h2>
          
          <p className="text-gray-400 max-w-xl mx-auto text-lg mb-12 relative z-10 leading-relaxed">
            Get a comprehensive overview of my professional experience, entire tech stack, certifications, and academic background.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto relative z-10">
            {/* View CV Button */}
            <a 
              href="./resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="magnetic flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full sm:w-auto"
            >
              <FaEye size={20} className="text-gray-300 group-hover:text-white" />
              See CV
            </a>

            {/* Download CV Button */}
            <a 
              href="./resume.pdf" 
              download="Abhinandan_Pandey_Resume.pdf"
              className="magnetic flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1 w-full sm:w-auto"
            >
              <FaDownload size={20} />
              Download CV
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
