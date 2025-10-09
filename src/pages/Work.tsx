import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, TreePine, Heart, Users, Lightbulb, Shield } from "lucide-react";
import educationImage from "@/assets/education-program.jpg";
import environmentImage from "@/assets/environment-work.jpg";
import nainitalImage from "@/assets/nainital-lake.jpg";

const Work = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education Programs",
      description: "Providing quality education resources, scholarships, and learning materials to children in mountain communities.",
      impact: "500+ students supported annually",
      image: educationImage
    },
    {
      icon: TreePine,
      title: "Environmental Conservation",
      description: "Reforestation drives, sustainable farming practices, and waste management initiatives.",
      impact: "10,000+ trees planted",
      image: environmentImage
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Mobile health clinics, health awareness camps, and support for medical emergencies.",
      impact: "Monthly health camps in 15 villages",
      image: nainitalImage
    },
    {
      icon: Users,
      title: "Women's Empowerment",
      description: "Skill development programs, self-help groups, and micro-enterprise support for women.",
      impact: "200+ women entrepreneurs supported"
    },
    {
      icon: Lightbulb,
      title: "Sustainable Livelihoods",
      description: "Vocational training, organic farming support, and eco-tourism development.",
      impact: "50+ families with new income sources"
    },
    {
      icon: Shield,
      title: "Disaster Preparedness",
      description: "Community training for natural disaster response and infrastructure development.",
      impact: "25 communities trained"
    }
  ];

  const events = [
    {
      title: "Annual Mountain Festival",
      date: "December 2024",
      description: "Celebrating mountain culture, arts, and community achievements"
    },
    {
      title: "Tree Plantation Drive",
      date: "Quarterly",
      description: "Community-wide environmental conservation initiative"
    },
    {
      title: "Education Fair",
      date: "January 2025",
      description: "Scholarship distribution and educational resource exhibition"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-[image:var(--gradient-hero)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work & Impact</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Discover how we're making a difference in mountain communities through diverse programs and initiatives
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-strong)] transition-all duration-300">
                {program.image && (
                  <img src={program.image} alt={program.title} className="w-full h-48 object-cover rounded-t-lg" />
                )}
                <CardHeader>
                  <program.icon className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-secondary/10 rounded-lg p-3 border-l-4 border-secondary">
                    <p className="text-sm font-semibold text-secondary">{program.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">25+</div>
                <p className="text-muted-foreground">Communities Served</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">1000+</div>
                <p className="text-muted-foreground">Lives Impacted</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Active Volunteers</p>
              </div>
            </div>

            <Card className="shadow-[var(--shadow-soft)]">
              <CardHeader>
                <CardTitle>Recent Success Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In the village of Dharamkot, our education program helped 15-year-old Anita become the first girl 
                  from her village to complete higher secondary education. Today, she's pursuing engineering and 
                  inspiring other girls in her community to dream big.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Stories like Anita's fuel our passion and remind us why this work matters. Every child educated, 
                  every tree planted, and every family empowered contributes to building stronger, more resilient 
                  mountain communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-strong)] transition-all duration-300">
                <CardHeader>
                  <div className="text-sm font-semibold text-secondary mb-2">{event.date}</div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Work;
