import { useState } from "react";
import teamNeerajImage from "@/assets/neeraj.jpg";
import teamSantokhImage from "@/assets/santokh.jpg";
import teamSantokh2Image from "@/assets/santokh2.jpg";
import teamAaravImage from "@/assets/aarav.jpg";
import teamPankajImage from "@/assets/pankajgadhiya.jpg";
import teamVipulImage from "@/assets/team-vipul.jpg";
import teamSagarImage from "@/assets/sagarsonkar.jpg";
import deepaPulsImage from "@/assets/deepakpuls.jpg";
import deepaBishtImage from "@/assets/deepa.jpg";
import shivaBishtImage from "@/assets/shiva.jpg";
import jitendraMartoliyaImage from "@/assets/jitendar.jpg";
import arjunBoharaImage from "@/assets/arjun.jpg";
import lokeshBishtImage from "@/assets/lokesh.jpg";
import deepakJoshiImage from "@/assets/deepakjoshi.jpg";
import dineshPandeyImage from "@/assets/dinesh pandey.jpg";
import abhishekTiwariImage from "@/assets/abhitiwari.jpg";
import deepakThapaImage from "@/assets/deepakthapa.jpg";
import deepakBishtFundImage from "@/assets/deepakbisht.jpg";
import himanshuBishtImage from "@/assets/himanshubisht.jpg";
import amitVidhyarthiImage from "@/assets/amitvidyarti.jpg";
import chandarKantJoshiImage from "@/assets/chetan.jpg";
import manojKumarImage from "@/assets/manojkumar.jpg";
import vipulBishtImage from "@/assets/vipulbisht.jpg";
import deeptiBoraImage from "@/assets/deeptibora.jpg";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Heart, Leaf, Sparkles, Target, Users, ChevronDown, ChevronUp } from "lucide-react";

