import { GraduationCap, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about building intelligent systems that solve real-world problems
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="glass p-6 rounded-xl hover-lift">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-primary">B.E. in AI & ML</h4>
                  <p className="text-muted-foreground">R.V. College of Engineering</p>
                  <div className="flex items-center mt-2">
                    <Award className="h-4 w-4 text-secondary mr-2" />
                    <span className="text-secondary font-medium">CGPA: 9.26</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary">Pre-University</h4>
                  <p className="text-muted-foreground">Sri Venkatrama PU College</p>
                  <div className="flex items-center mt-2">
                    <Award className="h-4 w-4 text-secondary mr-2" />
                    <span className="text-secondary font-medium">97.83%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an AI & ML engineering student at RVCE with a passion for developing intelligent, 
              scalable solutions that bridge the gap between cutting-edge research and real-world applications. 
              My journey in artificial intelligence began with a fascination for computer vision and has 
              evolved into a comprehensive understanding of machine learning systems.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on experience in deep learning, computer vision, and data science, I've worked 
              on projects ranging from workplace safety systems to railway security solutions. I'm particularly 
              interested in the intersection of AI and practical problem-solving, where technology can make 
              a meaningful impact on people's lives.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring the latest research papers, contributing to 
              open-source projects, or experimenting with new AI frameworks. I believe in continuous 
              learning and staying at the forefront of this rapidly evolving field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;