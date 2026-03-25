import { motion } from 'framer-motion';
import { FaUser as User, FaGraduationCap as GraduationCap } from 'react-icons/fa';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="relative w-full py-32 px-4 z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            The <span className="text-gradient">Story</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Who I am, what I do, and the vision driving my journey.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Identity & Vision */}
          <motion.div variants={itemVariants} className="glass-card flex flex-col gap-6">
            <div className="w-16 h-16 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple mb-2">
              <User size={32} />
            </div>
            <h3 className="text-2xl font-bold">Identity & Vision</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I am a passionate <strong className="text-white">Computer Science Engineering student</strong> at Lovely Professional University, graduating in 2027.
              </p>
              <p>
                My journey sits at the intersection of <strong className="text-neon-cyan">Data Science</strong> and <strong className="text-neon-blue">Software Engineering</strong>. I am deeply fascinated by drawing actionable insights from complex datasets and building intelligent analytical systems to solve real-world problems.
              </p>
              <p>
                Equipped with strong foundations in Python, Data Analysis, Machine Learning, and C++, I am constantly exploring data complexities to deliver tangible, high-impact results.
              </p>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div variants={itemVariants} className="glass-card flex flex-col gap-6 relative">
            <div className="w-16 h-16 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan mb-2">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-2xl font-bold">Academic Milestones</h3>
            
            <div className="relative pl-8 mt-4 border-l-2 border-neon-cyan/30 space-y-10">
              
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-neon-cyan shadow-[0_0_15px_#00f2fe]" />
                <h4 className="text-xl font-bold text-white">B.Tech Computer Science</h4>
                <p className="text-neon-cyan font-medium text-sm mb-2">2023 - 2027</p>
                <p className="text-gray-400">Lovely Professional University</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-neon-blue shadow-[0_0_15px_#2d9cdb]" />
                <h4 className="text-xl font-bold text-white">Intermediate</h4>
                <p className="text-neon-blue font-medium text-sm mb-2">Grade: 74%</p>
                <p className="text-gray-400">Pdt. Dindayal Upadhaya Inter College</p>
                <p className="text-gray-500 text-xs mt-1">Gopalganj, Bihar</p>
              </div>

              <div className="relative mt-8">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-neon-purple shadow-[0_0_15px_#9b51e0]" />
                <h4 className="text-xl font-bold text-white">Matriculation</h4>
                <p className="text-neon-purple font-medium text-sm mb-2">Grade: 79%</p>
                <p className="text-gray-400">CMJ Inst. of Education</p>
                <p className="text-gray-500 text-xs mt-1">Motihari, Bihar</p>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
