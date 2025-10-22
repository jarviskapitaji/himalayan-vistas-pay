import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, Target, Users, Sparkles, Award, Leaf } from "lucide-react";
import teamSantokhImage from "@/assets/santokh.jpg";
import teamNeerajImage from "@/assets/neeraj.jpg";
import teamAaravImage from "@/assets/team-aarav.jpg";
import teamVipulImage from "@/assets/team-vipul.jpg";
import teamPankajImage from "@/assets/team-pankaj.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Every act of kindness ripples through the hills, strengthening our communities."
    },
    {
      icon: Target,
      title: "Sustainable Impact",
      description: "Creating programs that inspire long-term change for mountain communities."
    },
    {
      icon: Users,
      title: "Community-Led",
      description: "Built by young locals who understand the mountains and their needs."
    },
    {
      icon: Sparkles,
      title: "Joy & Purpose",
      description: "Blending entertainment with meaningful social causes for holistic growth."
    },
    {
      icon: Award,
      title: "Transparency",
      description: "Ensuring every contribution creates measurable, visible impact."
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Protecting and preserving the pristine beauty of Uttarakhand's ecosystems."
    }
  ];

  const team = [
    {
      name: "Dr. Santokh Singh Bisht",
      role: "President",
      image: teamSantokhImage,
      bio: "A distinguished economist and social reformer born in the serene hills of Nainital, Uttarakhand. Dr. Bisht completed his PhD in Economics from Kumaon University, sharpening his expertise in economic policies and development strategies tailored to Uttarakhand's unique socio-economic landscape. Today, Dr. Bisht is a renowned figure in Uttarakhand's cultural folk activities, having made a significant mark through numerous Uttarakhandi songs and Bollywood projects. His visionary contributions continue to drive innovation, sustainability, and growth in the region."
    },
    {
      name: "Neeraj Bisht",
      role: "Treasurer",
      image: teamNeerajImage,
      bio: "Currently a research scholar who completed his entire education in Nainital. An outstanding NCC cadet, Neeraj is a dynamic young individual actively engaged in social work within the city. His support is evident in every initiative aimed at the welfare of the hills and its people. Despite his youth, he possesses a mature outlook and a passionate drive to contribute meaningfully to society, ensuring that the essence of the mountains and human values remain vibrant."
    },
    {
      name: "Aarav",
      role: "Active Member",
      image: teamAaravImage,
      bio: "A dedicated volunteer bringing fresh perspectives and boundless energy to the Foundation's initiatives, working tirelessly for community development."
    },
    {
      name: "Vipul Bisht (Bobby)",
      role: "Active Member",
      image: teamVipulImage,
      bio: "Passionate about social change and youth empowerment, Vipul actively contributes to various programs connecting tradition with modern innovation."
    },
    {
      name: "Pankaj Gadhiya",
      role: "Active Member",
      image: teamPankajImage,
      bio: "A committed member driving grassroots initiatives and community engagement, ensuring every voice in the hills is heard and valued."
    }
  ];

  const focusAreas = [
    "Primary Sectors: Education, Agriculture & Environmental Conservation",
    "Secondary Sectors: Infrastructure, Tourism & Economic Growth",
    "Art & Culture: Heritage Festivals, Storytelling & Youth-Led Exhibitions",
    "Differently Abled & Children: Inclusive Programs, Adaptive Sports & Mentorship",
    "Disaster Management: Rapid Response Teams & Community Preparedness",
    "Aged/Elderly Care: Silver Smiles, Mobile Health Check-ups & Intergenerational Activities",
    "Health & Family Welfare: Free Clinics, Nutrition Workshops & Mental Health Support",
    "Labour & Human Rights: Fair Wage Advocacy & Women's Empowerment",
    "Panchayati Raj, Youth Affairs & Skill Development: Leadership Training & Job-Matching Fairs"
  ];

  const achievements = [
    "Blood Donation & Cleanliness Drives led by youth volunteers",
    "Shri Krishna Janmashtami Mahotsav - Youth motivation festival",
    "Maa Nanda Sunanda Devi Utsav - Flower showers & charitable donations",
    "Nainital's First Charitable Event - Bhakti-meets-entertainment extravaganza",
    "Uttarakhand's First Kumaoni Digital Ramleela Performance",
    "Reverse Migration Efforts - Transforming abandoned farmlands into thriving hubs"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-[image:var(--gradient-hero)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">About Yooo Pahad Foundation</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 animate-fade-in">
            Empowering Hills, Hearts, and Humanity
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-[var(--shadow-strong)] card-3d eco-glow border-primary/20">
              <CardContent className="pt-8 pb-8">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Nestled in the breathtaking hills of Nainital, Uttarakhand, <span className="font-bold text-primary">Yooo Pahad Foundation</span> is a vibrant initiative born from the passion and dedication of young, educated, and hardworking locals—true sons of the soil—who envisioned a brighter future for their mountains, their people, and humanity at large.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Founded five years ago by a close-knit group of youth who pooled their personal donations to kickstart this dream, the Foundation officially registered on <span className="font-semibold text-primary">September 9, 2025</span>, marking a milestone in its journey toward sustainable impact. What began as a spark of community spirit has grown into a beacon of hope, fostering love, mutual support, and harmony among the people of the hills and beyond.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  In a fast-paced modern world where traditions fade and connections weaken, Yooo Pahad Foundation stands tall, weaving entertainment with meaningful social causes to remind us all of our shared roots and responsibilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

       {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Team</h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Meet the passionate individuals driving change in the mountains
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-strong)] card-3d eco-glow smooth-transition overflow-hidden border-primary/20">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover smooth-transition hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold text-secondary">{member.role}</p>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Core Values</h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Building Bridges of Kindness: Every act of kindness ripples through the hills, strengthening our communities and healing our world.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-strong)] card-3d eco-glow smooth-transition border-primary/10">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mb-3" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Key Focus Areas</h2>
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-[var(--shadow-strong)] card-3d border-primary/20">
              <CardContent className="pt-8 pb-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Yooo Pahad Foundation operates across a diverse spectrum of sectors, channeling energy into holistic development:
                </p>
                <ul className="space-y-4">
                  {focusAreas.map((area, index) => (
                    <li key={index} className="flex items-start smooth-transition hover:translate-x-2">
                      <Leaf className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <span className="text-base text-muted-foreground">{area}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Journey & Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Journey So Far</h2>
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-[var(--shadow-strong)] card-3d eco-glow border-primary/20">
              <CardContent className="pt-8 pb-8">
                <p className="text-lg text-muted-foreground mb-8">
                  From humble beginnings, Yooo Pahad Foundation has woven magic into the hills through various transformative initiatives:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-secondary/10 rounded-lg p-4 border-l-4 border-secondary smooth-transition hover:translate-x-2">
                      <p className="font-semibold text-secondary">{achievement}</p>
                    </div>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mt-8">
                  We've pioneered reverse migration efforts, transforming abandoned farmlands into thriving, elder-friendly hubs where families reunite, economies bloom, and the hills breathe easier. Our "Lovely Hood Mission" revives traditional farming in nearby villages, encouraging young hearts back home to till the soil side by side with elders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     

      {/* Call to Action */}
      <section className="py-16 bg-[image:var(--gradient-hero)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Pahad Movement</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
            Yooo Pahad Foundation isn't just an organization—it's a family, a force for good that's rapidly capturing hearts across Nainital and beyond. Your kindness can change the hills.
          </p>
          <p className="text-lg max-w-4xl mx-auto text-white/90">
            Ready to add your kindness to our canvas? Whether you're a storyteller, a fundraiser, or just someone with a big heart, your unique spark can help us tackle society's shortcomings together. Let's turn the hills greener, our communities stronger, and our world a little more loving—one shared smile at a time. 🌄❤
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;