import { Github, Linkedin, Download, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import React, { useEffect, useState } from "react";
import LeetCodeCard from "./LeetCodeCard";

type LeetCodeStats = {
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
};

const HeroSection = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);

  useEffect(() => {
    fetch("https://alfa-leetcode-api.onrender.com/RavikiranAithal/solved")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => setStats(null));
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full bg-secondary/10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-primary/5 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="animate-slide-up flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 ml-0 md:ml-24">
          {/* Profile Image */}
          <div className="flex-shrink-0 mb-8 md:mb-0 -mr-0 md:-mr-8">
            <img
              src="/profile.png"
              alt="Ravikiran Aithal"
              className="w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary shadow-2xl mx-auto"
            />
          </div>
          {/* Text Content */}
          <div className="flex-1 pl-0 md:pl-12">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 text-center md:text-left">
              <span className="gradient-text">Ravikiran</span>
              <br />
              <span className="text-foreground">Aithal</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 font-medium text-center md:text-left">
              AI & ML Engineer | Student at RVCE
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mb-12 leading-relaxed text-center md:text-left">
              Building intelligent, scalable solutions in ML and computer vision. 
              Passionate about research and real-world AI deployment that makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-start items-center mb-16">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover-glow group"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  className="border-border hover:border-primary hover:text-primary hover-lift"
                  asChild
                >
                  <a href="https://github.com/RaviiAithal" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-border hover:border-primary hover:text-primary hover-lift"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/ravikiran-aithal-76674519b/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* ...skill cards... */}
          <div className="glass p-4 sm:p-6 rounded-xl hover-lift group animate-slide-up flex flex-col h-full w-full min-w-0">
            {/* ...rest of your card... */}
          </div>
        </div>
        
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            aria-label="Scroll to About"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-transparent border-none p-0 m-0 cursor-pointer"
            style={{ outline: 'none' }}
          >
            <ChevronDown className="h-8 w-8 text-primary cursor-pointer transition-transform hover:scale-110" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
