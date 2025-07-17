'use client';

import { useEffect, lazy, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import NeuralNetworkVisualization from '@/components/NeuralNetworkVisualization';
import Link from 'next/link';

// Lazy load components that are below the fold
const VisionMission = lazy(() => import('@/components/VisionMission'));
const HealthcareChallenge = lazy(() => import('@/components/HealthcareChallenge'));
const SolutionsOverview = lazy(() => import('@/components/SolutionsOverview'));
const HealthcareDifferentiators = lazy(() => import('@/components/HealthcareDifferentiators'));
const EarlyAccessCTA = lazy(() => import('@/components/EarlyAccessCTA'));
const InvestorCTA = lazy(() => import('@/components/InvestorCTA'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const scrollToEarlyAccess = () => {
    const earlyAccessSection = document.getElementById('early-access-section');
    if (earlyAccessSection) {
      earlyAccessSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-teal-500 relative overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              AI-Powered Healthcare Solutions for Modern Medical Practice
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Building intelligent software that streamlines clinical workflows, enhances patient care, and transforms healthcare delivery through cutting-edge AI
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToEarlyAccess}
                className="bg-white text-blue-800 hover:bg-blue-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 transform hover:scale-105 min-h-[48px] touch-manipulation"
              >
                Get Early Access
              </Button>
              <Link href="/about">
                <Button 
                  size="lg" 
                  className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 transform hover:scale-105 min-h-[48px] touch-manipulation w-full sm:w-auto"
                >
                  Know More
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-blue-800 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 transform hover:scale-105 min-h-[48px] touch-manipulation w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visualization */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full order-first lg:order-last">
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

      {/* Vision and Mission Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <VisionMission />
      </Suspense>

      {/* Healthcare Challenge Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <HealthcareChallenge />
      </Suspense>

      {/* Solutions Overview Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <SolutionsOverview />
      </Suspense>

      {/* Healthcare Differentiators Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <HealthcareDifferentiators />
      </Suspense>

      {/* Early Access CTA Section */}
      <div id="early-access-section">
        <Suspense fallback={<LoadingSpinner />}>
          <EarlyAccessCTA />
        </Suspense>
      </div>

      {/* Investor Relations CTA Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <InvestorCTA />
      </Suspense>

      {/* Footer */}
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
}
