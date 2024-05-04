import { type Metadata } from 'next';

import { Providers } from '@/app/providers';
import { Layout } from '@/components/layouts/Layout';
import '@/styles/tailwind.css';
import { Suspense } from 'react';
import Head from 'next/head';

export const metadata: Metadata = {
  title: {
    template: '%s - Quang Vu',
    default: 'Quang Vu - Full Stack Developer and Leader, based in Vietnam',
  },
  description: `I'm Quang Vu, a Full Stack Developer and Leader, based in Vietnam. I have a passion for building and leading teams to create high-quality software products.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full antialiased' suppressHydrationWarning>
      <body suppressHydrationWarning={true} className='flex h-full bg-zinc-50 dark:bg-black'>
        <Head>
          <meta http-equiv='Content-Security-Policy' content='upgrade-insecure-requests' />
        </Head>
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
