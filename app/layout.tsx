import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { AOSProvider } from "@/components/providers/aos-provider";

const inter = Inter({ subsets: ['latin'] });
// Removed Hubot_Sans as it is not a valid font

export const metadata: Metadata = {
  title: 'Yusra#36;s Portfolio',
  description: 'Professional developer portfolio showcasing projects and skills',
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