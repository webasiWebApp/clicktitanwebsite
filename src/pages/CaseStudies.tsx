import React, { useEffect } from 'react';
import { ArrowRight, TrendingUp, Target, Users, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionBackground from '../components/SectionBackground';

import caseStudy1 from "../assest/caseStudy/caseStudy1.png"
import caseStudy2 from "../assest/caseStudy/caseStudy2.png"
import caseStudy3 from "../assest/caseStudy/caseStudy3.png"
import caseStudy4 from "../assest/caseStudy/caseStudy4.png"
import caseStudy5 from "../assest/caseStudy/caseStudy5.png"

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "safeguard-impact",
      title: "Massive ROI for SafeGuard Impact Using AI + Google Ads",
      description: "Find out how SafeGuard Impact achieved $147,501 in revenue in just 1 month, securing a 32.07x ROAS and maximizing returns with high-converting AI advertising.",
      thumbnail: caseStudy1,
      results: [
        { metric: "Inbound Leads", value: "82" },
        { metric: "Number of Sits", value: "22" },
        { metric: "ROAs", value: "32.07x" }
      ]
    },
    {
      id: "highlow-roofing",
      title: "Driving Over $400K Revenue for HighLow Roofing with AI + Google Ads",
      description: "Learn how our targeted AI-powered strategy helped HighLow Roofing generate 42 closed jobs, $408,024 in revenue, and a 22.66x ROAS — while keeping cost per job at just $428.",
      thumbnail: caseStudy2,
      results: [
        { metric: "Inbound Calls", value: "364" },
        { metric: "Number of Sits", value: "114" },
        { metric: "ROAs", value: "22.66x" }
      ]
    },
    {
      id: "remarkable-roofing",
      title: "Helping Remarkable Roofing Grow Fast with AI + Google Ads",
      description: "See how our AI-driven campaigns delivered 36 jobs, $320,892 in revenue, and a 15.84x ROAS for Remarkable Roofing — all with a highly efficient cost per acquisition.",
      thumbnail: caseStudy3,
      results: [
        { metric: "Inbound Calls", value: "315" },
        { metric: "Number of Sites", value: "109" },
        { metric: "ROIs", value: "15.84x" }
      ]
    }
    ,
    {
      id: "genroof",
      title: "Skyrocketing Revenue for GenRoof with AI + Google Ads",
      description: "Learn how we delivered $161,501 in roofing project revenue for GenRoof within just two months, achieving a 17.94x ROAS and a strong lead-to-sale pipeline.",
      thumbnail: caseStudy4,
      results: [
        { metric: "Inbound Leads", value: "112" },
        { metric: "Number of Sites", value: "38" },
        { metric: "ROIs", value: "17.94x" }
      ]
    }
    ,
    {
      id: "caprica-homes",
      title: "Boosting Revenue and Cutting Costs for Caprica Homes with AI + Google Ads",
      description: "Discover how we helped Caprica Homes secure 50 new jobs, generating $561,623 in revenue and a 21.72x ROAS, while keeping their cost per call under $63.",
      thumbnail: caseStudy5,
      results: [
        { metric: "Inbound Calls", value: "413" },
        { metric: "Number of Sites", value: "113" },
        { metric: "ROIs", value: "21.72x" }
      ]
    }
  ];

  const highlights = [
    {
      icon: TrendingUp,
      title: "Average ROI",
      value: "22x",
      description: "Return on marketing investment"
    },
    {
      icon: Target,
      title: "Lead Quality",
      value: "85%",
      description: "Qualified lead rate"
    },
    {
      icon: Users,
      title: "Client Growth",
      value: "3x",
      description: "Average business growth"
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
              <span className="gradient-text">Real Results</span>
              <br />
              <span className="text-white">Real Roofing Companies</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover how our AI-powered marketing solutions have transformed roofing businesses across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <SectionBackground>
        <div className="container mx-auto px-[20px] md:px-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="animate-on-scroll service-card bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#00f163]/50 transition-all duration-500 group text-center"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-black/60 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                    <highlight.icon className="h-8 w-8 text-[#00f163]" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-[#00f163] mb-2">
                  {highlight.value}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-400">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionBackground>

      {/* Case Studies Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-[20px] md:px-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div 
                key={study.id}
                className="animate-on-scroll service-card bg-black/40 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-[#00f163]/50 transition-all duration-500 group"
              >
                <div className="relative">
                  <img
                    src={study.thumbnail}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-400 mb-6">{study.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-[#00f163] font-bold text-xl">
                          {result.value}
                        </div>
                        <div className="text-sm text-gray-400">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-[#00f163] font-semibold group/link"
                  >
                    View Full Case Study
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-[#00f163]/10 rounded-full mb-8">
              <Rocket className="w-6 h-6 text-[#00f163] mr-2" />
              <span className="text-[#00f163] font-medium">Ready to Join Them?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white glow-text">Ready to Be Our </span>
              <span className="gradient-text glow-text">Next Success</span>
              <span className="text-white glow-text"> Story?</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8">
              Join these successful roofing companies and transform your marketing with AI-powered solutions.
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

export default CaseStudies;