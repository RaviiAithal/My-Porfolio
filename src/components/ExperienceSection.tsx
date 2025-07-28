import { Calendar, MapPin, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Emmetra",
      role: "Project Intern",
      period: "Apr 2025 - May 2025",
      location: "Remote",
      achievements: [
        "Developed AutoIQ, a cutting-edge RAW-to-RGB deep learning tool for advanced image processing",
        "Built ParaNet + HFP networks achieving high PSNR and SSIM scores for superior image enhancement",
        "Optimized tuning pipeline resulting in 40% faster processing times",
        "Implemented advanced neural network architectures for real-time image conversion"
      ],
      color: "primary"
    },
    {
      company: "BOSTON-RVCE",
      role: "Project Intern",
      period: "Nov 2023 - Dec 2023",
      location: "Bangalore, India",
      achievements: [
        "Built comprehensive credit risk prediction tool using XGBoost algorithm",
        "Achieved 93% accuracy in credit risk assessment for financial institutions",
        "Applied advanced Business Intelligence techniques to define and solve complex business problems",
        "Collaborated with cross-functional teams to deliver data-driven solutions"
      ],
      color: "secondary"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building impactful AI solutions across different domains
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={exp.company}
                className="relative flex items-start mb-12 last:mb-0"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full bg-${exp.color} border-4 border-background z-10`}></div>
                
                {/* Content Card */}
                <div className="ml-20 glass p-6 rounded-xl hover-lift w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-1">{exp.role}</h3>
                      <h4 className="text-xl text-foreground font-medium">{exp.company}</h4>
                    </div>
                    
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <Award className="h-4 w-4 text-secondary mt-1 mr-3 flex-shrink-0" />
                        <p className="text-muted-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;