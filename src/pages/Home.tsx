import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, TreePine, GraduationCap, Users } from "lucide-react";
import educationImage from "@/assets/education-program.jpg";
import environmentImage from "@/assets/environment-work.jpg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import carouselHome from "@/assets/carousel-home.jpg";
import carouselEarthday from "@/assets/carousel-earthday.jpg";
import carouselJamastmi from "@/assets/carousel-jamastmi.jpg";

const Home = () => {
  const stats = [
    { icon: Users, label: "Communities Served", value: "25+" },
    { icon: GraduationCap, label: "Students Supported", value: "500+" },
    { icon: TreePine, label: "Trees Planted", value: "10,000+" },
    { icon: Heart, label: "Active Volunteers", value: "100+" },
  ];

  const carouselImages = [
    carouselHome,
    carouselEarthday,
    carouselJamastmi
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 w-full h-full">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full h-full"
          >
            <CarouselContent className="h-full -ml-0">
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="h-full pl-0 min-h-[700px]">
                  <div className="relative w-full h-full min-h-[700px]">
                    <img
                      src={image}
                      alt={`Hero slide ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/60 to-primary/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up leading-tight">
              WE HELP PEOPLE<br />AROUND THE HILLS
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-8 animate-slide-up max-w-xl leading-relaxed">
              We help hundreds of children to get their education. Now we need your help to continue this mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <Link to="/donations">
                <Button variant="secondary" size="lg" className="text-lg px-10 py-6 animate-glow shadow-2xl hover:scale-105 smooth-transition font-semibold">
                  DONATE NOW →
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Actions Sidebar */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 animate-slide-left">
          <Link to="/work">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-2xl smooth-transition hover:scale-105 cursor-pointer group">
              <Users className="h-8 w-8 text-primary mb-2 group-hover:scale-110 smooth-transition" />
              <h3 className="font-bold text-sm mb-1">WE HELP PEOPLE</h3>
              <p className="text-xs text-muted-foreground">What our team has done</p>
            </div>
          </Link>
          <Link to="/about">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-2xl smooth-transition hover:scale-105 cursor-pointer group">
              <Heart className="h-8 w-8 text-primary mb-2 group-hover:scale-110 smooth-transition" />
              <h3 className="font-bold text-sm mb-1">BECOME A VOLUNTEER</h3>
              <p className="text-xs text-muted-foreground">Join our mission</p>
            </div>
          </Link>
          <Link to="/donations">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl hover:shadow-2xl smooth-transition hover:scale-105 cursor-pointer group">
              <GraduationCap className="h-8 w-8 text-primary mb-2 group-hover:scale-110 smooth-transition" />
              <h3 className="font-bold text-sm mb-1">DONATE NOW</h3>
              <p className="text-xs text-muted-foreground">We spend wisely for them</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-8 card-3d eco-glow hover:shadow-2xl smooth-transition group border-primary/20">
              <Heart className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 smooth-transition" />
              <CardTitle className="text-2xl mb-3">GIVE DONATION</CardTitle>
              <CardDescription className="text-base mb-6">
                With your help, we'll be able to go beyond the mountains and reach more children in need.
              </CardDescription>
              <Link to="/donations">
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-white smooth-transition">
                  Learn More →
                </Button>
              </Link>
            </Card>

            <Card className="text-center p-8 card-3d eco-glow hover:shadow-2xl smooth-transition group border-primary/20">
              <Users className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 smooth-transition" />
              <CardTitle className="text-2xl mb-3">BECOME A VOLUNTEER</CardTitle>
              <CardDescription className="text-base mb-6">
                You can help a volunteer, a volunteer can help a village, and a village can change the world.
              </CardDescription>
              <Link to="/about">
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-white smooth-transition">
                  Join Us →
                </Button>
              </Link>
            </Card>

            <Card className="text-center p-8 card-3d eco-glow hover:shadow-2xl smooth-transition group border-primary/20">
              <GraduationCap className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 smooth-transition" />
              <CardTitle className="text-2xl mb-3">SUPPORT EDUCATION</CardTitle>
              <CardDescription className="text-base mb-6">
                You can help by teaching something special for hill children and changing their future.
              </CardDescription>
              <Link to="/work">
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-white smooth-transition">
                  See Impact →
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Mission & Vision</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 card-3d eco-glow border-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  YOOO Pahad Foundation is committed to creating lasting positive change in mountain communities through education, 
                  environmental conservation, and sustainable development initiatives. We believe in empowering local communities 
                  to build their own prosperous and sustainable futures.
                </p>
              </Card>
              <Card className="p-8 card-3d eco-glow border-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our vision is to see thriving, self-sufficient mountain communities that preserve their rich cultural heritage 
                  while embracing sustainable progress and development. We envision hills where every child has access to quality education 
                  and every family lives with dignity.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 animate-float">
                  <stat.icon className="h-14 w-14 mx-auto" />
                </div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Updates</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
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
                <CardDescription>50+ trees planted this season with community participation</CardDescription>
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
      <section className="py-24 bg-gradient-to-r from-primary via-primary/95 to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-white/95 mb-10 leading-relaxed drop-shadow-md">
              Your contribution can help us continue our mission to empower mountain communities and create sustainable futures.
              Every donation, no matter the size, brings hope to families in the hills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donations">
                <Button variant="secondary" size="lg" className="text-lg px-12 py-6 animate-glow shadow-2xl hover:scale-110 bounce-transition font-semibold">
                  DONATE NOW →
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-lg px-12 py-6 bg-white hover:bg-white/90 text-primary border-2 border-white shadow-2xl hover:scale-110 bounce-transition font-semibold">
                  BECOME A VOLUNTEER
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
