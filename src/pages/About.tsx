import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";
import villageImage from "@/assets/village-community.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We believe in leading with empathy and understanding the unique needs of mountain communities."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Our programs are designed and implemented with active participation from local communities."
    },
    {
      icon: Target,
      title: "Sustainable Impact",
      description: "We focus on creating long-term, sustainable solutions rather than temporary fixes."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We maintain complete transparency in our operations and utilization of funds."
    }
  ];

  const team = [
    { name: "Rajesh Kumar", role: "Founder & Director", bio: "20+ years in community development" },
    { name: "Priya Sharma", role: "Education Head", bio: "Former principal with passion for mountain education" },
    { name: "Amit Singh", role: "Environmental Lead", bio: "Environmental scientist and conservation expert" },
    { name: "Meera Patel", role: "Operations Manager", bio: "NGO management specialist" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${villageImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Learn about our journey, mission, and the dedicated team working to empower mountain communities
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-[var(--shadow-soft)]">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To empower mountain communities in Himachal Pradesh, Nainital, and across the Himalayan region 
                  through quality education, environmental conservation, and sustainable development programs. 
                  We work hand-in-hand with local communities to create lasting positive change that respects 
                  their cultural heritage while embracing progress.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-[var(--shadow-soft)]">
              <CardHeader>
                <Eye className="h-12 w-12 text-secondary mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We envision thriving, self-sufficient mountain communities that maintain their rich cultural 
                  heritage while having access to quality education, healthcare, and sustainable livelihood 
                  opportunities. A future where the mountains and their people flourish together in harmony 
                  with nature.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                YOOO Pahad Foundation was established in 2015 by a group of passionate individuals who grew up in 
                mountain communities and witnessed firsthand the challenges faced by people living in these remote areas. 
                What started as a small initiative to provide educational support to children in three villages has now 
                grown into a comprehensive development program serving over 25 communities.
              </p>
              <p className="mb-4">
                Over the years, we've expanded our focus from education to include environmental conservation, 
                women's empowerment, healthcare access, and sustainable livelihood programs. Each initiative is 
                designed with deep respect for local culture and traditions, ensuring that development doesn't come 
                at the cost of losing the unique identity of mountain communities.
              </p>
              <p>
                Today, we're proud to have touched the lives of thousands of people, but we know there's much more 
                work to be done. With the support of generous donors and dedicated volunteers, we continue to work 
                towards our vision of prosperous, sustainable mountain communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-[var(--shadow-strong)] transition-all duration-300">
                <CardHeader>
                  <value.icon className="h-12 w-12 mx-auto text-primary mb-2" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-[var(--shadow-strong)] transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
