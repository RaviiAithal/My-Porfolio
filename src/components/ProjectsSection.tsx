import { ExternalLink, Github, Eye, Shield, Train, Gamepad2, Bot, Tv, Shirt, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';

const IEEEIcon = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#00629B"/>
    <path d="M16 8L24 16L16 24L8 16L16 8Z" fill="white"/>
    <circle cx="16" cy="16" r="2.5" fill="#00629B" stroke="white" strokeWidth="1.5"/>
  </svg>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "Clear Zone AI",
      description: "Real-time workplace safety monitoring system using YOLO and MediaPipe for detecting safety violations and sending automated alerts.",
      icon: <Shield className="h-8 w-8 text-primary" />,
      tech: ["YOLO", "MediaPipe", "OpenCV", "SMTP", "Python"],
      github: "https://github.com/RaviiAithal/WorksafetyBackend",
      demo: null,
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      title: "Human Intervention Detection on Railway Track",
      description: "YOLO-based real-time railway safety system for detecting human presence on tracks and preventing accidents.",
      icon: <Train className="h-8 w-8 text-secondary" />,
      tech: ["YOLO", "Raspberry Pi", "Roboflow", "Computer Vision"],
      github: "https://github.com/RaviiAithal/human_intervention_detection_on_tracks",
      demo: null,
      gradient: "from-secondary/20 to-primary/20"
    },
    {
      title: "VRSorted",
      description: "Immersive VR application that teaches sorting algorithms through interactive 3D visualization and gamification.",
      icon: <Gamepad2 className="h-8 w-8 text-primary" />,
      tech: ["Unity", "VR Design", "C#", "UX Design"],
      paper: "https://ieeexplore.ieee.org/document/10816897", // <-- Replace with your actual IEEE paper link
      demo: null,
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      title: "GOALIE",
      description: "Real-time AI commentator system for sports, generating natural language commentary using event detection and summarization powered by LLMs.",
      icon: <Tv className="h-8 w-8 text-primary" />,
      tech: ["LLM", "NLP", "Sports Analytics", "Groq", "Python"],
      github: "https://github.com/RaviiAithal/GOALIE-Live-Sports-Extension", // Replace with your GitHub link later
      demo: null,
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      title: "Agentic AI for Job Search",
      description: "Autonomous AI agent that personalizes and automates job applications using trending tools like MCP and Groq LLaMA-3, with real-time progress visualization and multi-agent collaboration.",
      icon: <Bot className="h-8 w-8 text-secondary" />,
      tech: ["Groq", "Agentic AI", "LLM", "MCP", "Automation", "JobTech"],
      github: "https://github.com/RaviiAithal/Job-Search", // Replace with your GitHub link later
      demo: null,
      gradient: "from-secondary/20 to-primary/20"
    },
  {
    title: "Downtime Analysis",
    description: "Big Data analytics platform that processes large-scale machine logs to detect, categorize, and visualize downtime events using Apache Spark and Hadoop.",
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    tech: ["Apache Spark", "Hadoop", "PySpark", "Big Data", "Machine Analytics"],
    github: "https://github.com/RaviiAithal/MachineDowntime", // Replace with your GitHub repo link
    demo: null,
    gradient: "from-secondary/20 to-primary/20"
  }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI, ML, and computer vision
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass p-6 rounded-xl hover-lift group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-full h-40 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                {project.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                {project.title === "VRSorted" ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                    asChild
                  >
                    <a href={project.paper} target="_blank" rel="noopener noreferrer">
                      <span className="mr-2"><IEEEIcon /></span>
                      Paper
                    </a>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-secondary hover:bg-secondary/90 flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;