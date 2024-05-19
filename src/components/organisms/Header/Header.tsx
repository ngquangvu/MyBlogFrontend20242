'use client';

import { ContainerInner, ContainerOuter } from '@/components/molecules/Container';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import { useTranslations } from 'next-intl';
import { localesArr } from '@/config/config';

import { Fragment } from 'react';
import { ThemeToggle } from '../ThemeToggle';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { Link } from '@/navigation';

interface NavItem {
  href: string;
  label: string;
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  let path = usePathname().split('/').pop();
  let hrefPop = href.split('/').pop();
  path = localesArr.includes(path || '') ? '' : path;

  let isActive = path === hrefPop;

  return (
    <li>
      <Link href={href} className={clsx('relative block px-3 py-2 transition', isActive ? 'text-teal-500 dark:text-teal-400' : 'hover:text-teal-500 dark:hover:text-teal-400')}>
        {children}
        {isActive && <p className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0' />}
      </Link>
    </li>
  );
}

function NavLinkMobile({ href, label }: { href: string; label: string }) {
  let path = usePathname().split('/').pop();
  let hrefPop = href.split('/').pop();
  path = localesArr.includes(path || '') ? '' : path;

  let isActive = path === hrefPop;

  return (
    <Popover.Button as={Link} href={href} className='block'>
      <div className={clsx('relative block px-3 py-2 transition', isActive ? 'text-teal-500 dark:text-teal-400' : 'hover:text-teal-500 dark:hover:text-teal-400')}>
        {label}
        {isActive && <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0' />}
      </div>
    </Popover.Button>
  );
}

function MobileNavigation({ navItems }: { navItems: NavItem[] }) {
  const t = useTranslations('HeaderFooter');

  return (
    <Popover className='pointer-events-auto md:hidden'>
      <Popover.Button className='h-10 group flex items-center rounded-full border border-default dark:border-zinc-700 bg-white/90 dark:bg-zinc-800/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 dark:text-zinc-200'>
        {t('menu')}
        <div className='w-6'>
          <Icon icon='ion:chevron-down' className={`h-4 w-4 ml-2 -mr-0.5 transition-all duration-200 text-zinc-500 stroke-zinc-500 group-hover:text-teal-500 group-hover:stroke-zinc-700`} />
        </div>
      </Popover.Button>
      <Transition.Root>
        <Transition.Child as={Fragment} enter='duration-150 ease-out' enterFrom='opacity-0' enterTo='opacity-100' leave='duration-150 ease-in' leaveFrom='opacity-100' leaveTo='opacity-0'>
          <Popover.Overlay className='fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80' />
        </Transition.Child>
        <Transition.Child as={Fragment} enter='duration-150 ease-out' enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='duration-150 ease-in' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
          <Popover.Panel focus className='fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800'>
            <div className='flex flex-row-reverse items-center justify-between'>
              <Popover.Button aria-label='Close menu' className='-m-1 p-1'>
                <svg className='h-auto w-6 fill-zinc-800 dark:fill-zinc-300' xmlns='http://www.w3.org/2000/svg' width='768' height='768' viewBox='0 0 36 36'>
                  <path d='m19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41Z' />
                  <path fill='none' d='M0 0h36v36H0z' />
                </svg>
              </Popover.Button>
              <h2 className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>{t('navigation')}</h2>
            </div>
            <div className='mt-6'>
              <ul className='-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300'>
                {navItems.map((item: NavItem, index: number) => (
                  <NavLinkMobile key={index} href={item.href} label={item.label} />
                ))}
              </ul>
            </div>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header() {
  const t = useTranslations('HeaderFooter');

  const navItems: NavItem[] = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/blog', label: t('blog') },
    { href: '/develop', label: t('develop') },
    { href: '/photography', label: t('photography') },
    { href: '/uses', label: t('uses') },
  ];

  return (
    <header className='relative w-full max-w-6xl pt-5 pb-2 md:py-5 m-auto'>
      <div className='flex justify-center m-auto'>
        <ContainerOuter>
          <ContainerInner>
            <div className='w-full flex justify-center'>
              <div>
                <nav className='w-full pointer-events-auto hidden md:block'>
                  <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
                    {navItems.map((item: NavItem, index: number) => (
                      <NavLink key={index} href={item.href}>
                        {item.label}
                      </NavLink>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </ContainerInner>
        </ContainerOuter>
      </div>

      <div className='flex justify-between items-center md:hidden px-4'>
        <Link href='/'>
          <Icon icon='ic:round-home' className='h-8 w-8 text-zinc-700 dark:text-zinc-200' />
        </Link>
      </div>

      <div className='absolute right-3 md:right-4 top-0 flex space-x-2 pointer-events-auto pt-5 pb-2 md:py-5'>
        <MobileNavigation navItems={navItems} />
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
