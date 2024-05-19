import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Icon } from '@iconify/react';

export const ThemeToggle = () => {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <button type='button' onClick={() => setTheme(otherTheme)} aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'} className='h-10 w-10 flex items-center justify-center group rounded-full border border-default dark:border-zinc-700 shadow-lg shadow-zinc-800/5 bg-white/90 dark:bg-zinc-800/90 px-2 py-2 transition '>
        <Icon icon='ph:sun-duotone' className={`${resolvedTheme === 'dark' ? 'hidden' : 'block'} h-6 w-6 transition-all duration-200 text-zinc-500 stroke-zinc-500 group-hover:text-teal-500 group-hover:stroke-zinc-700 dark:hidden`} />
        <Icon icon='ph:moon-stars' className={`${resolvedTheme === 'dark' ? 'block' : 'hidden'} h-6 w-6 transition-all duration-200 text-teal-500 stroke-zinc-500 group-hover:text-zinc-500 group-hover:stroke-zinc-700 dark:block`} />
      </button>
    </div>
  );
};
