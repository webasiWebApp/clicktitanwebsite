import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ElementType;
  name: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, name, description, link }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="service-card bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#00f163]/50 transition-all duration-500 group"
    >
      <div className="mb-6">
        <div className="w-16 h-16 rounded-2xl bg-black/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <Icon className="h-8 w-8 text-[#00f163]" />
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-4">
        {name}
      </h3>
      
      <p className="text-gray-400 mb-6">
        {description}
      </p>

      <Link
        to={link}
        className="inline-flex items-center text-[#00f163] font-semibold group/link"
      >
        EXPLORE
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

export default ServiceCard;