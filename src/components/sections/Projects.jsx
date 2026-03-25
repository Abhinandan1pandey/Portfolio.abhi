import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaExternalLinkAlt as ExternalLink, FaGithub as Github, FaBolt as Zap, FaBrain as BrainCircuit, FaDesktop as LayoutTemplate } from 'react-icons/fa';

// Project Data
const projects = [
  {
    title: "URL Shortener System",
    category: "System Design",
    icon: <Zap size={40} className="text-neon-cyan" />,
    color: "from-cyan-500/10 to-blue-500/10",
    problem: "Long, unwieldy URLs are difficult to share and track.",
    approach: "Built a high-performance custom URL shortener with caching.",
    outcome: "Achieved ultra-fast redirect speeds.",
    tech: ["Node.js", "Express", "MongoDB", "Redis"],
    github: "https://github.com/Abhinandan1pandey/Url-shortner-system-",
    image: "/url-shortener.png"
  },
  {
    title: "AI Chatbot Integration",
    category: "AI Integration",
    icon: <BrainCircuit size={40} className="text-neon-purple" />,
    color: "from-purple-500/10 to-pink-500/10",
    problem: "Complex interactions require intelligent autonomous responses.",
    approach: "Developed an AI-driven conversational agent.",
    outcome: "Highly responsive and context-aware interactions.",
    tech: ["React", "OpenAI API", "Tailwind"],
    github: "https://github.com/Abhinandan1pandey/ai-integrted-chatbot",
    image: "/ai-chatbot.png"
  },
  {
    title: "Spectacles E-Commerce",
    category: "Frontend & UI/UX",
    icon: <LayoutTemplate size={40} className="text-blue-400" />,
    color: "from-blue-400/10 to-indigo-500/10",
    problem: "Online eyewear shopping lacks engaging interactive experiences.",
    approach: "Developed an elegant, highly interactive frontend storefront.",
    outcome: "Increased engagement through premium UI aesthetics.",
    tech: ["HTML/CSS", "JavaScript", "Figma"],
    github: "https://github.com/Abhinandan1pandey/spectacles",
    image: "/spectacles-shop.png"
  }
];

export default function Projects() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh] bg-dark/50">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Section Header Fixed Context */}
        <div className="absolute top-20 left-10 md:left-20 z-20 pointer-events-none">
          <h2 className="text-4xl md:text-5xl font-black mb-2">Featured <span className="text-gradient">Work</span></h2>
          <p className="text-gray-400">Horizontal Scroll Showcase</p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-10 md:px-32 w-[300vw]">
          {projects.map((project, idx) => (
            <div key={idx} className="w-[100vw] sm:w-[80vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 h-[60vh] md:h-[70vh] flex items-center justify-center p-4">
              
              {/* 3D Tilt Card Wrapper */}
              <motion.div 
                whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5 }}
                className={`w-full h-full glass-card flex flex-col bg-[#0f111a] shadow-2xl p-0 overflow-hidden relative border border-white/5 rounded-3xl`}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              >
                
                {/* Project Image Cover (Top) */}
                <div className="relative w-full h-[40%] flex-shrink-0 overflow-hidden pointer-events-none" style={{ transform: "translateZ(10px)" }}>
                  <img src={`${import.meta.env.BASE_URL}${project.image.startsWith('/') ? project.image.slice(1) : project.image}`} alt={project.title} className="w-full h-full object-cover opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f111a] via-[#0f111a]/40 to-transparent pointer-events-none" />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-xs font-bold tracking-wider uppercase text-gray-300">{project.category}</span>
                  </div>
                </div>

                {/* Content Body (Bottom) */}
                <div className="flex flex-col flex-grow p-6 md:p-8 bg-[#0f111a] relative z-10" style={{ transform: "translateZ(30px)" }}>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      {project.icon}
                      <h3 className="text-2xl md:text-3xl font-black text-white">{project.title}</h3>
                    </div>
                    
                    <div className="space-y-3 text-sm md:text-base text-gray-400 mb-6">
                      <p><strong className="text-gray-200">Problem:</strong> {project.problem}</p>
                      <p><strong className="text-gray-200">Approach:</strong> {project.approach}</p>
                      <p><strong className="text-gray-200">Outcome:</strong> {project.outcome}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-auto relative z-20 pointer-events-auto">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="magnetic flex items-center justify-center gap-2 flex-1 sm:flex-none px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-lg">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="magnetic flex items-center justify-center gap-2 flex-1 sm:flex-none px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition-colors hover:text-neon-cyan hover:border-neon-cyan text-white shadow-lg">
                      <Github size={18} /> Source Code
                    </a>
                  </div>

                </div>

              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
