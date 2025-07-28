import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/RaviiAithal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover-lift"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/ravikiran-aithal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover-lift"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        
        <div className="text-muted-foreground text-sm">
          <p className="mb-2">
            Built with <Heart className="inline h-4 w-4 text-primary mx-1" /> using React & Tailwind CSS
          </p>
          <p>© {currentYear} Ravikiran Aithal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;