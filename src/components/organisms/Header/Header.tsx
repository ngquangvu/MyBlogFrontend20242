'use client';

import { ContainerInner, ContainerOuter } from '@/components/molecules/Container';
import { ThemeToggle } from '@/components/molecules/ThemeToggle';
import { clamp } from '@/utils';
import { Popover, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef } from 'react';

const NavItems = [
  { href: '/about', label: 'About' },
  { href: '/articles', label: 'Articles' },
  { href: '/projects', label: 'Projects' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/uses', label: 'Uses' },
];

export function Header() {
  function MobileNavigation(props: React.ComponentPropsWithoutRef<typeof Popover>) {
    return (
      <Popover {...props}>
        <Popover.Button className='group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'>
          Menu
          <svg className='ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400' xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 24 24'>
            <path fill='none' stroke='white' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m6 9l6 6l6-6' />
          </svg>
        </Popover.Button>
        ˛
        <Transition.Root>
          <Transition.Child as={Fragment} enter='duration-150 ease-out' enterFrom='opacity-0' enterTo='opacity-100' leave='duration-150 ease-in' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Popover.Overlay className='fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80' />
          </Transition.Child>
          <Transition.Child as={Fragment} enter='duration-150 ease-out' enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='duration-150 ease-in' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
            <Popover.Panel focus className='fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800'>
              <div className='flex flex-row-reverse items-center justify-between'>
                <Popover.Button aria-label='Close menu' className='-m-1 p-1'>
                  <svg className='h-6 w-6 text-zinc-500 dark:text-zinc-400' xmlns='http://www.w3.org/2000/svg' width='768' height='768' viewBox='0 0 24 24'>
                    <path fill='white' d='M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4' />
                  </svg>
                </Popover.Button>
                <h2 className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>Navigation</h2>
              </div>
              <nav className='mt-6'>
                <ul className='-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300'>
                  {NavItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className='flex items-center gap-2 py-2 px-3 transition-colors hover:text-teal-500 dark:hover:text-teal-400'>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    );
  }

  return (
    <header className='relative w-full max-w-6xl py-4'>
      <div className='flex justify-center m-auto'>
        <ContainerOuter>
          <ContainerInner>
            <div className='w-full flex justify-center'>
              <div>
                <nav className='w-full pointer-events-auto hidden md:block'>
                  <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
                    {NavItems.map((item, index) => (
                      <li key={index}>
                        <a href={item.href} className='flex items-center gap-2 py-2 px-3 transition-colors hover:text-teal-500 dark:hover:text-teal-400'>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </ContainerInner>
        </ContainerOuter>
      </div>

      <div className='block md:hidden'>
        <MobileNavigation className='pointer-events-auto md:hidden' />
      </div>

      <div className='absolute right-2 top-0 pointer-events-auto py-4'>
        <ThemeToggle />
      </div>
    </header>
  );
}
