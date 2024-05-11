import { type Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google'

import { Providers } from '@/app/providers';
import { Layout } from '@/components/layouts/Layout';
import '@/styles/tailwind.css';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s - Quang Vu',
    default: 'Quang Vu - Full-stack developer',
  },
  description: `Welcome to my personal website. I'm a full-stack developer with a passion for web development, programming, and technology.`,
  openGraph: {
    images: 'https://quangvu.vn/images/ogp.jpg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_GA_ID;
  return (
    <html lang='en' className='h-full antialiased' suppressHydrationWarning>
      <GoogleAnalytics gaId={GA_ID || ''} />
      <body suppressHydrationWarning={true} className='flex h-full bg-zinc-50 dark:bg-black'>
        <Providers>
          <div className='flex w-full'>
            <Suspense>
              <Layout>{children}</Layout>
            </Suspense>
          </div>
        </Providers>
      </body>
    </html>
  );
}
