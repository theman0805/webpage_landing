'use client';

import React, { useEffect, useRef, useState } from 'react';
import { HealthcareFirstAIIcon, UnifiedPlatformIcon, PrivacyByDesignIcon, ClinicianFocusedIcon } from './icons/DifferentiatorIcons';

interface Differentiator {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  bgColor: string;
}

const differentiators: Differentiator[] = [
  {
    icon: HealthcareFirstAIIcon,
    title: "Healthcare-First AI",
    description: "Purpose-built for medical workflows with deep understanding of clinical processes, medical terminology, and healthcare regulations",
    bgColor: "bg-white"
  },
  {
    icon: UnifiedPlatformIcon,
    title: "Unified Platform",
    description: "All solutions work seamlessly together, sharing data and insights across the entire healthcare ecosystem for maximum efficiency",
    bgColor: "bg-gray-50"
  },
  {
    icon: PrivacyByDesignIcon,
    title: "Privacy by Design",
    description: "HIPAA-compliant from day one with enterprise-grade security, end-to-end encryption, and strict data governance protocols",
    bgColor: "bg-white"
  },
  {
    icon: ClinicianFocusedIcon,
    title: "Clinician Focused Development",
    description: "Built for healthcare professionals, keeping practitioners in mind with intuitive workflows and clinical decision support",
    bgColor: "bg-gray-50"
  }
];

export default function HealthcareDifferentiators() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for the Future of Healthcare
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform is designed with healthcare&apos;s unique needs in mind, delivering solutions that are secure, integrated, and purpose-built for medical environments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {differentiators.map((differentiator, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className={`
                ${differentiator.bgColor} 
                rounded-2xl p-8 shadow-lg hover:shadow-xl 
                transition-all duration-700 transform
                ${visibleCards[index] 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
                }
                hover:-translate-y-2 hover:scale-105
                border border-gray-200
              `}
              style={{ 
                transitionDelay: `${index * 200}ms` 
              }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-blue-600 mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  <differentiator.icon className="w-12 h-12" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {differentiator.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {differentiator.description}
                </p>
                
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-lg font-medium">Transforming Healthcare Through Innovation</span>
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}