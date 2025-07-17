'use client';

import React, { useEffect, useState } from 'react';
import { PatientCenteredIcon, ClinicalExcellenceIcon, AccessibleHealthcareIcon, EthicalAIIcon } from './icons/CoreValueIcons';

const coreValues = [
  {
    icon: PatientCenteredIcon,
    title: "Patient-Centered Innovation",
    description: "Every solution we build puts patients first, ensuring technology enhances rather than complicates their healthcare journey"
  },
  {
    icon: ClinicalExcellenceIcon,
    title: "Clinical Excellence", 
    description: "We collaborate with leading healthcare professionals to ensure our AI solutions meet the highest clinical standards"
  },
  {
    icon: AccessibleHealthcareIcon,
    title: "Accessible Healthcare",
    description: "Breaking down barriers to quality healthcare through affordable, scalable AI-powered solutions"
  },
  {
    icon: EthicalAIIcon,
    title: "Ethical AI",
    description: "Committed to responsible AI development with transparency, fairness, and patient privacy at the core"
  }
];

export default function VisionMission() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-teal-50 via-cyan-50 to-white"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Vision Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Democratizing AI-powered healthcare for every patient and provider
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-light">
            We&apos;re creating an integrated AI ecosystem that makes world-class healthcare accessible, efficient, and personalized
          </p>
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 lg:mt-20">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-teal-100"
            >
              <div className="text-teal-600 mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                {value.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
                {value.description}
              </p>
              
              {/* Animated underline */}
              <div className="mt-4 sm:mt-6 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-teal-200 cursor-pointer touch-manipulation">
            Join us in transforming healthcare through AI
          </div>
        </div>
      </div>
    </section>
  );
}