import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Loader2, Search, Target, Code, LineChart, Facebook, Calendar, Star, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import SectionBackground from '../components/SectionBackground';
import ROICard from '../components/ROICard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// client logos
import clientLogo1 from '../assest/clientLogo/clientLogo1.webp';
import clientLogo2 from '../assest/clientLogo/clientLogo2.webp';
import clientLogo3 from '../assest/clientLogo/clientLogo3.webp';
import clientLogo4 from '../assest/clientLogo/clientLogo4.webp';
import clientLogo5 from '../assest/clientLogo/clientLogo5.webp';
import clientLogo6 from '../assest/clientLogo/clientLogo6.webp';
import clientLogo7 from '../assest/clientLogo/clientLogo7.webp';
import clientLogo8 from '../assest/clientLogo/clientLogo8.webp';



const Home = () => {


  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleSplineError = (event: React.SyntheticEvent<HTMLDivElement, Event>) => {
    console.error('Spline scene failed to load:', event);
    setHasError(true);
    setIsLoading(false);
  };

  const handleSplineLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const services = [
    {
      icon: Search,
      name: "AI-Optimized SEO",
      description: "Our AI algorithms continuously optimize your website's ranking factors, increasing visibility at a fraction of traditional SEO costs.",
      link: "/services/ai-seo"
    },
    {
      icon: Target,
      name: "AI-Driven Google PPC",
      description: "AI-driven campaign management that adjusts bids, targeting, and creative elements in real-time to maximize lead generation while reducing wasted ad spend.",
      link: "/services/ai-ppc"
    },
    {
      icon: LineChart,
      name: "AI-Agent Google LSA",
      description: "Our AI-powered Local Service Ads management maximizes your visibility in Google's LSA section, driving high-quality local leads while optimizing your budget.",
      link: "/services/ai-lsa"
    },
    {
      icon: Code,
      name: "AI-Website Design",
      description: "Cutting-edge websites built by AI with dynamic content generation, personalized user experiences, and continuous optimization for maximum conversion rates.",
      link: "/services/ai-website"
    },
    {
      icon: Facebook,
      name: "AI-Facebook Ads",
      description: "Smart Facebook advertising powered by AI that optimizes targeting, creative elements, and budgets to maximize your social media ROI.",
      link: "/services/ai-facebook"
    },
    {
      icon: Calendar,
      name: "AI-Powered Scheduling",
      description: "Intelligent scheduling system that automatically manages appointments, optimizes crew assignments, and maximizes your team's efficiency.",
      link: "/services/ai-scheduling"
    }
  ];

  const trustedBy = [
    {
      name: "Premier Roofing",
      logo: clientLogo1
    },
    {
      name: "Elite Roof Systems",
      logo: clientLogo2
    },
    {
      name: "Summit Roofing Solutions",
      logo:clientLogo3
    },
    {
      name: "Quality Roofing Co",
      logo: clientLogo4
    },
    {
      name: "Master Roofers",
      logo: clientLogo5
    },
    {
      name: "Five Star Roofing",
      logo: clientLogo6
    },
    {
      name: "Five Star Roofing",
      logo:clientLogo7
    },
    {
      name: "Five Star Roofing",
      logo: clientLogo8
    }
  ];

  const testimonials = [
    {
      name: "Michael Anderson",
      company: "Summit Roofing Solutions",
      location: "Denver, CO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      result: "$85,000 in new projects",
      quote: "ClickTitan's AI marketing has transformed our business. We secured $85,000 in new roofing projects in just three weeks, with a 65% closing rate. Our marketing costs dropped by 40% compared to our previous agency."
    },
    {
      name: "Sarah Martinez",
      company: "Elite Roofing & Construction",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      result: "3x lead generation",
      quote: "Since switching to ClickTitan's AI-powered marketing, we've tripled our qualified leads while reducing our marketing spend by 35%. The AI targeting is incredibly precise, bringing us exactly the kind of projects we want."
    },
    {
      name: "David Chen",
      company: "Precision Roofing Experts",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      result: "$1.2M growth in 6 months",
      quote: "The results are incredible. We've grown from $800K to $2M in just 6 months using ClickTitan's AI marketing system. Their technology helped us reduce our cost per lead by 45% while increasing our conversion rates."
    }
  ];

  const steps = [
    {
      number: 1,
      heading: "Fill out the form to book a call",
      description: "Pick a day and time that works best for you. Plus, we'll send you a link to download a free E-book 'AI Marketing Strategies for Roofing Companies' free."
    },
    {
      number: 2,
      heading: "Join us on your FREE demo call",
      description: "When you join us on your free demo call we'll ask about your business, show you what works to generate you leads and answer any questions you have. There is no obligation on this call."
    },
    {
      number: 3,
      heading: "We'll setup everything for you",
      description: "Our expert team will design effective roofing ads to get attention that target the right people in your area and setup a complete AI-powered automated follow-up system to contact your leads."
    }
  ];

  const roiResults = [
    {
      roi: "22.66X",
      company: "High Low Roofing",
      revenue: "$408,024",
      spend: "$18,000"
    },
    {
      roi: "21.72X",
      company: "Caprica Homes",
      revenue: "$561,623",
      spend: "$25,857"
    },
    {
      roi: "15.84X",
      company: "Remarkable Roofing",
      revenue: "$320,892",
      spend: "$20,251"
    },
    {
      roi: "32.07X",
      company: "Safeguard Impact",
      revenue: "$147,501",
      spend: "$4,599"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="h-screen relative overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-20 w-full h-screen bg-black/50">
            <Loader2 className="w-12 h-12 text-[#00f163] animate-spin" />
          </div>
        )}

        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
            <p className="text-xl mb-4">We're having trouble loading the 3D scene</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-[#00f163] text-black rounded-md hover:bg-[#00f163]/80 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

{/* https://prod.spline.design/JkbunnoptndzJvcC/scene.splinecode */}
        <div className="absolute inset-0 w-full h-full">
          <Spline 
            scene="https://prod.spline.design/JkbunnoptndzJvcC/scene.splinecode"
            onLoad={handleSplineLoad}
            onError={handleSplineError}
            className='opacity-70
'
          />
        </div>

        <div className="relative z-10 h-full flex items-center px-[20px] md:px-[100px]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">AI-Powered</span>
                <br />
                <span className="text-white">Roofing Marketing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Transform your roofing business with cutting-edge AI technology. Get more leads, reduce costs, and outperform your competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#00f163] hover:bg-[#00f163]/80 text-black rounded-lg text-lg font-semibold transition-colors group"
                >
                  Book a Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg text-lg font-semibold transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-[5]" />
      </section>

      <SectionBackground>
        <div className="container mx-auto px-4 px-[20px] md:px-[100px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl  mb-6 text-white">
              {/* AI-Powered Services that Transform Your Roofing Marketing */}
              AI-Powered Roofing Marketing Solutions
            </h2>
            <div className="w-24 h-1 bg-[#00f163] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                name={service.name}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </SectionBackground>

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 px-[20px] md:px-[100px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              {/* 100s of Roofing Businesses Are Getting Results Like These */}
              100s of Roofers See Results—You Could Be Next!
            </h2>
            <p className="text-xl text-[#00f163] font-semibold">
              It's highly likely one of them is your competitor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roiResults.map((result, index) => (
              <ROICard
                key={index}
                roi={result.roi}
                company={result.company}
                revenue={result.revenue}
                spend={result.spend}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black overflow-hidden">
        <div className="container mx-auto px-4 px-[20px] md:px-[100px]">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              Trusted by Leading Roofing Companies
            </h2>
            <p className="text-xl text-gray-400">
              Join over 300+ roofing businesses across the United States that trust our AI-powered marketing solutions.
            </p>
          </div>

          <div className="opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
            <Swiper
               modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              loop={true}
              
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 6 },
              }}
              className="!overflow-visible"
            >
              {trustedBy.map((company, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center p-4 transition-transform hover:scale-105">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>


        </div>
      </section>

      <SectionBackground>
        <div className="container mx-auto px-4 px-[20px] md:px-[100px]">
          <h2 className="text-4xl md:text-5xl text-white text-center mb-16">
            Don't Just Take Our Word For It.<br />
            Here's What Our Clients Say:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative pt-12">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-4 border-[#00f163] shadow-lg shadow-[#00f163]/20"
                  />
                </div>

                <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-[#00f163] text-center mb-4">
                    {testimonial.result}
                  </h3>

                  <p className="text-gray-300 mb-6 text-center">
                    "{testimonial.quote}"
                  </p>

                  <div className="text-center">
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.company}</p>
                    <p className="text-gray-400 mb-4">{testimonial.location}</p>

                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#00f163] fill-[#00f163]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionBackground>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              {/* Getting started is as easy as 1, 2, 3 */}
              Start in 3 Easy Steps
            </h2>
            <div className="w-24 h-1 bg-[#00f163] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="w-20 h-20 rounded-full bg-[#00f163] flex items-center justify-center mx-auto mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,241,99,0.3)]">
                  <span className="text-3xl font-bold text-black">{step.number}</span>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00f163] transition-colors">
                    {step.heading}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-[#00f163] to-transparent"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#00f163] hover:bg-[#00f163]/80 text-black rounded-lg text-lg font-semibold transition-colors group"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-[#00f163]/10 rounded-full mb-8">
              <Rocket className="w-6 h-6 text-[#00f163] mr-2" />
              <span className="text-[#00f163] font-medium">Ready to Transform Your Marketing?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white glow-text">Start Saving </span>
              <span className="gradient-text glow-text">40% or More</span>
              <span className="text-white glow-text"> on Your Marketing Today</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful roofing companies using AI to reduce costs and increase leads. Book your free consultation now and discover how much you could save.
            </p>

            <div className="flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#00f163] hover:bg-[#00f163]/80 text-black rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,241,99,0.3)] group"
              >
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#00f163] mb-2">40%</div>
                <p className="text-gray-400">Average Cost Savings</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00f163] mb-2">300+</div>
                <p className="text-gray-400">Roofing Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00f163] mb-2">2.5x</div>
                <p className="text-gray-400">Lead Generation</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00f163] mb-2">24/7</div>
                <p className="text-gray-400">AI-Powered Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;