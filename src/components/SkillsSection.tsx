import { Code, Brain, Database, Eye, Wrench } from 'lucide-react';
import LeetCodeCard from './LeetCodeCard';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "C++", "C", "JavaScript", "SQL"],
      color: "primary"
    },
    {
      title: "AI & ML",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Supervised Learning", "Deep Learning", "XGBoost", "Neural Networks", "TensorFlow"],
      color: "secondary"
    },
    {
      title: "Data Tools",
      icon: <Database className="h-6 w-6" />,
      skills: ["Pandas", "NumPy", "Power BI", "Tableau", "Hadoop"],
      color: "primary"
    },
    {
      title: "Computer Vision",
      icon: <Eye className="h-6 w-6" />,
      skills: ["OpenCV", "Roboflow", "YOLO", "MediaPipe", "Image Processing"],
      color: "secondary"
    },
    {
      title: "Development",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Tkinter", "MySQL", "Anaconda", "Git", "Linux"],
      color: "primary"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass p-6 rounded-xl hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-${category.color}/10 text-${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold ml-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="flex items-center justify-between p-3 bg-background/50 rounded-lg hover:bg-background/70 transition-colors"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <span className="text-foreground font-medium">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < (skillIndex % 3) + 3 ? `bg-${category.color}` : 'bg-muted'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <LeetCodeCard />
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Data Structures & Algorithms
            </h3>
            <p className="text-muted-foreground text-lg">
              Strong foundation in problem-solving, algorithmic thinking, and optimized data structure implementation. 
              Experienced in competitive programming and building efficient, scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;