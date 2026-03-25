import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaChartBar, FaChartPie, FaBrain, FaFileExcel, FaFigma, FaGitAlt, FaGithub } from 'react-icons/fa';

const skillsData = [
  { name: 'C', category: 'Programming', percentage: 80, icon: <span className="text-blue-500 font-black text-2xl font-serif">C</span> },
  { name: 'C++', category: 'Programming', percentage: 75, icon: <span className="text-[#00599C] font-black text-xl font-serif">C++</span> },
  { name: 'Java', category: 'Programming', percentage: 85, icon: <FaJava className="text-[#ED8B00]" size={28} /> },
  { name: 'Python', category: 'Programming', percentage: 90, icon: <FaPython className="text-[#3776AB]" size={28} /> },
  
  { name: 'Pandas', category: 'Data Science', percentage: 85, icon: <FaDatabase className="text-white" size={26} /> },
  { name: 'NumPy', category: 'Data Science', percentage: 85, icon: <span className="text-[#4D77CF] font-black text-[10px]">NumPy</span> },
  { name: 'Scikit-Learn', category: 'Data Science', percentage: 70, icon: <FaBrain className="text-[#F7931E]" size={26} /> },
  { name: 'Seaborn', category: 'Data Science', percentage: 75, icon: <FaChartPie className="text-[#4C72B0]" size={26} /> },
  
  { name: 'HTML', category: 'Frontend', percentage: 95, icon: <FaHtml5 className="text-[#E34F26]" size={28} /> },
  { name: 'CSS', category: 'Frontend', percentage: 85, icon: <FaCss3Alt className="text-[#1572B6]" size={28} /> },
  { name: 'JavaScript', category: 'Frontend', percentage: 90, icon: <FaJs className="text-[#F7DF1E]" size={28} /> },
  
  { name: 'MySQL', category: 'Databases', percentage: 80, icon: <FaDatabase className="text-[#4479A1]" size={26} /> },
  { name: 'PostgreSQL', category: 'Databases', percentage: 75, icon: <FaDatabase className="text-[#336791]" size={26} /> },
  { name: 'SQLite', category: 'Databases', percentage: 70, icon: <FaDatabase className="text-[#003B57]" size={26} /> },
  
  { name: 'Power BI', category: 'Tools', percentage: 85, icon: <FaChartBar className="text-[#F2C811]" size={26} /> },
  { name: 'Excel', category: 'Tools', percentage: 90, icon: <FaFileExcel className="text-[#217346]" size={26} /> },
  { name: 'Figma', category: 'Tools', percentage: 75, icon: <FaFigma className="text-[#F24E1E]" size={26} /> },
  { name: 'Git', category: 'Tools', percentage: 85, icon: <FaGitAlt className="text-[#F05032]" size={28} /> },
  { name: 'GitHub', category: 'Tools', percentage: 90, icon: <FaGithub className="text-white" size={28} /> },
];

const categories = ['All Skills', 'Programming', 'Data Science', 'Frontend', 'Databases', 'Tools'];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All Skills');

  const filteredSkills = activeTab === 'All Skills' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="relative w-full py-32 px-4 z-10 bg-[#0B0C10]">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6 relative -top-2"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of technologies I've mastered on my journey as a developer.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`magnetic px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="bg-[#1A1F2E] border border-white/5 rounded-2xl p-6 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-center gap-5 mb-4 relative z-10">
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-xl bg-black/40 flex items-center justify-center border border-white/5 group-hover:bg-black/60 transition-colors flex-shrink-0">
                    {skill.icon}
                  </div>
                  
                  {/* Title & Progress Container */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                      <span className="text-sm font-semibold text-blue-400">{skill.percentage}%</span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                      {/* Progress Bar Fill */}
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Category Tag */}
                <div className="flex justify-end mt-4">
                  <span className="text-[11px] font-medium text-gray-500 tracking-wider">
                    {skill.category}
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
