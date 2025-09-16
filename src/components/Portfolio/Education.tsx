import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering (Data Science)",
      institution: "St. John's College of Engineering and Technology",
      location: "Yerrakota, India",
      period: "2022 - 2026",
      grade: "77% CGPA",
      status: "Current",
      description: "Specialized in Data Science with comprehensive coursework in programming, algorithms, machine learning, and data analytics."
    },
    {
      degree: "Intermediate",
      field: "Science",
      institution: "Dr. B.R. Ambedkar Gurukulam Junior College",
      location: "Adoni, India", 
      period: "2020 - 2022",
      grade: "80% CGPA",
      status: "Completed",
      description: "Strong foundation in mathematics, physics, and chemistry with focus on analytical thinking."
    },
    {
      degree: "Secondary School",
      field: "General Studies",
      institution: "Z P High School",
      location: "Adoni, India",
      period: "2019 - 2020", 
      grade: "90% CGPA",
      status: "Completed",
      description: "Achieved excellent academic performance with strong fundamentals across all subjects."
    }
  ];

  const certificates = [
    {
      title: "Data Science Internship Certificate",
      issuer: "SkillDzire",
      type: "Internship",
      icon: "📊"
    },
    {
      title: "Data Analytics Internship Certificate", 
      issuer: "Slash Mark",
      type: "Internship",
      icon: "📈"
    },
    {
      title: "IoT Course Certificate",
      issuer: "NPTEL",
      type: "Course Completion",
      icon: "🔗"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional certifications in technology and data science
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < education.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent" />
                )}
                
                <Card className="glass-card hover:scale-[1.02] transition-all duration-300 ml-4">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/20 rounded-xl flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <CardTitle className="text-xl">{edu.degree}</CardTitle>
                          <Badge 
                            variant={edu.status === "Current" ? "default" : "secondary"}
                            className={edu.status === "Current" ? "bg-primary text-primary-foreground" : ""}
                          >
                            {edu.status}
                          </Badge>
                        </div>
                        <p className="text-lg text-primary font-medium mb-1">{edu.field}</p>
                        <p className="text-muted-foreground font-medium">{edu.institution}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-20 space-y-3">
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                    
                    <div className="flex flex-wrap gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="font-medium">{edu.grade}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <span className="text-4xl">{cert.icon}</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-muted-foreground mb-3">{cert.issuer}</p>
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    {cert.type}
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

export default Education;