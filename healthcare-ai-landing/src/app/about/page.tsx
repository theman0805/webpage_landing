'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import Link from 'next/link';

const timelineData = [
  {
    year: '2024',
    title: 'Company Founded',
    description: 'HealthcareAI was founded with a mission to democratize AI-powered healthcare solutions.',
    status: 'completed'
  },
  {
    year: '2024',
    title: 'Core Team Assembled',
    description: 'Brought together leading experts in AI, healthcare, and clinical practice.',
    status: 'completed'
  },
  {
    year: '2024',
    title: 'Initial Product Development',
    description: 'Started development of our flagship AI-powered healthcare platform.',
    status: 'in-progress'
  },
  {
    year: '2025',
    title: 'Beta Launch',
    description: 'Launch beta program with select healthcare partners.',
    status: 'upcoming'
  }
];

const approachData = [
  {
    icon: '🏥',
    title: 'Healthcare-First Design',
    description: 'Every AI solution is designed with healthcare professionals and patients at the center, not as an afterthought.'
  },
  {
    icon: '🔬',
    title: 'Clinical Validation',
    description: 'All our AI models undergo rigorous clinical testing and validation before deployment.'
  },
  {
    icon: '🛡️',
    title: 'Privacy & Security',
    description: 'Built with HIPAA compliance and enterprise-grade security from the ground up.'
  },
  {
    icon: '🤝',
    title: 'Human-AI Collaboration',
    description: 'AI that augments human expertise rather than replacing it, enhancing clinical decision-making.'
  }
];

const roadmapData = [
  { title: 'Foundation', description: 'Core AI infrastructure', position: 'left', completed: true },
  { title: 'Integration', description: 'Healthcare system partnerships', position: 'right', completed: false },
  { title: 'Expansion', description: 'Multi-specialty coverage', position: 'left', completed: false },
  { title: 'Innovation', description: 'Advanced AI capabilities', position: 'right', completed: false }
];

const valuesData = [
  {
    title: 'Patient-Centered Innovation',
    description: 'Every solution we build puts patients first, ensuring technology enhances rather than complicates their healthcare journey.',
    details: 'We conduct extensive patient interviews and usability testing to ensure our AI solutions are intuitive and truly beneficial for end users. Our patient advisory board provides ongoing feedback throughout the development process.'
  },
  {
    title: 'Clinical Excellence',
    description: 'We collaborate with leading healthcare professionals to ensure our AI solutions meet the highest clinical standards.',
    details: 'Our clinical team includes practicing physicians, nurses, and healthcare administrators who guide our product development. We maintain partnerships with top medical institutions for continuous validation and improvement.'
  },
  {
    title: 'Ethical AI Development',
    description: 'Committed to responsible AI development with transparency, fairness, and accountability at the core.',
    details: 'We follow strict ethical guidelines for AI development, including bias detection and mitigation, explainable AI principles, and regular audits of our algorithms. Our AI ethics board reviews all major decisions.'
  },
  {
    title: 'Accessibility & Equity',
    description: 'Breaking down barriers to quality healthcare through affordable, scalable AI-powered solutions.',
    details: 'We believe healthcare AI should be accessible to all, regardless of economic status or geographic location. Our solutions are designed to work in resource-constrained environments and support multiple languages and cultural contexts.'
  }
];

export default function About() {
  const [expandedValue, setExpandedValue] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforming Healthcare Through Intelligent Technology
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            We&apos;re on a mission to democratize AI-powered healthcare, making world-class medical intelligence accessible to every patient and provider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-800 hover:bg-blue-50 font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
            >
              Our Story
            </Button>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-800 font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Join Our Mission
              </Button>
            </Link>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Founder's Story Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why We Started This Journey</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  Our founder&apos;s journey began in a hospital waiting room, watching their grandmother struggle with a misdiagnosis that could have been prevented with better access to medical intelligence. That moment sparked a realization: the gap between cutting-edge medical knowledge and everyday healthcare delivery was too wide.
                </p>
                <p className="mb-6">
                  Having witnessed firsthand how AI was transforming other industries, we saw an opportunity to bridge this gap in healthcare. But we knew it had to be done right—with deep respect for the complexity of medical practice and the sacred trust between patients and providers.
                </p>
                <p>
                  Today, we&apos;re building the AI infrastructure that will make world-class medical intelligence accessible to every corner of the healthcare system, from rural clinics to major medical centers.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9C15 9.55 14.55 10 14 10S13 9.55 13 9V7H11V9C11 9.55 10.45 10 10 10S9 9.55 9 9V7H3V9C3 10.1 3.9 11 5 11V20C5 21.1 5.9 22 7 22H9C10.1 22 11 21.1 11 20V16H13V20C13 21.1 13.9 22 15 22H17C18.1 22 19 21.1 19 20V11C20.1 11 21 10.1 21 9Z"/>
                  </svg>
                </div>
                <blockquote className="text-center">
                  <p className="text-lg text-gray-700 italic mb-4">
                    &ldquo;Healthcare is too important to leave to chance. AI can help us make it more precise, more accessible, and more human.&rdquo;
                  </p>
                  <footer className="text-gray-500 font-medium">— Founder & CEO</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey So Far</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-teal-500"></div>
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-2'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-600">{item.year}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          item.status === 'completed' ? 'bg-green-100 text-green-800' :
                          item.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {item.status.replace('-', ' ')}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Our Approach to Healthcare AI</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We believe AI should enhance human expertise, not replace it. Our healthcare-first philosophy ensures every solution is built with clinical excellence and patient safety at its core.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {approachData.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Vision for the Future</h2>
          <div className="relative">
            <div className="flex justify-center mb-12">
              <div className="w-full max-w-4xl">
                <div className="relative">
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-teal-500 transform -translate-y-1/2"></div>
                  <div className="relative flex justify-between">
                    {roadmapData.map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                          item.completed ? 'bg-green-500' : 'bg-gray-300'
                        }`}></div>
                        <div className={`mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-100 max-w-xs ${
                          item.position === 'left' ? 'mb-16' : 'mt-16'
                        }`}>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Expandable Cards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {valuesData.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setExpandedValue(expandedValue === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                    <svg 
                      className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                        expandedValue === index ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mt-2">{value.description}</p>
                </div>
                {expandedValue === index && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">{value.details}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Transforming Healthcare</h2>
          <p className="text-xl mb-8 text-blue-100">
            Whether you&apos;re a healthcare professional, researcher, or someone who shares our vision, we&apos;d love to have you join our mission to democratize AI-powered healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Early Access
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}