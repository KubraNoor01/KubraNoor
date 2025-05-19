import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { LazyImage } from './common/LazyImage';

const projects = [
  {
    title: "Vistelligent",
    description: "Currently under development, expected to go live by late July or early August.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
     tech: ["React", "JavaScript", "Python", "MongoDB", "TensorFlow", "Node.Js"],
    links: {
      github: "https://github.com",
      live: "https://vistelligence.demo"
    }
  },
  {
  title: "Portfolio",
   description: "Curious to know more? I'm just a click away.",
  image: "/assets/portfolio.png",
  tech: ["React", "Tailwind CSS", "JavaScript", "TypeScript"],
  links: {
    github: "https://github.com/KubraNoor01/My-portfolio-website",
    live: "https://KubraNoor.com"
  }
  },
  
  {
    title: "Tour explorer",
    description: "Interactive travel platform with immersive experiences",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
    tech: ["java"],
    links: {
      github: "https://github.com/KubraNoor01/TourExplorer",
      live: "https://tourexplorer.demo"
    }
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-64">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  placeholderColor="#1a1a1a"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 transform transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-sm bg-purple-500/20 text-purple-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400 transition-colors transform hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400 transition-colors transform hover:scale-110"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;