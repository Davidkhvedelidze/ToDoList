import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ChatWidget } from '@/components/ChatWidget';
import { ContactBar } from '@/components/ContactBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: '[Company Name] | AI-Crafted Georgian Journeys',
  description:
    'Design immersive tours across Georgia with our AI travel assistant. Blend Tbilisi nightlife, Kakheti wine, and Caucasus adventures your way.'
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-sand-50 font-sans text-slate-900">
        <Header />
        <main className="relative pb-28">{children}</main>
        <Footer />
        <ContactBar />
        <ChatWidget />
      </body>
    </html>
  );
}
