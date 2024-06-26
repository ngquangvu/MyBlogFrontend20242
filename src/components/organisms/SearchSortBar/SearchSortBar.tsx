import { appendUrlParam } from '@/utils';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from '@/navigation';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { useTranslations } from 'next-intl';

export function SearchSortBar() {
  return (
    <Suspense>
      <div className='w-full flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 '>
        <PostsSort />
        <PostsSearch />
      </div>
    </Suspense>
  );
}

function PostsSort() {
  const t = useTranslations('Blog');

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
    <Suspense>
      <div className='flex space-x-6 md:space-x-10'>
        <Link href={recentLink} scroll={false} className={`${sort === null ? 'text-zinc-800 dark:text-zinc-100 pointer-events-none' : 'hover:text-teal-500 dark:text-zinc-500'} text-lg md:text-xl font-bold text-zinc-400 transition-all duration-200`}>
          {t('Recent')}
        </Link>
        <Link href={relevantLink} scroll={false} className={`${sort === 'relevant' ? 'text-zinc-800 dark:text-zinc-100 pointer-events-none' : 'hover:text-teal-500 dark:text-zinc-500'} text-lg md:text-xl font-bold text-zinc-400 transition-all duration-200`}>
          {t('Relevant')}
        </Link>
        <Link href={topLink} scroll={false} className={`${sort === 'top' ? 'text-zinc-800 dark:text-zinc-100 pointer-events-none' : 'hover:text-teal-500 dark:text-zinc-500'} text-lg md:text-xl font-bold text-zinc-400 transition-all duration-200`}>
          {t('Top')}
        </Link>
      </div>
    </Suspense>
  );
}

function PostsSearch() {
  const t = useTranslations('Blog');

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
    <Suspense>
      <div className='w-full max-w-none md:max-w-52 relative text-gray-600'>
        <input
          defaultValue={paramSearch || ''}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={handleChange}
          className='w-full h-10 min-w-0 pl-3 pr-8 py-[calc(theme(spacing.2)-1px)]  flex-auto appearance-none rounded-lg border border-zinc-900/10 bg-white shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10'
          type='search'
          name='search'
          placeholder={t('Search')}
        />
        <button type='button' onClick={handleSubmit} className='absolute right-0 top-0 mt-3 mr-3'>
          <Icon icon='tabler:search' className='text-gray-400 h-4 w-4 fill-current' />
        </button>
      </div>
    </Suspense>
  );
}
