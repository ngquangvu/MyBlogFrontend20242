import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <button type='button' onClick={() => setTheme(otherTheme)} aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'} className='group rounded-full border border-default dark:border-zinc-700 bg-white/90 dark:bg-zinc-800/90 px-2 py-2 transition '>
        <svg className={`${resolvedTheme === 'dark' ? 'hidden' : 'block'} h-6 w-6 transition-all duration-300 fill-zinc-100 stroke-zinc-500 group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600`} viewBox='0 0 24 24' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
          <path d='M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z' />
          <path d='M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061' fill='none' />
        </svg>
        <svg className={`${resolvedTheme === 'dark' ? 'block' : 'hidden'} h-6 w-6 transition-all duration-300 fill-zinc-700 stroke-zinc-500 dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500`} viewBox='0 0 24 24' aria-hidden='true'>
          <path d='M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      </button>
    </div>
  );
};
