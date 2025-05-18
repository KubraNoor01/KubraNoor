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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-6 animate-fade-in">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <Code2 className="w-12 h-12 text-purple-500 animate-pulse" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Kubra Noor
            </h1>
            <Sparkles className="w-12 h-12 text-purple-500 animate-pulse" />
          </div>
          
          <p className="text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
          Turning ideas into 
            <span className="text-purple-400 font-medium"> interactive</span>
            ,
            <span className="text-blue-400 font-medium"> user-focused web experiences </span>
             with clean code and creative design
          </p>
          
          <div className="flex justify-center space-x-4 mt-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all transform hover:scale-105 hover:shadow-lg"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-full transition-all transform hover:scale-105 hover:shadow-lg"
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