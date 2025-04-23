import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Bot, Zap, Clock, Rocket, Star, Users, BarChart2, CalendarClock, Route, Briefcase } from 'lucide-react';
import SectionBackground from '../components/SectionBackground';

const AiScheduling = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Optimization",
      description: "Our AI analyzes historical job data, crew availability, and route efficiency to create optimal scheduling that maximizes productivity."
    },
    {
      icon: Clock,
      title: "Smart Time Management",
      description: "Automated scheduling considers job complexity, travel time, and weather conditions to create realistic timelines and prevent overbooking."
    },
    {
      icon: Calendar,
      title: "Dynamic Crew Assignment",
      description: "AI matches the right crews to jobs based on skills, experience, and location, ensuring optimal resource allocation."
    }
  ];

  const benefits = [
    {
      metric: "35%",
      title: "More Jobs",
      description: "Per crew per month"
    },
    {
      metric: "45%",
      title: "Less Drive Time",
      description: "Route optimization"
    },
    {
      metric: "24/7",
      title: "Scheduling",
      description: "Automated booking"
    },
    {
      metric: "98%",
      title: "On-Time Rate",
      description: "Job completion"
    }
  ];

  const testimonials = [
    {
      quote: "The AI scheduling system has revolutionized our operations. We're completing 35% more jobs with the same crew size thanks to optimized routing and scheduling.",
      author: "David Wilson",
      role: "Operations Manager, Wilson Roofing",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      quote: "Our fuel costs dropped by 45% and customer satisfaction improved dramatically with the AI scheduling system. It's been a game-changer for our business.",
      author: "Sarah Thompson",
      role: "CEO, Elite Roofing Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
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
              <span className="gradient-text">AI-Powered Scheduling</span>
              <br />
              <span className="text-white">for Roofing Companies</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Maximize your team's efficiency with AI-driven scheduling that optimizes crew assignments, routes, and job timelines while reducing operational costs.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#get-started"
                className="inline-flex items-center px-8 py-4 bg-[#00f163] hover:bg-[#00f163]/80 text-black rounded-lg text-lg font-semibold transition-colors group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <SectionBackground>
        <div className="container mx-auto px-[20px] md:px-[100px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              AI Features That Optimize Operations
            </h2>
            <div className="w-24 h-1 bg-[#00f163] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="animate-on-scroll service-card bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#00f163]/50 transition-all duration-500 group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-black/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="h-8 w-8 text-[#00f163]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionBackground>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              The ClickTitan Scheduling Advantage
            </h2>
            <div className="w-24 h-1 bg-[#00f163] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="animate-on-scroll roi-card text-center"
              >
                <div className="text-4xl font-bold text-[#00f163] mb-2">
                  {benefit.metric}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <SectionBackground>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              How Our AI Optimizes Your Scheduling
            </h2>
            <div className="w-24 h-1 bg-[#00f163] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#00f163] flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Data Analysis</h3>
                  <p className="text-gray-400">AI analyzes historical job data, crew performance, and route efficiency to optimize scheduling.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#00f163] flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Smart Assignment</h3>
                  <p className="text-gray-400">Automated crew matching based on skills, location, and job requirements.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#00f163] flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Real-Time Optimization</h3>
                  <p className="text-gray-400">Continuous adjustments for weather, traffic, and unexpected changes.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f163]/20 to-transparent rounded-2xl"></div>
              <div className="relative bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <CalendarClock className="w-16 h-16 text-[#00f163] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Key System Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <Route className="w-5 h-5 text-[#00f163] mr-2" />
                    Smart route optimization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 text-[#00f163] mr-2" />
                    Automated crew matching
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Briefcase className="w-5 h-5 text-[#00f163] mr-2" />
                    Job complexity analysis
                  </li>
                  <li className="flex items-center text-gray-300">
                    <BarChart2 className="w-5 h-5 text-[#00f163] mr-2" />
                    Performance tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-[#00f163] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="animate-on-scroll service-card bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full border-2 border-[#00f163]"
                  />
                  <div className="ml-4">
                    <h3 className="text-white font-semibold">{testimonial.author}</h3>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#00f163] fill-[#00f163]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-[#00f163]/10 rounded-full mb-8">
              <Rocket className="w-6 h-6 text-[#00f163] mr-2" />
              <span className="text-[#00f163] font-medium">Ready to Optimize?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white glow-text">Transform Your </span>
              <span className="gradient-text glow-text">Operations</span>
              <span className="text-white glow-text"> Today</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8">
              Join the growing number of roofing companies using AI to optimize their scheduling and operations. Book your free consultation now.
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

export default AiScheduling;