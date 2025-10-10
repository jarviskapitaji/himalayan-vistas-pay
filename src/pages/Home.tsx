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
          className="absolute inset-0 bg-cover bg-center parallax-slow"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up drop-shadow-lg">
            Empowering Mountain Communities
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto animate-slide-up drop-shadow-md">
            Building sustainable futures for the people of Himachal Pradesh, Nainital, and the greater Himalayan region
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/donations">
              <Button variant="secondary" size="lg" className="text-lg px-8 animate-glow shadow-lg hover:scale-105 smooth-transition">
                Donate Now
              </Button>
            </Link>
            <Link to="/work">
              <Button variant="default" size="lg" className="text-lg px-8 shadow-lg hover:scale-105 smooth-transition">
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
              <Card key={index} className="text-center card-3d eco-glow bg-card/95 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto mb-2 text-primary animate-float">
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
            <Card className="overflow-hidden card-3d eco-glow group bg-card/95 backdrop-blur-sm">
              <div className="overflow-hidden relative">
                <img src={educationImage} alt="Education Program" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary smooth-transition">Education Initiative Expansion</CardTitle>
                <CardDescription>We've expanded our education program to reach 5 more villages</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our education initiative now supports over 500 children across mountain communities, providing them with 
                  quality education resources and opportunities.
                </p>
                <Link to="/work">
                  <Button variant="outline" className="hover:bg-primary hover:text-white hover:border-primary smooth-transition">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden card-3d eco-glow group bg-card/95 backdrop-blur-sm">
              <div className="overflow-hidden relative">
                <img src={environmentImage} alt="Environmental Work" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary smooth-transition">Environmental Conservation Drive</CardTitle>
                <CardDescription>10,000 trees planted this season with community participation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our reforestation program continues to make a significant impact on the local ecosystem, involving 
                  community members in sustainable environmental practices.
                </p>
                <Link to="/work">
                  <Button variant="outline" className="hover:bg-primary hover:text-white hover:border-primary smooth-transition">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[image:var(--gradient-hero)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Your contribution can help us continue our mission to empower mountain communities and create sustainable futures.
          </p>
          <Link to="/donations">
            <Button variant="secondary" size="lg" className="text-lg px-8 animate-glow shadow-2xl hover:scale-110 bounce-transition">
              Make a Donation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
