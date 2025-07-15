'use client';

import React, { useState } from 'react';
import {
  SymptomTriageIcon,
  HealthCompanionIcon,
  MedicationIcon,
  WellnessIcon,
  SmartEHRIcon,
  PatientEngagementIcon,
  BillingAssistantIcon,
  ClinicalDocIcon,
  PredictiveAnalyticsIcon,
  MedicalImagingIcon,
  RevenueCycleIcon,
  SupplyChainIcon
} from './icons/SolutionIcons';

interface Solution {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface SolutionCategory {
  title: string;
  badgeText: string;
  badgeColor: string;
  solutions: Solution[];
}

const solutionsData: SolutionCategory[] = [
  {
    title: "Patients",
    badgeText: "Coming Soon",
    badgeColor: "bg-blue-500",
    solutions: [
      {
        icon: SymptomTriageIcon,
        title: "AI Guided Symptom Triage & Self Assessment Chatbot",
        description: "Intelligent symptom evaluation with personalized health recommendations and risk assessment"
      },
      {
        icon: HealthCompanionIcon,
        title: "Personal Health Companion",
        description: "24/7 AI health assistant providing personalized wellness guidance and health monitoring"
      },
      {
        icon: MedicationIcon,
        title: "Smart Medication Management",
        description: "Automated medication reminders, interaction checking, and adherence tracking"
      },
      {
        icon: WellnessIcon,
        title: "Wellness & Prevention Assistant",
        description: "Proactive health recommendations based on personal health data and lifestyle patterns"
      }
    ]
  },
  {
    title: "Practitioners",
    badgeText: "Coming Soon",
    badgeColor: "bg-green-500",
    solutions: [
      {
        icon: SmartEHRIcon,
        title: "AI Driven Practice Management System with Smart EHR",
        description: "Intelligent electronic health records with automated data entry and clinical decision support"
      },
      {
        icon: PatientEngagementIcon,
        title: "Patient Engagement Healthcare CRM",
        description: "Comprehensive patient relationship management with automated follow-ups and care coordination"
      },
      {
        icon: ClinicalDocIcon,
        title: "Automated Clinical Documentation",
        description: "AI-powered medical documentation with real-time transcription and structured note generation"
      },
      {
        icon: BillingAssistantIcon,
        title: "Smart Billing & Coding Assistant",
        description: "Automated medical coding and billing with compliance checking and revenue optimization"
      }
    ]
  },
  {
    title: "Healthcare Institutions",
    badgeText: "In Development",
    badgeColor: "bg-purple-500",
    solutions: [
      {
        icon: PredictiveAnalyticsIcon,
        title: "Predictive Risk Analytics",
        description: "Advanced analytics for patient risk stratification and population health management"
      },
      {
        icon: MedicalImagingIcon,
        title: "Medical Imaging Diagnostics",
        description: "AI-powered medical imaging analysis with automated anomaly detection and diagnostic support"
      },
      {
        icon: RevenueCycleIcon,
        title: "Revenue Cycle Automation",
        description: "End-to-end revenue cycle management with automated claims processing and denial management"
      },
      {
        icon: SupplyChainIcon,
        title: "Inventory & Supply Chain Optimization",
        description: "Intelligent inventory management with predictive restocking and cost optimization"
      }
    ]
  }
];

export default function SolutionsOverview() {
  const [hoveredSolution, setHoveredSolution] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our AI-Powered Healthcare Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform healthcare delivery across all stakeholders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutionsData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${category.badgeColor}`}>
                  {category.badgeText}
                </span>
              </div>

              <div className="space-y-4">
                {category.solutions.map((solution, solutionIndex) => (
                  <div
                    key={solutionIndex}
                    className="group relative"
                    onMouseEnter={() => setHoveredSolution(`${categoryIndex}-${solutionIndex}`)}
                    onMouseLeave={() => setHoveredSolution(null)}
                  >
                    <div className="relative p-4 rounded-xl border-2 border-gray-200 hover:border-transparent bg-white transition-all duration-300 transform hover:-translate-y-1">
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" style={{ padding: '2px' }}>
                        <div className="w-full h-full bg-white rounded-xl"></div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                          <solution.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">
                            {solution.title}
                          </h4>
                          
                          {/* Description that appears on hover */}
                          <div className={`text-gray-600 text-xs leading-relaxed transition-all duration-300 ${
                            hoveredSolution === `${categoryIndex}-${solutionIndex}` 
                              ? 'opacity-100 max-h-20' 
                              : 'opacity-0 max-h-0'
                          } overflow-hidden`}>
                            {solution.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full">
            <span className="text-lg font-semibold">Building the Future of Healthcare Technology</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}