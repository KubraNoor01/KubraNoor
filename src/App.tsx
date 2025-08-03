import Navbar from './components/Navigation/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Background />
      <Navbar />
      <main className="pt-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-screen-xl mx-auto">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;