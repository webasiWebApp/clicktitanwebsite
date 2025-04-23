import React from 'react';
import { Search, Code, LineChart, ArrowRight, Target, Facebook, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Search className="h-12 w-12 text-[#00f163] " />,
      title: "AI-Optimized SEO",
      description: "Our AI algorithms analyze search patterns and optimize your content in real-time, ensuring your roofing business ranks higher for relevant searches.",
      features: [
        "Smart keyword optimization",
        "Automated content suggestions",
        "Local SEO automation",
        "Performance tracking"
      ],
      link: "/services/ai-seo"
    },
    {
      icon: <Target className="h-12 w-12 text-[#00f163] " />,
      title: "AI-Driven Google PPC",
      description: "Maximize your ROI with AI-powered Google Ads management that reduces costs while delivering more qualified leads for your roofing business.",
      features: [
        "AI-powered bid management",
        "Smart audience targeting",
        "Real-time optimization",
        "Performance analytics"
      ],
      link: "/services/ai-ppc"
    },
    {
      icon: <LineChart className="h-12 w-12 text-[#00f163] " />,
      title: "AI-Agent Google LSA",
      description: "Transform your Local Service Ads with AI-powered lead management, automated responses, and smart optimization that delivers better results for less.",
      features: [
        "AI review management",
        "Smart lead screening",
        "24/7 lead response",
        "Performance optimization"
      ],
      link: "/services/ai-lsa"
    },
    {
      icon: <Code className="h-12 w-12 text-[#00f163] " />,
      title: "AI-Website Design",
      description: "Transform your online presence with AI-powered website design that automatically optimizes for conversions and delivers exceptional user experiences.",
      features: [
        "AI-powered design generation",
        "Dynamic content optimization",
        "Conversion-focused layouts",
        "Real-time personalization"
      ],
      link: "/services/ai-website"
    },
    {
      icon: <Facebook className="h-12 w-12 text-[#00f163] " />,
      title: "AI-Facebook Ads",
      description: "Transform your Facebook advertising with AI-powered targeting, creative optimization, and automated campaign management that delivers better results for less.",
      features: [
        "AI-powered ad creation",
        "Smart audience targeting",
        "Dynamic budget optimization",
        "Performance tracking"
      ],
      link: "/services/ai-facebook"
    },
    {
      icon: <Calendar className="h-12 w-12 text-[#00f163] " />,
      title: "AI-Powered Scheduling",
      description: "Maximize your team's efficiency with AI-driven scheduling that optimizes crew assignments, routes, and job timelines while reducing operational costs.",
      features: [
        "AI-powered optimization",
        "Smart time management",
        "Dynamic crew assignment",
        "Real-time adjustments"
      ],
      link: "/services/ai-scheduling"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
        <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#00f163]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00f163]/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
            <span className="gradient-text">  AI-Powered </span> Marketing Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Maximize your roofing business's potential with our cutting-edge AI marketing solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#00f163] hover:bg-green-300 text-black rounded-lg font-semibold transition-colors"
            >
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black px-[20px] md:px-[100px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-on-scroll  bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#00f163]/50 transition-all duration-500  p-8 group">
                <div className="mb-6 ">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-[#00f163] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-[#00f163] hover:text-green-300 font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Marketing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing number of roofing companies saving time and money with our AI-powered marketing solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#00f163] hover:bg-green-300 text-black rounded-lg text-lg font-semibold transition-colors"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;