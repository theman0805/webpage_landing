import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Healthcare AI",
  description: "Contact Healthcare AI for partnerships, investor relations, media inquiries, and general questions. We're here to help transform healthcare through AI technology.",
  keywords: ["contact healthcare AI", "healthcare AI contact", "partnerships", "investor relations", "media inquiries", "healthcare AI support"],
  openGraph: {
    title: "Contact Us - Get in Touch with Healthcare AI",
    description: "Contact Healthcare AI for partnerships, investor relations, media inquiries, and general questions. We're here to help transform healthcare through AI technology.",
    url: 'https://healthcare-ai.vercel.app/contact',
    type: 'website',
  },
  twitter: {
    title: "Contact Us - Get in Touch with Healthcare AI",
    description: "Contact Healthcare AI for partnerships, investor relations, media inquiries, and general questions. We're here to help transform healthcare through AI technology.",
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}