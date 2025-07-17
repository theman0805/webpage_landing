import React from 'react';

export const PatientCenteredIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9C15 9.55 14.55 10 14 10S13 9.55 13 9V7H11V9C11 9.55 10.45 10 10 10S9 9.55 9 9V7H3V9C3 10.1 3.9 11 5 11V20C5 21.1 5.9 22 7 22H9C10.1 22 11 21.1 11 20V16H13V20C13 21.1 13.9 22 15 22H17C18.1 22 19 21.1 19 20V11C20.1 11 21 10.1 21 9Z"/>
    <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.7"/>
    <path d="M12 8C10.9 8 10 8.9 10 10S10.9 12 12 12S14 11.1 14 10S13.1 8 12 8Z" opacity="0.5"/>
  </svg>
);

export const ClinicalExcellenceIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"/>
    <path d="M9 17L7 15L5.5 16.5L9 20L18.5 10.5L17 9L9 17Z" fill="currentColor"/>
    <circle cx="12" cy="8" r="1.5" fill="currentColor" opacity="0.7"/>
    <rect x="8" y="10" width="8" height="1" fill="currentColor" opacity="0.5"/>
    <rect x="8" y="12" width="6" height="1" fill="currentColor" opacity="0.3"/>
  </svg>
);

export const AccessibleHealthcareIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L2 7V10C2 16 6 21.3 12 22C18 21.3 22 16 22 10V7L12 2Z"/>
    <path d="M11 7H13V11H17V13H13V17H11V13H7V11H11V7Z" fill="white"/>
    <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <path d="M8 8L16 16M16 8L8 16" stroke="white" strokeWidth="0.5" opacity="0.2"/>
  </svg>
);

export const EthicalAIIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/>
    <path d="M12 7C13.1 7 14 7.9 14 9S13.1 11 12 11S10 10.1 10 9S10.9 7 12 7Z" fill="white"/>
    <path d="M12 13C14.21 13 16 14.79 16 17V18H8V17C8 14.79 9.79 13 12 13Z" fill="white"/>
    <circle cx="12" cy="5" r="1" fill="white" opacity="0.7"/>
    <rect x="11" y="18" width="2" height="2" fill="white" opacity="0.5"/>
  </svg>
);