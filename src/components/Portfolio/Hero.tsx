import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile image placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full glass-card flex items-center justify-center animate-glow">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-primary-foreground">
              VS
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            <span className="gradient-text">Vanneal Sangeetha</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Data Science & Software Development Professional
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Aspiring professional with strong programming, analytical, and problem-solving skills. 
            Proficient in Python, Java, SQL, and data visualization tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="glow-effect transition-all duration-300 hover:scale-105">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/vanneal-sangeetha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <Linkedin className="h-6 w-6 text-primary" />
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <Github className="h-6 w-6 text-primary" />
            </a>
            <a 
              href="mailto:sangeethageeth48@gmail.com"
              className="p-3 glass-card rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <Mail className="h-6 w-6 text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <div className="w-2 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;