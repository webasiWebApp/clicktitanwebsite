import React, { useEffect } from 'react';
import { ArrowRight, TrendingUp, Target, Users, Rocket } from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SectionBackground from '../components/SectionBackground';

import { 
    ArrowLeft, 
    Calendar, 
    MapPin, 
    Building,  
    BarChart, 
    Zap,
    DollarSign,
    ArrowUpRight
  } from 'lucide-react';

import AnimateOnScroll from '../components/AnimateOnScroll';
import MetricsCard from '../components/MetricsCard';

import { getCaseStudyById, getRelatedCaseStudies, CaseStudy } from './Data/CaseStudy';

const CaseStudiesMore = () => {
  
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const caseStudy = getCaseStudyById(id || '');
    const relatedCaseStudies = caseStudy ? getRelatedCaseStudies(caseStudy.relatedCaseStudies) : [];
    
    useEffect(() => {
      if (!caseStudy) {
        navigate('/');
        return;
      }
      
      document.title = `${caseStudy.title} | RoofAI Case Study`;
      
      const handleScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8;
          
          if (isVisible) {
            el.classList.add('animated');
          }
        });
      };
      
      window.addEventListener('scroll', handleScroll);
      setTimeout(handleScroll, 100);
      
      return () => window.removeEventListener('scroll', handleScroll);
    }, [caseStudy, navigate]);
    
    if (!caseStudy) {
      return null;
    }

  return (
    <div className="min-h-screen bg-black pt-20">
    {/* Back Link */}
    <div className="container mx-auto px-4 pt-6">
      <Link to="/case-studies" className="inline-flex items-center text-gray-400 hover:text-[#00f163] transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to All Case Studies
      </Link>
    </div>
    
    {/* Hero Section */}
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00f163]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00f163]/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {caseStudy.description}
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="flex items-start">
              <Calendar className="h-5 w-5 text-[#00f163] mt-1 mr-2" />
              <div>
                <div className="text-sm text-gray-400">Client Since</div>
                <div className="text-white">{caseStudy.timeline[0].date}</div>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-[#00f163] mt-1 mr-2" />
              <div>
                <div className="text-sm text-gray-400">Location</div>
                <div className="text-white">{caseStudy.location}</div>
              </div>
            </div>
            <div className="flex items-start">
              <Building className="h-5 w-5 text-[#00f163] mt-1 mr-2" />
              <div>
                <div className="text-sm text-gray-400">Industry</div>
                <div className="text-white">{caseStudy.industry}</div>
              </div>
            </div>
            <div className="flex items-start">
              <Users className="h-5 w-5 text-[#00f163] mt-1 mr-2" />
              <div>
                <div className="text-sm text-gray-400">Company Size</div>
                <div className="text-white">{caseStudy.companySize}</div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
    
    {/* Results Overview */}
    <SectionBackground>
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">The </span>
            <span className="gradient-text">Results</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A comprehensive overview of what we achieved together
          </p>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">

        {caseStudy.results.map((results, index) => (
          <MetricsCard 
            value={results.value}
            label={results.metric}
            icon={results.icon}
          />
        ))}
          
        </div>
        
        

      </div>
    </SectionBackground>
    
    {/* Challenge & Solution */}
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <AnimateOnScroll>
              <div>
                <div className="inline-flex items-center p-2 bg-[#00f163]/10 rounded-full mb-6">
                  <Zap className="h-5 w-5 text-[#00f163] mr-2" />
                  <span className="text-[#00f163] text-sm font-medium">The Challenge</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What They Were Facing</h2>
                <div className="text-gray-300 space-y-4">
                  {caseStudy.challenge.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll>
              <div>
                <div className="inline-flex items-center p-2 bg-[#00f163]/10 rounded-full mb-6">
                  <ArrowUpRight className="h-5 w-5 text-[#00f163] mr-2" />
                  <span className="text-[#00f163] text-sm font-medium">The Solution</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Approach</h2>
                <div className="text-gray-300 space-y-4">
                  {caseStudy.solution.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
    
    
    {/* Related Case Studies */}
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-white">Related </span>
              <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Explore more success stories from our clients
            </p>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {relatedCaseStudies.slice(0, 4).map((study) => (
              <AnimateOnScroll
                key={study.id}
                className="bg-black/40 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-[#00f163]/50 transition-all duration-500 group"
              >
                <div className="relative">
                  <img
                    src={study.thumbnail}
                    alt={study.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{study.description}</p>
                  
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-[#00f163] font-semibold text-sm group/link"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
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

export default CaseStudiesMore;