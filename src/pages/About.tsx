import React, { useEffect } from 'react';
import { Brain, Target, TrendingUp, ArrowRight, Rocket, Users, Award, BarChart as ChartBar } from 'lucide-react';
import SectionBackground from '../components/SectionBackground';

const About = () => {
  const team = [
    {
      name: "Alex Thompson",
      role: "CEO & AI Strategist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      bio: "Former Google AI researcher turned marketing innovator."
    },
    {
      name: "Sarah Chen",
      role: "Head of AI Development",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      bio: "10+ years experience in machine learning and marketing automation."
    },
    {
      name: "Marcus Rodriguez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      bio: "Specialized in roofing industry marketing for over 15 years."
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "AI Innovation",
      description: "We're constantly pushing the boundaries of what's possible with AI in marketing."
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "Every strategy we implement is measured by its impact on your bottom line."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We're committed to helping you grow."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do."
    }
  ];

  const stats = [
    {
      value: "100+",
      label: "Roofing Clients",
      description: "Trusted by leading companies"
    },
    {
      value: "$2M+",
      label: "Client Savings",
      description: "In marketing costs annually"
    },
    {
      value: "50K+",
      label: "Leads Generated",
      description: "High-quality prospects delivered"
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description: "Based on monthly reviews"
    }
  ];

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#00f163]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00f163]/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6">
              <span className="gradient-text">Revolutionizing</span>
              <br />
              <span className="text-white">Roofing Marketing with AI</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              At ClickTitan, we're on a mission to transform how roofing companies approach marketing. By leveraging cutting-edge AI technology, we deliver better results while reducing costs.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <SectionBackground>
        <div className="container mx-auto px-[20px] md:px-[100px] ">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-[#00f163] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="animate-on-scroll service-card bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#00f163]/50 transition-all duration-500 group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-black/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <value.icon className="h-8 w-8 text-[#00f163]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionBackground>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 px-[20px] md:px-[100px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-[#00f163] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="animate-on-scroll service-card bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#00f163]/50 transition-all duration-500 group text-center"
              >
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto border-4 border-[#00f163] shadow-lg shadow-[#00f163]/20"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#00f163] mb-4">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <SectionBackground>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="animate-on-scroll roi-card text-center"
              >
                <div className="text-4xl font-bold text-[#00f163] mb-2">
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-400">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionBackground>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-[#00f163]/10 rounded-full mb-8">
              <Rocket className="w-6 h-6 text-[#00f163] mr-2" />
              <span className="text-[#00f163] font-medium">Join Our Mission</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white glow-text">Ready to </span>
              <span className="gradient-text glow-text">Transform</span>
              <span className="text-white glow-text"> Your Marketing?</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8">
              Join hundreds of successful roofing companies using our AI-powered marketing solutions. Book your free consultation now.
            </p>

            <a
              href="#book-call"
              className="inline-flex items-center px-8 py-4 bg-[#00f163] hover:bg-[#00f163]/80 text-black rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,241,99,0.3)] group"
            >
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;