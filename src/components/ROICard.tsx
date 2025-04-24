import React, { useEffect, useRef } from 'react';

interface ROICardProps {
  roi: string;
  company: string;
  revenue: string;
  spend: string;
}

const ROICard: React.FC<ROICardProps> = ({ roi, company, revenue, spend }) => {
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
      className="roi-card bg-[#00f16408]  backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#00f163]/50 transition-all duration-500 group"
    >
      <div className="text-4xl font-bold text-[#00f163] mb-2">
        {roi} ROI
      </div>
      
      <div className="text-xl text-[#c8ced8] mb-4">
        {company}
      </div>
      
      <div className="flex items-baseline mb-2">
        <span className="text-2xl font-bold text-white">{revenue}</span>
        <span className="text-gray-400 ml-2">revenue</span>
      </div>
      
      <div className="text-gray-400">
        from just <span className="text-[#00f163] font-semibold">{spend}</span> ad spend
      </div>
    </div>
  );
};

export default ROICard;