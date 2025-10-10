import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, TreePine, GraduationCap, Users } from "lucide-react";
import heroImage from "@/assets/hero-mountains.jpg";
import educationImage from "@/assets/education-program.jpg";
import environmentImage from "@/assets/environment-work.jpg";

const Home = () => {
  const stats = [
    { icon: Users, label: "Communities Served", value: "25+" },
    { icon: GraduationCap, label: "Students Supported", value: "500+" },
    { icon: TreePine, label: "Trees Planted", value: "10,000+" },
    { icon: Heart, label: "Active Volunteers", value: "100+" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Empowering Mountain Communities
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Building sustainable futures for the people of Himachal Pradesh, Nainital, and the greater Himalayan region
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donations">
              <Button variant="secondary" size="lg" className="text-lg px-8">
                Donate Now
              </Button>
            </Link>
            <Link to="/work">
              <Button variant="default" size="lg" className="text-lg px-8">
                Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Mission & Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              YOOO Pahad Foundation is committed to creating lasting positive change in mountain communities through education, 
              environmental conservation, and sustainable development initiatives. We believe in empowering local communities 
              to build their own prosperous and sustainable futures.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our vision is to see thriving, self-sufficient mountain communities that preserve their rich cultural heritage 
              while embracing sustainable progress and development.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center transition-all hover:shadow-[var(--shadow-strong)] hover:scale-105 duration-300">
                <CardHeader>
                  <div className="mx-auto mb-2 text-primary">
                    <stat.icon className="h-12 w-12" />
                  </div>
                  <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
                  <CardDescription className="text-base">{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Latest Updates</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-[var(--shadow-strong)] transition-all duration-300 group">
              <div className="overflow-hidden">
                <img src={educationImage} alt="Education Program" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <CardHeader>
                <CardTitle>Education Initiative Expansion</CardTitle>
                <CardDescription>We've expanded our education program to reach 5 more villages</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our education initiative now supports over 500 children across mountain communities, providing them with 
                  quality education resources and opportunities.
                </p>
                <Link to="/work">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-[var(--shadow-strong)] transition-all duration-300 group">
              <div className="overflow-hidden">
                <img src={environmentImage} alt="Environmental Work" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <CardHeader>
                <CardTitle>Environmental Conservation Drive</CardTitle>
                <CardDescription>10,000 trees planted this season with community participation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our reforestation program continues to make a significant impact on the local ecosystem, involving 
                  community members in sustainable environmental practices.
                </p>
                <Link to="/work">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[image:var(--gradient-hero)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your contribution can help us continue our mission to empower mountain communities and create sustainable futures.
          </p>
          <Link to="/donations">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Make a Donation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
