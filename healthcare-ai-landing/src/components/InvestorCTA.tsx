'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export default function InvestorCTA() {
  const handlePitchDeckRequest = () => {
    // Handle pitch deck request
    console.log('Pitch deck requested');
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Building the Future of Healthcare AI
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-lg text-gray-300">
                <span className="text-emerald-400 font-bold text-xl">$270B</span> healthcare AI market by 2032
              </span>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-gray-600"></div>
            
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-lg text-gray-300">
                <span className="text-blue-400 font-bold text-xl">42%</span> annual growth rate
              </span>
            </div>
          </div>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            We&apos;re positioned at the forefront of this transformation, developing AI solutions that address critical healthcare challenges while creating substantial market value.
          </p>

          <Button 
            onClick={handlePitchDeckRequest}
            className="bg-white text-slate-800 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
            </svg>
            Request Pitch Deck
          </Button>

          <div className="mt-6 flex justify-center space-x-8 text-sm text-gray-500">
            <span>• Confidential</span>
            <span>• Qualified investors only</span>
            <span>• NDA required</span>
          </div>
        </div>
      </div>
    </section>
  );
}