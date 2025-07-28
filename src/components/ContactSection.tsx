import { Mail, MessageSquare, Send, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-card/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can work together on exciting AI projects
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass p-6 rounded-xl hover-lift">
                <div className="flex items-center mb-4">
                  <Mail className="h-8 w-8 text-primary mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email Me</h3>
                    <p className="text-muted-foreground">Let's start a conversation</p>
                  </div>
                </div>
                <a 
                  href="mailto:ravikiranaithal24@gmail.com"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  ravikiranaithal24@gmail.com
                </a>
              </div>
              
              <div className="glass p-6 rounded-xl hover-lift">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-8 w-8 text-secondary mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Connect</h3>
                    <p className="text-muted-foreground">Find me on social platforms</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/ravikiran-aithal-76674519b/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    asChild
                  >
                    <a href="https://github.com/RaviiAithal" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Contact CTA */}
            <div className="flex items-center justify-center">
              <div className="glass p-8 rounded-xl text-center max-w-md">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
                  <Send className="h-12 w-12 text-primary" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Ready to Collaborate?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you have a project in mind, want to discuss AI/ML opportunities, 
                  or just want to connect, I'd love to hear from you.
                </p>
                
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover-glow w-full group"
                  asChild
                >
                  <a href="mailto:ravikiranaithal24@gmail.com">
                    <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Send Message
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;