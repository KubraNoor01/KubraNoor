import React, { useState, useEffect } from 'react';
import { Code2, Sparkles, ArrowDown, Mouse, Download } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const texts = [
    "interactive",
    "user-focused", 
    "innovative",
    "beautiful"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[70vh] sm:min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8" id="home">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-cyan-500/20 rounded-full animate-float blur-xl" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Floating Icons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
            <Code2 className="w-8 h-8 sm:w-12 sm:h-12 text-purple-500 animate-float glow-effect" />
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text animate-glow">
              Kubra Noor
            </h1>
            <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-purple-500 animate-float glow-effect" style={{ animationDelay: '1s' }} />
          </div>

          {/* Animated Description */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-md xs:max-w-lg sm:max-w-2xl mx-auto leading-relaxed px-2">
              Turning ideas into 
              <span className="text-purple-400 font-medium mx-2 transition-all duration-500">
                {texts[currentText]}
              </span>
              <span className="text-blue-400 font-medium"> web experiences </span>
              with clean code and creative design
            </p>
          </div>

          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8 px-2 max-w-xs xs:max-w-sm sm:max-w-md mx-auto w-full">
            <button
              onClick={() => scrollToSection('projects')}
              className="group w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full transition-all transform hover:scale-105 hover:shadow-lg text-base sm:text-lg font-semibold relative overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group w-full sm:w-auto px-8 py-3 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-full transition-all transform hover:scale-105 hover:shadow-lg text-base sm:text-lg font-semibold relative overflow-hidden"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </div>



          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-2 text-gray-400">
              <Mouse className="w-6 h-6" />
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>

        </div>
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;