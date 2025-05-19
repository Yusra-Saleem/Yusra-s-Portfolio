import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { AOSProvider } from "@/components/providers/aos-provider";
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });
// Removed Hubot_Sans as it is not a valid font

export const metadata: Metadata = {
  metadataBase: new URL('https://yusrasaleem.vercel.app'),
  title: {
    default: 'Yusra Saleem - Full Stack Developer',
    template: '%s | Yusra Saleem'
  },
  description: 'Professional full-stack developer specializing in React, Next.js, and modern web technologies. View my portfolio of projects and get in touch for collaboration.',
  authors: [{ name: 'Yusra Saleem', url: 'https://github.com/Yusra-Saleem' }],
  keywords: ['web developer', 'frontend developer', 'fullstack developer', 'React', 'Next.js', 'TypeScript', 'web development', 'software engineer'],
  creator: 'Yusra Saleem',
  publisher: 'Yusra Saleem',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yusrasaleem.vercel.app',
    title: 'Yusra Saleem - Full Stack Developer',
    description: 'Professional full-stack developer specializing in React, Next.js, and modern web technologies.',
    siteName: 'Yusra Saleem Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yusra Saleem - Full Stack Developer',
    description: 'Professional full-stack developer specializing in React, Next.js, and modern web technologies.',
  },
  viewport: { 
    width: 'device-width', 
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AOSProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}