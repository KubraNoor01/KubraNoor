import React, { useMemo } from 'react';
import { Server, Code2, Database, Brain } from 'lucide-react';

const skillCategories = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Backend",
    skills: ["Node.js", "Python", "Express", "FastAPI"]
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"]
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI/ML",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"]
  }
];

const Skills = () => {
  // Generate stable percentages for each skill just once using useMemo
  const skillPercents = useMemo(() => {
    const percents = {};
    skillCategories.forEach(category => {
      category.skills.forEach(skill => {
        percents[skill] = 85 + Math.floor(Math.random() * 15);
      });
    });
    return percents;
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-900/50" id="skills">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-all group flex flex-col h-full"
            >
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400 group-hover:text-purple-300 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-5 flex-1">
                {category.skills.map((skill, skillIndex) => {
                  const percent = skillPercents[skill];
                  return (
                    <div key={skillIndex} className="relative" aria-label={`${skill} skill proficiency`} role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 text-sm sm:text-base">{skill}</span>
                        <span className="text-purple-400 font-mono text-sm sm:text-base">{percent}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;