// Helper to generate simple SVG avatar data-URIs (initials) for members
const avatarSvgDataUri = (name: string, bg = "#2f8554") => {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800'><rect width='100%' height='100%' fill='${bg}'/><text x='50%' y='50%' dy='.08em' text-anchor='middle' font-family='Inter, Roboto, Arial, sans-serif' font-size='320' fill='#fff'>${initials}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const About = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

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

  // Core Leadership Team
  const coreTeam = [
    {
      name: "Dr. Santokh Singh Bisht",
      role: "President",
      image: teamSantokhImage,
      bio: "President Dr. Santokh Singh Bisht, a distinguished economist and social reformer, was born in the serene hills of Nainital, Uttarakhand. His early education in this picturesque town laid the foundation for his lifelong dedication to knowledge and community upliftment. From his formative years, Dr. Bisht has been passionately committed to social service and public awareness initiatives, tirelessly working to bring about positive change in society. He completed his PhD in Economics from Kumaon University, sharpening his expertise in economic policies and development strategies tailored to Uttarakhand's unique socio-economic landscape. Today, Dr. Bisht is a renowned figure in Uttarakhand's cultural folk activities. He has made a significant mark through numerous Uttarakhandi songs and Bollywood projects. His work and reputation have gained widespread recognition not only in Nainital but across Uttarakhand. He has connected with many people, fostering a sense of community, and has ambitious plans for the future. His visionary contributions continue to drive innovation, sustainability, and growth. With a blend of academic rigor and grassroots activism, he remains an inspiring force for progress and empowerment in the region."
    },
    {
      name: "Sagar Sonker",
      role: "Secretary",
      image: teamSagarImage,
      bio: "Sagar Sonker is a dedicated secretary committed to organizational excellence and community development. His meticulous approach to administration ensures smooth operations while maintaining strong connections with community members."
    },
    {
      name: "Deepak Puls",
      role: "Vice President",
      image: deepaPulsImage,
      bio: "A dedicated volunteer bringing fresh perspectives and boundless energy to the Foundation's initiatives, working tirelessly for community development."
    },
    {
      name: "Deepa Bisht",
      role: "Female Vice President",
      image: deepaBishtImage,
      bio: "Passionate about social change and youth empowerment, Deepa actively contributes to various programs connecting tradition with modern innovation."
    },
    {
      name: "Neeraj Bisht",
      role: "Treasurer",
      image: teamNeerajImage,
      bio: "Neeraj Bisht is a dynamic young leader whose deep roots in Nainital fuel his passionate commitment to the welfare of the hills and its people. Currently pursuing his Ph.D. in History, Neeraj's work extends far beyond academia, actively engaging with and conducting research in the fields of tribal communities and Kumaoni ballad and folk songs. His early career was marked by exceptional distinction as an NCC cadet, where his outstanding performance led to participation in national camps and the honor of briefing high-level dignitaries, including Defence Chiefs and the Defence Minister. This experience instilled in him a mature, disciplined approach that he now applies to social work. Neeraj's vision is clear: to ensure the vibrant essence of the mountains and foundational human values remain at the forefront of every initiative. He brings a unique blend of youthful energy, disciplined leadership, and a profound commitment to his community's heritage to his role as Treasurer."
    }
  ];

  // Founding Members
  const foundingMembers = [
    {
      name: "Jitendar Martoliya",
      role: "Founding Member",
      image: jitendraMartoliyaImage,
      bio: "A founding pillar of Yooo Pahad Foundation, dedicated to building sustainable community initiatives from the ground up."
    },
    {
      name: "Shiva Bisht",
      role: "Joint Secretary (Founding Member)",
      image: shivaBishtImage,
      bio: "A young entrepreneur, quietly contributes to the religious and social initiatives of his city, embodying a spirit of selfless service. A former sportsman, he has inspired and connected with numerous young individuals in his community, encouraging them to work together for the betterment of the environment and society. Through his leadership and dedication, Shiva consistently motivates others to actively participate in meaningful causes, fostering positive change and collective responsibility."
    },
    {
      name: "Deepti Bora",
      role: "Media Relations Manager (Founding Member)",
      image: deeptiBoraImage,
      bio: "Deepti Bora is a well-known young woman from Nainital who plays an active role in religious, social, and welfare programs. Alongside her professional pursuits, she is an accomplished journalist who works towards societal improvement and ensures the public's voice reaches the right platforms. Her wholehearted contributions—through mind, body, and resources—are evident in every form of social work she undertakes."
    },
    {
      name: "Chetan Mehra",
      role: "Technical Support Specialist (Founding Member)",
      image: chandarKantJoshiImage,
      bio: "Chetan Mehra serves as the backbone of various programs, preferring to work behind the scenes rather than in the spotlight. His selfless contributions—through mind, body, and resources—are quietly made to every social initiative. Currently, he works for a major multinational company and was recognized as one of the most intelligent students in his city during his academic years. He consistently supports the foundation with technical expertise whenever needed. Chetan believes that the upcoming generation should embrace technology while staying connected to our cultural roots, which form the core of our identity."
    }
  ];

  // Co-Founders
  const coFounders = [
    {
      name: "Arjun Bohara",
      role: "Co-Founder",
      image: arjunBoharaImage,
      bio: "Co-founder committed to grassroots development and community empowerment through innovative programs."
    },
    {
      name: "Lokesh Bisht",
      role: "Co-Founder",
      image: lokeshBishtImage,
      bio: "A visionary co-founder working to preserve mountain culture while driving modern development."
    },
    {
      name: "Deepak Joshi",
      role: "Co-Founder",
      image: deepakJoshiImage,
      bio: "Co-founder passionate about sustainable tourism and environmental conservation in the hills."
    },
    {
      name: "Dinesh Pandey",
      role: "Co-Founder",
      image: dineshPandeyImage,
      bio: "Dedicated co-founder focusing on youth development and skill-building initiatives."
    },
    {
      name: "Abhishek Tiwari",
      role: "Co-Founder",
      image: abhishekTiwariImage,
      bio: "Co-founder driving educational programs and community awareness campaigns."
    }
  ];

  // Key Roles
  const keyRoles = [
    {
      name: "Deepak Thapa",
      role: "Head of Photography / Videography",
      image: deepakThapaImage,
      bio: "Capturing the essence of mountain life through powerful visual storytelling and documentation."
    },
    {
      name: "Deepak Bisht",
      role: "Fund Manager (CEO)",
      image: deepakBishtFundImage,
      bio: "Managing resources strategically to maximize impact and ensure sustainable growth of foundation programs."
    }
  ];

  // Active Members
  const activeMembers = [
    {
      name: "Himanshu Bisht",
      role: "Active Member",
      image: himanshuBishtImage,
      bio: "An enthusiastic volunteer contributing to various community development programs."
    },
    {
      name: "Amit Vidhyarthi",
      role: "Active Member",
      image: amitVidhyarthiImage,
      bio: "Active member dedicated to youth engagement and cultural preservation activities."
    },
    {
      name: "Chandar Kant Joshi",
      role: "Active Member",
      image: chandarKantJoshiImage,
      bio: "Contributing expertise in technical support and event management for foundation initiatives."
    },
    {
      name: "Manoj Kumar",
      role: "Active Member",
      image: manojKumarImage,
      bio: "A dedicated member supporting grassroots initiatives and community outreach programs."
    },
    {
      name: "Aarav",
      role: "Active Member",
      image: teamAaravImage,
      bio: "Bringing fresh perspectives and boundless energy to community development initiatives."
    },
    {
      name: "Vipul Bisht (Bobby)",
      role: "Active Member",
      image: vipulBishtImage,
      bio: "Passionate about social change and youth empowerment, connecting tradition with modern innovation."
    },
    {
      name: "Pankaj Gadhiya",
      role: "Active Member",
      image: teamPankajImage,
      bio: "A committed member driving grassroots initiatives and ensuring every voice in the hills is heard."
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
    "Uttarakhand's First Kumaoni Digital Ramleera Performance",
    "Reverse Migration Efforts - Transforming abandoned farmlands into thriving hubs"
  ];

  // Helper function to render team cards
  const renderTeamCards = (members: typeof coreTeam, startIndex: number) => {
    return members.map((member, index) => {
      const globalIndex = startIndex + index;
      return (
        <Card 
          key={globalIndex} 
          className="hover:shadow-[var(--shadow-strong)] card-3d eco-glow smooth-transition overflow-hidden border-primary/20 cursor-pointer"
          onClick={() => toggleCard(globalIndex)}
        >
          <div className="relative h-80 overflow-hidden bg-muted/20">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-contain smooth-transition hover:scale-105 p-2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-sm font-semibold text-secondary">{member.role}</p>
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
              {expandedCard === globalIndex ? (
                <ChevronUp className="h-5 w-5 text-white" />
              ) : (
                <ChevronDown className="h-5 w-5 text-white" />
              )}
            </div>
          </div>
          
          {/* Expandable Bio Section */}
          <div 
            className={`overflow-hidden smooth-transition ${
              expandedCard === globalIndex ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <CardContent className="pt-6 pb-6">
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            </CardContent>
          </div>
        </Card>
      );
    });
  };

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

          {/* Core Leadership */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderTeamCards(coreTeam, 0)}
            </div>
          </div>

          {/* Founding Members */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-primary">Founding Members</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderTeamCards(foundingMembers, coreTeam.length)}
            </div>
          </div>

          {/* Co-Founders */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-primary">Co-Founders</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderTeamCards(coFounders, coreTeam.length + foundingMembers.length)}
            </div>
          </div>

          {/* Key Roles */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-primary">Key Roles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderTeamCards(keyRoles, coreTeam.length + foundingMembers.length + coFounders.length)}
            </div>
          </div>

          {/* Active Members */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center text-primary">Active Members</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderTeamCards(activeMembers, coreTeam.length + foundingMembers.length + coFounders.length + keyRoles.length)}
            </div>
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
