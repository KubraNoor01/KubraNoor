import React from 'react';
import { Code2, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <div className="space-y-6 animate-fade-in">

          {/* Headline with icons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Code2 className="w-8 h-8 sm:w-12 sm:h-12 text-purple-500 animate-pulse" />
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Kubra Noor
            </h1>
            <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-purple-500 animate-pulse" />
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2">
            Turning ideas into 
            <span className="text-purple-400 font-medium"> interactive</span>, 
            <span className="text-blue-400 font-medium"> user-focused web experiences </span>
            with clean code and creative design
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8 px-2 max-w-md mx-auto">
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all transform hover:scale-105 hover:shadow-lg"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-8 py-3 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-full transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Contact Me
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
