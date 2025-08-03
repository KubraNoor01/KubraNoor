import React, { useState, useEffect } from 'react';
import { Code, Database, Palette, Smartphone, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('frontend');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: 'React.js', level: 90, color: '#61DAFB' },
        { name: 'JavaScript (ES6+)', level: 88, color: '#F7DF1E' },
        { name: 'HTML5', level: 95, color: '#E34F26' },
        { name: 'CSS3', level: 92, color: '#1572B6' },
        { name: 'Tailwind CSS', level: 85, color: '#06B6D4' },
        { name: 'Swiper.js', level: 80, color: '#6332F6' },
        { name: 'Lucide-react', level: 85, color: '#8B5CF6' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend & Languages',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'Java', level: 85, color: '#ED8B00' },
        { name: 'C++', level: 80, color: '#00599C' },
        { name: 'RESTful APIs', level: 88, color: '#FF6B6B' },
        { name: 'MongoDB', level: 82, color: '#47A248' },
        { name: 'PostgreSQL', level: 75, color: '#336791' },
        { name: 'MySQL', level: 78, color: '#4479A1' }
      ]
    },
    {
      id: 'tools',
      name: 'DevOps & Tools',
      icon: <Zap className="w-6 h-6" />,
      skills: [
        { name: 'Git/GitHub', level: 90, color: '#F05032' },
        { name: 'GitHub Actions (CI/CD)', level: 80, color: '#2088FF' },
        { name: 'AWS', level: 75, color: '#FF9900' },
        { name: 'VS Code', level: 92, color: '#007ACC' },
        { name: 'IntelliJ IDEA', level: 85, color: '#000000' },
        { name: 'Postman', level: 88, color: '#FF6C37' },
        { name: 'Swagger/OpenAPI', level: 80, color: '#85EA2D' },
        { name: 'Selenium', level: 85, color: '#43B02A' },
        { name: 'Katalon Studio', level: 80, color: '#FF6B35' },
        { name: 'Jupyter Notebook', level: 75, color: '#F37626' },
        { name: 'Excel', level: 85, color: '#217346' },
        { name: 'Jira', level: 80, color: '#0052CC' }
      ]
    }
  ];

  const currentSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || [];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative" id="skills">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Skills & Expertise
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 focus-ring ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {currentSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass-effect p-6 rounded-xl hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className="h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                      boxShadow: `0 0 10px ${skill.color}40`
                    }}
                  ></div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  ></div>
                  <span className="text-sm text-gray-400">
                    {skill.level >= 90 ? 'Expert' : 
                     skill.level >= 80 ? 'Advanced' : 
                     skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-white mb-8">Other Skills & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {[
                'Agile (Scrum)', 'UML Diagrams', 'Software Testing', 'Test Case Design', 'Performance Testing',
                'API Testing', 'Mobile App Development', 'Responsive Design', 'UI/UX Design', 'Version Control',
                'CI/CD Pipelines', 'Cloud Deployment', 'Database Design', 'System Architecture', 'Documentation'
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;