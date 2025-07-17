'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const contactCards = [
  {
    title: 'Partnership Opportunities',
    description: 'Healthcare systems, medical institutions, and technology partners',
    email: 'partnerships@healthcareai.com',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2 .97l-2.21 2.9A3.5 3.5 0 0 0 14.5 16v2c0 .55.45 1 1 1h4.5zm-12.5 0v-7.5l1.09-5.47A1.5 1.5 0 0 0 7.12 8H5.88c-.68 0-1.3.43-1.47 1.03L3.5 14.5V22c0 .55.45 1 1 1h2.5c.55 0 1-.45 1-1zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5z"/>
      </svg>
    ),
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Investor Relations',
    description: 'Investment opportunities and funding inquiries',
    email: 'investors@healthcareai.com',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Media Inquiries',
    description: 'Press releases, interviews, and media requests',
    email: 'media@healthcareai.com',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.95-2.05l-1.42 1.42C6.78 19.52 9.25 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
      </svg>
    ),
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'General Questions',
    description: 'Support, product inquiries, and general information',
    email: 'hello@healthcareai.com',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.53 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
      </svg>
    ),
    color: 'from-orange-500 to-red-500'
  }
];

const inquiryTypes = [
  'Partnership Opportunities',
  'Investor Relations',
  'Media Inquiries',
  'General Questions',
  'Technical Support',
  'Career Opportunities',
  'Product Feedback',
  'Other'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Form submitted:', formData);
      // Add your form submission logic here
      setFormData({
        name: '',
        email: '',
        organization: '',
        inquiryType: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Let&apos;s Build the Future of Healthcare Together
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Ready to transform healthcare through AI? We&apos;d love to hear from you. Let&apos;s start a conversation about how we can work together.
          </p>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactCards.map((card, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{card.description}</p>
                <a 
                  href={`mailto:${card.email}`}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                >
                  {card.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form and Map */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your organization or company"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select inquiry type</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>

              {/* Response Time Notice */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-blue-800 font-medium">We typically respond within 24-48 hours</span>
                </div>
              </div>
            </div>

            {/* Office Location and Map */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Chennai, India</p>
                      <p className="text-gray-600">Technology Hub, Tamil Nadu</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-blue-600 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Remote-First</p>
                      <p className="text-gray-600">Global team collaboration</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Abstract Map */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Find Us</h4>
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl overflow-hidden">
                  {/* Abstract map background */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-teal-200 rounded-full opacity-60"></div>
                    <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-cyan-200 rounded-full opacity-60"></div>
                  </div>
                  
                  {/* Chennai location marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm font-medium">
                        Chennai
                      </div>
                    </div>
                  </div>
                  
                  {/* Abstract geographic elements */}
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-300 to-transparent opacity-40"></div>
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-300 to-transparent opacity-40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}