import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

interface MetricProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const MetricsCard: React.FC<MetricProps> = ({ value, label, icon }) => {
  return (
    <AnimateOnScroll>
      <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-[#00f163]/50 transition-all duration-500">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-lg bg-black/60 flex items-center justify-center mr-4">
            {icon}
          </div>
          <div>
            <div className="text-3xl font-bold text-[#00f163]">{value}</div>
            <div className="text-gray-400">{label}</div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

export default MetricsCard;