'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import NeuralNetworkVisualization from '@/components/NeuralNetworkVisualization';
import HealthcareChallenge from '@/components/HealthcareChallenge';
import SolutionsOverview from '@/components/SolutionsOverview';
import HealthcareDifferentiators from '@/components/HealthcareDifferentiators';

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-teal-500 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              AI-Powered Healthcare Solutions for Modern Medical Practice
            </h1>
            
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0">
              Building intelligent software that streamlines clinical workflows, enhances patient care, and transforms healthcare delivery through cutting-edge AI
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-blue-800 hover:bg-blue-50 font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Early Access
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-800 font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="relative h-96 lg:h-[500px] w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-teal-400/20 rounded-lg backdrop-blur-sm">
              <NeuralNetworkVisualization />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Healthcare Challenge Section */}
      <HealthcareChallenge />

      {/* Solutions Overview Section */}
      <SolutionsOverview />

      {/* Healthcare Differentiators Section */}
      <HealthcareDifferentiators />
    </div>
  );
}
