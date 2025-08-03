import React, { useState, useEffect } from 'react'; 
import { Github, ExternalLink, Star, Eye, Calendar, X } from 'lucide-react';
import { LazyImage } from './common/LazyImage';

const projects = [
  {
    title: "Vistelligence",
    description: "My Final Year Project - AI-powered visa recommendation system",
    longDescription: "An AI-powered visa recommendation system that provides personalized visa advice, success prediction, and interview preparation. Features machine learning algorithms for accurate predictions and user-friendly interface. **My Role:** Led comprehensive documentation, developed the complete frontend interface, and handled all system integrations. Built with JavaScript (82.7%), Python (15.3%), and modern web technologies.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
    tech: ["JavaScript", "Python", "React", "MongoDB", "TensorFlow", "Node.js"],
    links: {
      github: "https://github.com/KubraNoor01/MY-FinalYearProject.git"
    },
    status: "FYP Completed",
    featured: true
  },
  {
    title: "TractMyPrep",
    description: "AI-powered exam preparation tracking system for Pakistani curriculum",
    longDescription: "An intelligent exam preparation platform that helps students track their study progress across Pakistani curriculum (Matric, FSC, etc.). Features AI model training with curriculum datasets and past board papers. Users can track their preparation progress with personalized insights. **My Role:** Learning AI model training, implementing RAG-based models, and contributing to full-stack development. Currently in early development phase with 2 team members.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    tech: ["Python", "AI/ML", "React", "Node.js", "MongoDB", "RAG Models"],
    links: {
      github: "https://github.com/KubraNoor01/TractMyPrep"
    },
    status: "In Development",
    featured: false
  },
  {
    title: "Portfolio",
    description: "Curious to know more? I'm just a click away.",
    longDescription: "A modern, responsive portfolio website showcasing my skills, projects, and experience. Built with React, TypeScript, and Tailwind CSS for optimal performance and user experience. Deployed on Vercel with TypeScript (91.1%), JavaScript (4.1%), and modern web technologies.",
    image: "/assets/portfolio.png",
    tech: ["TypeScript", "React", "Tailwind CSS", "JavaScript"],
    links: {
      github: "https://github.com/KubraNoor01/KubraNoor",
      live: "https://kubranoorcom.vercel.app/"
    },
    status: "Live",
    featured: false
  },
   
  {
    title: "Tour Explorer",
    description: "Interactive travel platform with immersive experiences",
    longDescription: "A comprehensive travel application that helps users explore destinations, plan trips, and discover local attractions. Features interactive maps, user reviews, and booking capabilities.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
    tech: ["Java"],
    links: {
      github: "https://github.com/KubraNoor01/TourExplorer",
      live: "https://tourexplorer.demo"
    },
    status: "Completed",
    featured: false
  },
  {
    title: "Banking System",
    description: "Java-based banking application with automated and manual testing for reliable transactions.",
    longDescription: "A modular banking application built in Java, designed to handle core operations like Account Creation, Deposit, Withdrawal, Transfer, APR, and TimePass validations. Implemented 120+ manual test cases to ensure accurate transaction handling, overdraft prevention, and compliance with CD rules. Developed a JUnit suite with 95+ automated regression tests, integrated via Maven CI and GitHub Actions for continuous testing. Designed and implemented system logic, authored manual test cases, created UML diagrams, and managed bug tracking and enhancements in JIRA within Agile sprints.",
    image: "/assets/banking.jpg",
    tech: ["Java", "JUnit", "Maven", "GitHub Actions", "JIRA", "UML"],
    links: {
      github: "https://github.com/KubraNoor01/Banking-System.git"
    },
    status: "Completed",
    featured: false
}

];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'text-green-400 bg-green-400/20';
      case 'In Development': return 'text-yellow-400 bg-yellow-400/20';
      case 'Completed': return 'text-blue-400 bg-blue-400/20';
      case 'FYP Completed': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative" id="projects">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-16 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 glass-effect border border-gray-700/50 hover:border-purple-500/50 ${
                  project.featured ? 'ring-2 ring-purple-500/50 shadow-lg shadow-purple-500/30' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Featured Badge with Animation */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 animate-pulse">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white text-xs font-bold rounded-full flex items-center space-x-2 shadow-lg">
                      <Star className="w-3 h-3 animate-spin" style={{ animationDuration: '3s' }} />
                      <span>Featured</span>
                    </span>
                  </div>
                )}

                {/* Enhanced Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-4 py-2 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Enhanced Image container */}
                <div className="relative h-48 xs:h-56 sm:h-64 md:h-56 lg:h-64 overflow-hidden">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    placeholderColor="#1a1a1a"
                  />
                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent group-hover:from-gray-900/90 transition-all duration-500"></div>
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex space-x-2">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="w-8 h-8 bg-purple-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          {tech.charAt(0)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Content Section */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 transform transition-all duration-500">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 flex items-center">
                      {project.title}
                      {project.featured && (
                        <span className="ml-2 text-purple-400 animate-pulse">✨</span>
                      )}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 text-sm leading-relaxed max-h-0 group-hover:max-h-20 overflow-hidden">
                      {project.description}
                    </p>
                    
                    {/* Enhanced Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full border border-purple-500/30 backdrop-blur-sm hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300"
                          style={{ animationDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Enhanced Action Buttons */}
                    <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-purple-600/80 hover:bg-purple-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">GitHub</span>
                      </a>
                      {project.links.live && !project.links.live.includes('.demo') && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-blue-600/80 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm"
                          aria-label={`${project.title} Live Demo`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm font-medium">Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Enhanced Click to view details overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-blue-600/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center cursor-pointer backdrop-blur-sm"
                  onClick={() => setSelectedProject(index)}
                >
                  <div className="text-center text-white transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                      <Eye className="w-8 h-8" />
                    </div>
                    <p className="text-lg font-bold mb-2">View Details</p>
                    <p className="text-sm opacity-90">Click to see more</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/KubraNoor01?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full transition-all transform hover:scale-105 hover:shadow-lg font-semibold"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto glass-effect">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{projects[selectedProject].title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {projects[selectedProject].longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[selectedProject].tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={projects[selectedProject].links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                {projects[selectedProject].links.live && !projects[selectedProject].links.live.includes('.demo') && (
                  <a
                    href={projects[selectedProject].links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;