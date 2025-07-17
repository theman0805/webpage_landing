import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e40af' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' }
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Cliniq - Transforming Medical Practice with AI Solutions",
    template: "%s | Cliniq"
  },
  description: "Building intelligent software that streamlines clinical workflows, enhances patient care, and transforms healthcare delivery through cutting-edge AI technology.",
  keywords: ["healthcare AI", "medical AI", "clinical workflows", "patient care", "healthcare technology", "AI solutions", "medical practice", "healthcare automation"],
  authors: [{ name: "Muthu Manikandan" }],
  creator: "Cliniq",
  publisher: "Cliniq",
  category: "Healthcare Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cliniq.vercel.app'),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Cliniq - Transforming Medical Practice with AI Solutions",
    description: "Building intelligent software that streamlines clinical workflows, enhances patient care, and transforms healthcare delivery through cutting-edge AI technology.",
    url: 'https://cliniq.vercel.app',
    siteName: 'Cliniq',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Cliniq - Transforming Medical Practice'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cliniq - Transforming Medical Practice with AI Solutions',
    description: 'Building intelligent software that streamlines clinical workflows, enhances patient care, and transforms healthcare delivery through cutting-edge AI technology.',
    images: ['/og-image.svg'],
    creator: '@cliniqai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cliniq",
    "url": "https://cliniq.vercel.app",
    "logo": "https://cliniq.vercel.app/logo.svg",
    "description": "Building intelligent software that streamlines clinical workflows, enhances patient care, and transforms healthcare delivery through cutting-edge AI technology.",
    "foundingDate": "2024",
    "industry": "Healthcare Technology",
    "founder": {
      "@type": "Person",
      "name": "Muthu Manikandan"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXX-XXX-XXXX",
      "contactType": "Customer Service",
      "email": "hello@cliniq.com"
    },
    "sameAs": [
      "https://linkedin.com/company/cliniq",
      "https://twitter.com/cliniqai"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//plausible.io" />
        
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Critical CSS inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body { margin: 0; padding: 0; }
            .animate-fade-in { animation: fadeIn 1s ease-in; }
            @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
            .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
            @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
            .animate-bounce { animation: bounce 1s infinite; }
            @keyframes bounce { 0%, 100% { transform: translateY(-25%); } 50% { transform: translateY(0); } }
          `
        }} />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
                anonymize_ip: true,
                cookie_expires: 60 * 60 * 24 * 28, // 28 days
                send_page_view: false
              });
            `
          }}
        />
        {/* Privacy-friendly alternative: Plausible Analytics */}
        <script 
          defer 
          data-domain="cliniq.vercel.app" 
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
