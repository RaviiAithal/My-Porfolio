import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass shadow-lg py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="gradient-text text-xl font-bold">
          RA
        </div>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <a
          href="/resume.pdf"
          download
          className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-lg transition-all duration-300 font-medium hover-glow"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;