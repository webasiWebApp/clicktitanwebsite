import React from 'react';

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({ children, className = "" }) => {
  return (
    <section className={`section-bg py-20 ${className}`}>
      {/* Grid pattern */}
      <div className="grid-pattern" />
      
      {/* Glowing orbs */}
      <div className="glow-orb glow-orb-1 animate-pulse-glow" />
      <div className="glow-orb glow-orb-2 animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionBackground;