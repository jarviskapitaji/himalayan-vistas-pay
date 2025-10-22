import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, TreePine, Heart, Users, Lightbulb, Shield, Sparkles, Sprout, TrendingUp, Globe, Calendar, Youtube } from "lucide-react";
import { useState } from "react";
import educationImage from "@/assets/education-program.jpg";
import environmentImage from "@/assets/environment-work.jpg";
import nainitalImage from "@/assets/nainital-lake.jpg";

const Work = () => {
  const [youtubeLinks] = useState([
    { id: "dQw4w9WgXcQ", title: "Annual Mountain Festival 2024", description: "Celebrating mountain culture and community achievements" },
    { id: "dQw4w9WgXcQ", title: "Tree Plantation Drive", description: "Community-wide environmental conservation initiative" },
    { id: "dQw4w9WgXcQ", title: "Special Children Empowerment Event", description: "Inclusive program showcasing talents of differently-abled children" },
    { id: "dQw4w9WgXcQ", title: "Kumaoni Digital Ramleela", description: "Uttarakhand's first digital cultural performance" },
    { id: "dQw4w9WgXcQ", title: "Women Empowerment Workshop", description: "Skills training and micro-enterprise support sessions" },
    { id: "dQw4w9WgXcQ", title: "Blood Donation Camp", description: "Youth-led community health initiative" }
  ]);

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

  const upcomingInitiatives = [
    {
      icon: Sparkles,
      title: "Empowerment Platform for Special Children",
      description: "Creating nurturing spaces for mentally and physically challenged children through tailored workshops, adaptive sports events, and inclusive community gatherings. Partnering with local experts to provide personalized support, fostering emotional growth and family involvement.",
      highlight: "Turning isolation into joy for brave souls"
    },
    {
      icon: GraduationCap,
      title: "Adoption and Renovation of Schools & Hospitals",
      description: "Identifying and revitalizing underserved institutions in remote areas—transforming dilapidated classrooms into safe havens of learning and outdated clinics into beacons of healing. Installing solar-powered infrastructure, modern equipment, and teacher training programs.",
      highlight: "Restoring dignity and hope to mountain families"
    },
    {
      icon: Globe,
      title: "Revival of Folk Languages",
      description: "Youth-centric programs bridging generations through innovative digital platforms, school curricula integration, and community storytelling. Blending traditional folklore with contemporary media like podcasts, music festivals, and social challenges.",
      highlight: "Preserving linguistic heritage through viral anthems"
    },
    {
      icon: Users,
      title: "Multi-Faceted Awareness Campaigns",
      description: "Comprehensive community education on critical topics: safety workshops for young girls, disaster management training, skill development for employment, and strategies to showcase local artisan products globally. Delivered via mobile units, online modules, and village melas.",
      highlight: "Empowering everyone from elders to toddlers"
    },
    {
      icon: TreePine,
      title: "Heritage & Cultural Preservation Events",
      description: "Immersive festivals, workshops, and exhibitions celebrating dharohar and sanskriti—from ancient temple rituals to folk dances. Collaborating with historians and artists to document oral histories and restore historical sites with eco-friendly practices.",
      highlight: "Reviving the heartbeat of the Pahads"
    },
    {
      icon: Sprout,
      title: "Environmental Conservation & Green Livelihoods",
      description: "Launching reforestation drives, watershed management projects, and eco-tourism training, empowering locals to protect their homeland while creating sustainable green jobs and fostering emotional bonds with nature.",
      highlight: "Children playing in thriving ecosystems"
    },
    {
      icon: Heart,
      title: "Women's Leadership Programs",
      description: "Vocational training, health camps, and leadership workshops providing financial literacy, reproductive health support, and anti-domestic violence advocacy. Creating safe spaces for growth and empowerment.",
      highlight: "Leading cooperatives, inspiring villages"
    },
    {
      icon: TrendingUp,
      title: "Youth Innovation & Entrepreneurship Hubs",
      description: "Establishing co-working spaces in hill towns with mentorship, startup funding, and tech incubators tailored to local needs—from agro-tourism apps to handicrafts e-commerce platforms.",
      highlight: "Breaking cycles of migration with purpose"
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
    },
    {
      title: "Special Children Talent Show",
      date: "February 2025",
      description: "Inclusive platform showcasing abilities of differently-abled children"
    },
    {
      title: "Folk Language Revival Festival",
      date: "March 2025",
      description: "Youth-led cultural programs celebrating regional dialects"
    },
    {
      title: "Women Empowerment Summit",
      date: "April 2025",
      description: "Leadership workshops and micro-enterprise support sessions"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-[image:var(--gradient-hero)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">Our Work & Impact</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90 animate-fade-in">
            Discover how we're making a difference in mountain communities through diverse programs and initiatives
          </p>
        </div>
      </section>

      {/* Current Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Current Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-strong)] card-3d eco-glow smooth-transition border-primary/20">
                {program.image && (
                  <div className="overflow-hidden rounded-t-lg">
                    <img src={program.image} alt={program.title} className="w-full h-48 object-cover smooth-transition hover:scale-110" />
                  </div>
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

      {/* Upcoming Strategic Initiatives */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Upcoming Strategic Initiatives</h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
            Transformative plans rooted in compassion, cultural preservation, and sustainable development for Uttarakhand's mountain communities
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingInitiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-strong)] card-3d eco-glow smooth-transition border-primary/20">
                <CardHeader>
                  <initiative.icon className="h-12 w-12 text-primary mb-3" />
                  <CardTitle className="text-xl mb-2">{initiative.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{initiative.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm font-semibold text-primary italic">✨ {initiative.highlight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center card-3d eco-glow p-6 rounded-lg bg-card shadow-[var(--shadow-soft)]">
                <div className="text-5xl font-bold text-primary mb-2">25+</div>
                <p className="text-muted-foreground">Communities Served</p>
              </div>
              <div className="text-center card-3d eco-glow p-6 rounded-lg bg-card shadow-[var(--shadow-soft)]">
                <div className="text-5xl font-bold text-primary mb-2">1000+</div>
                <p className="text-muted-foreground">Lives Impacted</p>
              </div>
              <div className="text-center card-3d eco-glow p-6 rounded-lg bg-card shadow-[var(--shadow-soft)]">
                <div className="text-5xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Active Volunteers</p>
              </div>
            </div>

            <Card className="shadow-[var(--shadow-strong)] card-3d border-primary/20">
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

      {/* Events Gallery with YouTube Videos */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Youtube className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Events Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch our inspiring events, community celebrations, and transformative initiatives in action
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {youtubeLinks.map((video, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-strong)] card-3d eco-glow smooth-transition overflow-hidden border-primary/20">
                <div className="relative aspect-video bg-muted">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription className="text-sm">{video.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Want to stay updated with more videos? Subscribe to our YouTube channel and follow our journey!
            </p>
            <a 
              href="https://www.youtube.com/@yooopahad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 smooth-transition hover:scale-105 shadow-[var(--shadow-soft)]"
            >
              <Youtube className="h-5 w-5" />
              Visit Our YouTube Channel
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us in making a difference through these upcoming community events
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-strong)] card-3d eco-glow smooth-transition border-primary/20">
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

      {/* Call to Action */}
      <section className="py-16 bg-[image:var(--gradient-hero)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            These initiatives represent lifelines of hope for Uttarakhand's forgotten corners. By donating, volunteering, or partnering with Yooo Pahad Foundation, you become part of stories that mend hearts and build futures. Together, let's honor the indomitable spirit of the hills.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Work;