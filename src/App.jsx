import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/ui/Navbar';
import Scene from './components/3d/Scene';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative w-full bg-dark text-white font-sans antialiased selection:bg-neon-purple/30">
      <CustomCursor />
      <Navbar />
      <Scene />
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}

export default App;
