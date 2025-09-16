import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Palette, Users, Clock, Lightbulb } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 85, icon: "🐍" },
    { name: "Java", level: 80, icon: "☕" },
    { name: "SQL & MySQL", level: 75, icon: "🗄️" },
    { name: "Data Analytics", level: 85, icon: "📊" },
    { name: "Machine Learning", level: 70, icon: "🤖" },
    { name: "Tableau", level: 75, icon: "📈" },
    { name: "Git & GitHub", level: 80, icon: "🔧" },
    { name: "HTML", level: 75, icon: "🌐" }
  ];

  const professionalSkills = [
    {
      icon: Users,
      title: "Leadership & Team Collaboration",
      description: "Experience leading projects and collaborating effectively with diverse teams"
    },
    {
      icon: Lightbulb,
      title: "Analytical Thinking & Problem Solving",
      description: "Strong analytical mindset with systematic approach to complex problems"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Excellent organizational skills with ability to prioritize and meet deadlines"
    },
    {
      icon: Palette,
      title: "Adaptability & Continuous Learning",
      description: "Quick to adapt to new technologies and continuously expanding skill set"
    }
  ];

  const domains = [
    "Data Science",
    "Software Development", 
    "Data Analytics",
    "Data Visualization",
    "Object-Oriented Programming",
    "API Integration",
    "Exploratory Data Analysis",
    "Machine Learning"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and professional competencies
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{skill.icon}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Professional Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {professionalSkills.map((skill, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <skill.icon className="h-5 w-5 text-primary" />
                    </div>
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Domain Expertise */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Domain Expertise</h3>
          <Card className="glass-card">
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {domains.map((domain, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-colors px-4 py-2 text-sm"
                  >
                    {domain}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;