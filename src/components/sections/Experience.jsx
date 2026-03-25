import { motion } from 'framer-motion';
import { FaAward as Award, FaBriefcase as Briefcase, FaCertificate as FileBadge, FaExternalLinkAlt as ExternalLink } from 'react-icons/fa';

const certifications = [
  { title: "Python for Data Science, AI & Dev", issuer: "IBM / Coursera", link: "https://www.coursera.org/account/accomplishments/certificate/27YMSFR88ELD", image: "/cert1.png" },
  { title: "Data Analysis with Python", issuer: "IBM / Coursera", link: "https://coursera.org/verify/HT9K3LMRZ5NM", image: "/cert2.png" },
  { title: "What is Data Science?", issuer: "IBM / Coursera", link: "https://coursera.org/verify/PBE1ADJ5N7NE", image: "/cert3.png" },
  { title: "Web Design", issuer: "MindLuster", link: "#", image: "/cert4.png" }
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-32 px-4 z-10 bg-dark/30 backdrop-blur-sm border-t border-white/5">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My experience, premium training, and continuous learning path.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          
          {/* Experience / Achievements - NGO */}
          <motion.div 
            id="achievements"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card flex flex-col md:flex-row gap-8 items-center bg-dark/60"
          >
            <div className="w-20 h-20 rounded-2xl bg-neon-blue/20 flex items-center justify-center text-neon-blue border border-neon-blue/30 flex-shrink-0">
              <Briefcase size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">NGO Intern</h3>
              <h4 className="text-lg text-neon-blue mb-4">Shatakshi Seva Sansthan</h4>
              <p className="text-gray-300">
                Contributing to rural classroom development projects and digital literacy. 
                Focused on community impact, leveraging technology management skills to streamline educational resources for underprivileged students.
              </p>
            </div>
          </motion.div>

          {/* Premium Training Certificate */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="glass-card relative bg-dark/80 border-white/20 p-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple border border-neon-purple/30 flex-shrink-0 transition-transform group-hover:scale-110">
                <FileBadge size={48} />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-4">
                  <h3 className="text-2xl font-black text-white">Mastering C++</h3>
                  <span className="px-4 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 font-bold text-sm text-center">Grade: A</span>
                </div>
                <h4 className="text-lg text-gray-400 mb-2">From Object-Oriented Programming to Dynamic Programming</h4>
                <p className="text-neon-purple font-medium flex items-center gap-2">
                  <span>Centre for Professional Enhancement, LPU</span>
                </p>
                <p className="text-sm text-gray-500 mt-2">10 June 2025 – 16 July 2025</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications Grid */}
          <div id="certifications" className="mt-8 pt-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-neon-cyan" /> Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <a 
                    href={cert.link}
                    target={cert.link !== "#" ? "_blank" : "_self"}
                    rel={cert.link !== "#" ? "noopener noreferrer" : ""}
                    className="glass-card p-0 h-full flex flex-col border border-white/5 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] transition-all duration-300 group bg-dark/50 block overflow-hidden"
                  >
                    {/* Certificate Image Cover */}
                    <div className="w-full h-40 bg-white/5 relative overflow-hidden flex-shrink-0">
                       <img src={cert.image.startsWith('/') ? `.${cert.image}` : `./${cert.image}`} alt={cert.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#0f111a]/90 to-transparent pointer-events-none"></div>
                       {cert.link !== "#" && <ExternalLink size={16} className="absolute top-4 right-4 text-white drop-shadow-md group-hover:text-neon-cyan transition-colors z-10" />}
                    </div>

                    <div className="p-6 flex flex-col flex-grow bg-[#0f111a] relative z-10">
                      <div className="w-10 h-10 rounded-lg bg-black/60 flex items-center justify-center text-gray-400 group-hover:text-neon-cyan group-hover:bg-neon-cyan/20 transition-colors border border-white/10 mb-2 shadow-lg absolute -top-5 left-6 backdrop-blur-md">
                        <Award size={18} />
                      </div>
                      <h4 className="font-bold text-white mb-2 leading-tight mt-4">{cert.title}</h4>
                      <p className="text-sm text-gray-400 mt-auto">{cert.issuer}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
