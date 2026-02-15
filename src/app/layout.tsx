import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'ExploreSen - Découvrez le Sénégal',
  description: 'Vivez des expériences touristiques inoubliables au Sénégal avec ExploreSen. Tours de Gorée, Safari à Bandia, et bien plus encore.',
  keywords: 'Sénégal, Tours, Gorée, Safari, Excursions, Tourisme',
  authors: [{ name: 'ExploreSen' }],
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${geist.variable} ${geistMono.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
