'use client';

import React from 'react';
import { AdminBurdenIcon, FragmentedDataIcon, RisingCostsIcon } from './icons/PainPointIcons';

const challengeData = [
  {
    icon: AdminBurdenIcon,
    title: "Administrative Burden",
    stat: "30% of physician time wasted",
    description: "Healthcare professionals spend countless hours on paperwork instead of patient care",
    color: "text-red-600"
  },
  {
    icon: FragmentedDataIcon,
    title: "Fragmented Data",
    stat: "Patient information scattered across systems",
    description: "Critical patient data is siloed, making comprehensive care coordination nearly impossible",
    color: "text-orange-600"
  },
  {
    icon: RisingCostsIcon,
    title: "Rising Costs",
    stat: "Increasing expenses with declining care quality",
    description: "Healthcare costs continue to rise while patient outcomes and satisfaction decline",
    color: "text-amber-600"
  }
];

export default function HealthcareChallenge() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Healthcare's Digital Transformation Challenge
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The healthcare industry faces unprecedented challenges that demand innovative solutions
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {challengeData.map((challenge, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            <div className={`${challenge.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
              <challenge.icon className="w-12 h-12" />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {challenge.title}
            </h3>
            
            <div className={`text-lg font-bold ${challenge.color} mb-4`}>
              {challenge.stat}
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              {challenge.description}
            </p>
            
            <div className="mt-6 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${challenge.color.replace('text-', 'from-')} to-gray-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300">
          We're building the AI infrastructure to solve these challenges
        </div>
      </div>
    </section>
  );
}