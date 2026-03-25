import { motion } from 'framer-motion';
import { FaEnvelope as Mail, FaPhone as Phone, FaGithub as Github, FaLinkedin as Linkedin, FaPaperPlane as Send } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-32 px-4 z-10 flex items-center justify-center min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 relative overflow-visible"
        >
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 blur-[100px] rounded-full pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-cyan/20 blur-[100px] rounded-full pointer-events-none -z-10" />

          {/* Info Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Let's Build Something <br/>
              <span className="text-gradient">Amazing</span> Together 🚀
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Ready to create the next generation of digital experiences? I'm currently open for new opportunities.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:abhinandanpandey672@gmail.com" className="magnetic flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors w-fit break-all">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 flex-shrink-0"><Mail size={20} /></div>
                <span className="font-medium text-lg">abhinandanpandey672@gmail.com</span>
              </a>
              <a href="tel:+919709925057" className="magnetic flex items-center gap-4 text-gray-300 hover:text-neon-purple transition-colors w-fit">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 flex-shrink-0"><Phone size={20} /></div>
                <span className="font-medium text-lg">+91 9709925057</span>
              </a>
            </div>
            
            <div className="flex gap-6 mt-12">
              <a href="https://github.com/Abhinandan1pandey" target="_blank" rel="noopener noreferrer" className="magnetic text-gray-400 hover:text-white transition-colors p-3 rounded-full border border-white/10 hover:bg-white/5 hover:scale-110"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/abhinandan-pandey" target="_blank" rel="noopener noreferrer" className="magnetic text-gray-400 hover:text-white transition-colors p-3 rounded-full border border-white/10 hover:bg-white/5 hover:scale-110"><Linkedin size={24} /></a>
            </div>
          </div>

          {/* Form Side */}
          <form action="https://formsubmit.co/abhinandanpandey672@gmail.com" method="POST" className="flex flex-col gap-6 relative z-10 w-full max-w-lg mx-auto lg:mx-0">
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Message from Portfolio Website!" />
            <input type="hidden" name="_template" value="box" />

            <div className="relative group">
              <input type="text" id="name" name="name" required className="w-full bg-dark/50 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-neon-cyan transition-colors peer placeholder-transparent" placeholder="Name" />
              <label htmlFor="name" className="absolute left-5 top-4 text-gray-500 pointer-events-none transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-neon-cyan peer-focus:bg-dark peer-focus:px-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:px-2 peer-valid:bg-dark">Your Name</label>
            </div>
            
            <div className="relative group">
              <input type="email" id="email" name="email" required className="w-full bg-dark/50 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-neon-purple transition-colors peer placeholder-transparent" placeholder="Email" />
              <label htmlFor="email" className="absolute left-5 top-4 text-gray-500 pointer-events-none transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-neon-purple peer-focus:bg-dark peer-focus:px-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:px-2 peer-valid:bg-dark">Your Email</label>
            </div>

            <div className="relative group h-full">
              <textarea id="message" name="message" required className="w-full h-full min-h-[150px] bg-dark/50 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-neon-blue transition-colors peer resize-none placeholder-transparent" placeholder="Message"></textarea>
              <label htmlFor="message" className="absolute left-5 top-4 text-gray-500 pointer-events-none transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-neon-blue peer-focus:bg-dark peer-focus:px-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:px-2 peer-valid:bg-dark">Your Message</label>
            </div>

            <button type="submit" className="magnetic w-full py-4 mt-2 bg-gradient-to-r from-neon-purple to-neon-blue rounded-xl font-bold text-white shadow-[0_0_20px_rgba(155,81,224,0.3)] hover:shadow-[0_0_30px_rgba(155,81,224,0.6)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 pointer-events-auto">
              Send Message <Send size={18} />
            </button>
          </form>

        </motion.div>
      </div>
    </section>
  );
}
