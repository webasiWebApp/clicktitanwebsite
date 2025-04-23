import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="text-2xl font-bold tracking-tight">
        <span className="text-white">Click</span>
        <span className="text-[#00f163]">Titan</span>
      </div>
    </div>
  );
};

export default Logo;