import { appendUrlParam } from '@/utils';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function SearchSortBar() {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 '>
      <PostsSort />
      <PostsSearch />
    </div>
  );
}

function PostsSort() {
  const searchParams = useSearchParams();
  const sort = searchParams.get('s');
  const search = searchParams.get('q');
  const cate = searchParams.get('c');
  const tag = searchParams.get('t');

  const [recentLink, setRecentLink] = useState('');
  const [relevantLink, setRelevantLink] = useState('');
  const [topLink, setTopLink] = useState('');

  useEffect(() => {
    setRecentLink(appendUrlParam('s', ''));
    setRelevantLink(appendUrlParam('s', 'relevant'));
    setTopLink(appendUrlParam('s', 'top'));
  }, [search, cate, tag]);
  return (
    <div className='flex space-x-6 md:space-x-10 bg-white'>
      <Link href={recentLink} scroll={false} className={`${sort === null ? 'text-zinc-800 pointer-events-none' : 'hover:text-teal-500'} text-base md:text-xl font-bold text-zinc-400 dark:text-zinc-100`}>
        Recent
      </Link>
      <Link href={relevantLink} scroll={false} className={`${sort === 'relevant' ? 'text-zinc-800 pointer-events-none' : 'hover:text-teal-500'} text-base md:text-xl font-bold text-zinc-400 dark:text-zinc-100`}>
        Relevant
      </Link>
      <Link href={topLink} scroll={false} className={`${sort === 'top' ? 'text-zinc-800 pointer-events-none' : 'hover:text-teal-500'} text-base md:text-xl font-bold text-zinc-400 dark:text-zinc-100`}>
        Top
      </Link>
    </div>
  );
}

function PostsSearch() {
  // get search param from url
  const searchParams = useSearchParams();
  const paramSearch = searchParams.get('q');

  const [value, setValue] = useState('');
  const router = useRouter();

  const handleChange = (e: { key: string }) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    router.push(appendUrlParam('q', value), { scroll: false });
  };

  return (
    <div className='w-full max-w-none md:max-w-52 relative text-gray-600'>
      <input
        defaultValue={paramSearch || ''}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={handleChange}
        className='w-full h-10 min-w-0 pl-3 pr-8 py-[calc(theme(spacing.2)-1px)]  flex-auto appearance-none rounded-lg border border-zinc-900/10 bg-white shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10'
        type='search'
        name='search'
        placeholder='Search'
      />
      <button type='button' onClick={handleSubmit} className='absolute right-0 top-0 mt-3 mr-3'>
        <Icon icon='tabler:search' className='text-gray-400 h-4 w-4 fill-current' />
      </button>
    </div>
  );
}
