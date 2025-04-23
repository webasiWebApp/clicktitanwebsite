import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Bot, Zap, LineChart, Rocket, Star, Facebook, Users, BarChart } from 'lucide-react';
import SectionBackground from '../components/SectionBackground';

const AiFacebook = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Ad Creation",
      description: "Our AI analyzes successful roofing ads and your target market to generate high-converting ad copy, images, and videos tailored to your audience."
    },
    {
      icon: Target,
      title: "Smart Audience Targeting",
      description: "Advanced algorithms identify and target homeowners most likely to need roofing services, continuously optimizing for better results."
    },
    {
      icon: Zap,
      title: "Dynamic Budget Optimization",
      description: "AI automatically adjusts your budget allocation in real-time based on performance data and market conditions."
    }
  ];

  const benefits = [
    {
      metric: "47%",
      title: "Lower CPA",
      description: "Cost per acquisition"
    },
    {
      metric: "89%",
      title: "Lead Quality",
      description: "Qualified prospects"
    },
    {
      metric: "24/7",
      title: "Optimization",
      description: "AI monitoring"
    },
    {
      metric: "3.2x",
      title: "ROAS",
      description: "Return on ad spend"
    }
  ];

  const testimonials = [
    {
      quote: "The AI-generated ads consistently outperform our traditional campaigns. We've seen a 47% reduction in cost per lead while maintaining quality.",
      author: "Jennifer Martinez",
      role: "Marketing Manager, Elite Roofing",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      quote: "ClickTitan's AI Facebook ads have transformed our lead generation. We're reaching exactly the right homeowners at the perfect time.",
      author: "Marcus Johnson",
      role: "Owner, Johnson Roofing",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
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
              <span className="gradient-text">AI-Facebook Ads</span>
              <br />
              <span className="text-white">for Roofing Companies</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your Facebook advertising with AI-powered targeting, creative optimization, and automated campaign management that delivers better results for less.
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
        <div className="container mx-auto px-[20px] md:px-[100px] ">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              AI Features That Drive Facebook Ad Success
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
              The ClickTitan Facebook Ads Advantage
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
              How Our AI Optimizes Your Facebook Ads
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
                  <h3 className="text-xl font-bold text-white mb-2">Market Analysis</h3>
                  <p className="text-gray-400">AI analyzes your local market, competition, and target audience to identify optimal targeting parameters.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#00f163] flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Creative Generation</h3>
                  <p className="text-gray-400">AI creates and tests multiple ad variations to identify the highest-performing combinations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#00f163] flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Continuous Optimization</h3>
                  <p className="text-gray-400">24/7 monitoring and adjustments ensure peak performance and ROI across all campaigns.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f163]/20 to-transparent rounded-2xl"></div>
              <div className="relative bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <BarChart className="w-16 h-16 text-[#00f163] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Performance Metrics</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 text-[#00f163] mr-2" />
                    Precise audience targeting
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Target className="w-5 h-5 text-[#00f163] mr-2" />
                    Higher conversion rates
                  </li>
                  <li className="flex items-center text-gray-300">
                    <LineChart className="w-5 h-5 text-[#00f163] mr-2" />
                    Improved cost efficiency
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Facebook className="w-5 h-5 text-[#00f163] mr-2" />
                    Better engagement metrics
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
              <span className="text-[#00f163] font-medium">Ready to Grow?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white glow-text">Transform Your </span>
              <span className="gradient-text glow-text">Facebook Ads</span>
              <span className="text-white glow-text"> Today</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8">
              Join the growing number of roofing companies using AI to revolutionize their Facebook advertising. Book your free consultation now.
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

export default AiFacebook;