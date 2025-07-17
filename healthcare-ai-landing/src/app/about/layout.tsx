import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us - Our Mission to Transform Healthcare with AI",
  description: "Learn about Healthcare AI's journey, values, and mission to democratize AI-powered healthcare solutions. Founded in 2024, we're transforming medical practice through intelligent technology.",
  keywords: ["about healthcare AI", "healthcare AI company", "medical AI mission", "healthcare technology team", "AI healthcare founders"],
  openGraph: {
    title: "About Us - Our Mission to Transform Healthcare with AI",
    description: "Learn about Healthcare AI's journey, values, and mission to democratize AI-powered healthcare solutions. Founded in 2024, we're transforming medical practice through intelligent technology.",
    url: 'https://healthcare-ai.vercel.app/about',
    type: 'website',
  },
  twitter: {
    title: "About Us - Our Mission to Transform Healthcare with AI",
    description: "Learn about Healthcare AI's journey, values, and mission to democratize AI-powered healthcare solutions. Founded in 2024, we're transforming medical practice through intelligent technology.",
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}