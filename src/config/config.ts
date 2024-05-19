import { Pathnames } from 'next-intl/navigation';

export const defaultLocale = 'en' as const;
export const localesArr = ['en', 'ja'];
export const locales = ['en', 'ja'] as const;

export const pathnames: any = {
  '/': '/',
  '/about': '/about',
  '/blog': '/blog',
  '/develop': '/develop',
  '/photography': '/photography',
  '/uses': '/uses',
  '/thank-you': '/thank-you',
  // any text string
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;
