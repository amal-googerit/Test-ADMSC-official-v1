import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in animation-delay-300">
            {subtitle}
          </p>
        )}
        <div className="animate-fade-in animation-delay-600">{children}</div>
      </div>
    </div>
  );
};

export default Hero;
