import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vanneal-sangeetha",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:sangeethageeth48@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">Vanneal Sangeetha</h3>
            <p className="text-sm text-muted-foreground">
              Data Science & Software Development Professional
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4 text-primary" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by Vanneal Sangeetha
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
    </footer>
  );
};

export default Footer;