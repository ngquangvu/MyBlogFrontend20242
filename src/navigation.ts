import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { locales, pathnames, localePrefix } from '@/config/config';

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });

// export const { Link, redirect, usePathname, useRouter, getPathname } =
//   createLocalizedPathnamesNavigation<typeof locales, Record<string, string>>({
//     locales,
//     pathnames
//   });