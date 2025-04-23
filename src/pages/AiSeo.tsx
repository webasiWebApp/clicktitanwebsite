import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Target, LineChart, Brain, Rocket, Star } from 'lucide-react';
import SectionBackground from '../components/SectionBackground';

const AiSeo = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Keyword Research",
      description: "Our AI analyzes millions of search patterns to identify high-value keywords specific to the roofing industry, ensuring you target terms that actually convert."
    },
    {
      icon: Target,
      title: "Smart Content Optimization",
      description: "Advanced AI algorithms continuously optimize your content for both search engines and user intent, maintaining the perfect balance for maximum visibility."
    },
    {
      icon: LineChart,
      title: "Real-Time Performance Tracking",
      description: "Get instant insights into your SEO performance with AI-driven analytics that show exactly what's working and what needs adjustment."
    }
  ];

  const benefits = [
    {
      metric: "50-70%",
      title: "Cost Reduction",
      description: "Compared to traditional SEO services"
    },
    {
      metric: "2-3x",
      title: "Faster Results",
      description: "See ranking improvements in weeks, not months"
    },
    {
      metric: "24/7",
      title: "Optimization",
      description: "Continuous AI monitoring and adjustments"
    },
    {
      metric: "300%",
      title: "Average ROI",
      description: "Based on client success metrics"
    }
  ];

  const testimonials = [
    {
      quote: "Our organic traffic increased by 245% within just 3 months of using ClickTitan's AI SEO. The ROI has been incredible.",
      author: "Michael Chen",
      role: "CEO, Premier Roofing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      quote: "The AI-driven approach to SEO has transformed our business. We're now ranking #1 for our most valuable keywords.",
      author: "Sarah Martinez",
      role: "Marketing Director, Elite Roofing",
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
              <span className="gradient-text">AI-Optimized SEO</span>
              <br />
              <span className="text-white">for Roofing Companies</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Harness the power of artificial intelligence to dominate local search results and generate more qualified leads for your roofing business.
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
        <div className="container mx-auto px-[100px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Advanced AI Features That Drive Results
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
              The ClickTitan Advantage
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

      {/* Testimonials Section */}
      <SectionBackground>
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
      </SectionBackground>

      {/* CTA Section */}
      <section id="get-started" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-[#00f163]/10 rounded-full mb-8">
              <Rocket className="w-6 h-6 text-[#00f163] mr-2" />
              <span className="text-[#00f163] font-medium">Ready to Grow?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white glow-text">Start Dominating </span>
              <span className="gradient-text glow-text">Local Search</span>
              <span className="text-white glow-text"> Today</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8">
              Join the growing number of roofing companies using AI to transform their SEO strategy. Book your free consultation now.
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

export default AiSeo;