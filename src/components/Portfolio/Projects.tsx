import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Palette } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Color Detection Project",
      period: "May 2025",
      description: "Advanced image processing application that demonstrates sophisticated color detection algorithms. Built with Python, this project showcases computer vision techniques and real-time image analysis capabilities.",
      technologies: ["Python", "OpenCV", "Image Processing", "Computer Vision", "NumPy"],
      features: [
        "Real-time color detection and analysis",
        "Advanced image processing algorithms",
        "User-friendly interface for color identification",
        "Support for multiple image formats"
      ],
      icon: Palette,
      status: "Completed"
    }
  ];

  const upcomingProjects = [
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for visualizing complex datasets using Python and Tableau",
      technologies: ["Python", "Tableau", "SQL", "Data Visualization"]
    },
    {
      title: "Machine Learning Predictor",
      description: "ML model for predictive analytics using various algorithms and techniques",
      technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning"]
    },
    {
      title: "Web Application Portfolio",
      description: "Full-stack web application showcasing modern development practices",
      technologies: ["Java", "SQL", "HTML", "API Integration"]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of my technical projects demonstrating practical application of skills
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Current Projects</h3>
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover:scale-[1.02] transition-all duration-300 mb-8">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-xl">
                      <project.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <p className="text-muted-foreground">
                        {project.period} • {project.status}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                    Featured
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-primary/50 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button className="glow-effect">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Upcoming Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingProjects.map((project, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className="text-xs bg-muted/50 group-hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Badge variant="outline" className="border-accent/50 text-accent text-xs">
                    In Development
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;