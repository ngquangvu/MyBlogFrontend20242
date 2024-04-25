import { type Metadata } from 'next';

import { Providers } from '@/app/providers';

import '@/styles/tailwind.css';
import { Layout } from '@/components/layouts/Layout';

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
      <body className='flex h-full bg-zinc-50 dark:bg-black'>
        <Providers>
          <div className='flex w-full'>
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
