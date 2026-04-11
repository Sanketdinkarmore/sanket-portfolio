
import React from 'react';

interface SectionTitleProps {
  title: string;
  icon?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, icon }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-3 mb-3">
        {icon && <div className="text-blue-500">{icon}</div>}
        <h2 className="text-4xl  text-white">{title}</h2>
      </div>
      <div className="flex items-center space-x-2">
        <div className="h-1 w-16 bg-orange-500 rounded-full"></div>
        <div className="h-1 w-8 bg-blue-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionTitle;