import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Phone, Mail } from "lucide-react";

const About = () => {
  const personalInfo = [
    { icon: MapPin, label: "Location", value: "Adoni, Andhra Pradesh, India" },
    { icon: Phone, label: "Phone", value: "+91 9014709319" },
    { icon: Mail, label: "Email", value: "sangeethageeth48@gmail.com" },
  ];

  const interests = [
    "Reading technical articles and blogs",
    "Creative drawing and design for conceptual development",
    "Strategic games like chess for critical thinking"
  ];

  const languages = ["English", "Telugu", "Hindi"];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives my passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-full">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Professional Profile</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Aspiring Data Science and Software Development professional with strong programming, 
                analytical, and problem-solving skills. Proficient in Python, Java, SQL, and data 
                visualization tools with hands-on experience in academic projects.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Known for effective communication, leadership, and a collaborative mindset. Eager to 
                contribute to dynamic teams by leveraging technical knowledge, structured learning, 
                and innovative thinking.
              </p>
            </CardContent>
          </Card>

          {/* Contact & Details */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <info.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{info.label}:</span>
                      <span className="text-sm">{info.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="flex gap-2 flex-wrap">
                  {languages.map((language, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Interests</h3>
                <ul className="space-y-3">
                  {interests.map((interest, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{interest}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;