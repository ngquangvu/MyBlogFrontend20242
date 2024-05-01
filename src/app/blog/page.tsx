'use client';

import { useSearchParams } from 'next/navigation';
import { SimpleLayout } from '@/components/layouts/SimpleLayout';
import { PostTimeline } from '@/components/molecules/PostTimeline';
import { SkeletonLine } from '@/components/molecules/SkeletonLine';
import { usePosts } from '@/hooks/usePost';
import { Post, PostsRequestParams } from '@/types/post';
import { SearchBox } from '@/components/molecules/SearchBox';
import { Icon } from '@iconify/react';

function PostsSort() {
  const searchParams = useSearchParams();
  const sort = searchParams.get('sort');

  return (
    <div className='flex space-x-6 md:space-x-10 bg-white'>
      <a href='/blog' className={`${sort === null ? 'text-zinc-800' : ''} text-lg md:text-xl font-bold text-zinc-400 dark:text-zinc-100`}>
        Recent
      </a>
      <a href='/blog?sort=relevant' className={`${sort === 'relevant' ? 'text-zinc-800' : ''} text-lg md:text-xl font-bold text-zinc-400 dark:text-zinc-100`}>
        Relevant
      </a>
      <a href='/blog?sort=top' className={`${sort === 'top' ? 'text-zinc-800' : ''} text-lg md:text-xl font-bold text-zinc-400 dark:text-zinc-100`}>
        Top
      </a>
    </div>
  );
}

function PostsSearch() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const currentPath = 'blog/';

  return (
    <form action={`${currentPath}`} method='get' className='w-full max-w-52 relative text-gray-600'>
      <input className='w-full h-10 min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10' type='search' name='search' placeholder='Search' />
      <button type='submit' className='absolute right-0 top-0 mt-3 mr-4'>
        <Icon icon='tabler:search' className='text-gray-400 h-4 w-4 fill-current' />
      </button>
    </form>
  );
}

function SearchSortBar() {
  const searchParams = useSearchParams();
  const sort = searchParams.get('sort');

  return (
    <div className='w-full flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between'>
      <PostsSort />

      <PostsSearch />
    </div>
  );
}

function CategoriesTags() {
  return (
    <div className='flex flex-col space-y-5 rounded-lg border border-zinc-100 p-6 dark:border-zinc-700/40'>
      <div className=''>
        <h2 className='flex mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
          <Icon icon='tabler:category' className='h-6 w-6 text-zinc-500 flex-none' />
          <span className='ml-3'>Categories</span>
        </h2>
        <div className='ml-9'>
          <ul>
            <li className='py-0.5'>
              <a href='#' className='text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500'>
                Programming
              </a>
            </li>
            <li className='py-0.5'>
              <a href='#' className='text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500'>
                Leadership
              </a>
            </li>
            <li className='py-0.5'>
              <a href='#' className='text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500'>
                Product Design
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='border-t pt-6'>
        <h2 className='flex mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
          <Icon icon='tabler:tag' className='h-6 w-6 text-zinc-500 flex-none' />
          <span className='ml-3'>Tags</span>
        </h2>
        <div className='ml-9'>
          <ul>
            <li className='py-0.5'>
              <a href='#' className='text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500'>
                #programming
              </a>
            </li>
            <li className='py-0.5'>
              <a href='#' className='text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500'>
                #leadership
              </a>
            </li>
            <li className='py-0.5'>
              <a href='#' className='text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500'>
                #product_design
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  // Setup search param for posts
  const paramsPosts: PostsRequestParams = { limit: 10, page: 1, search: '', cate: '', tag: '', sort: 'relevant', authorId: '' };

  // Get posts
  const { posts, postsLoading } = usePosts(paramsPosts);

  return (
    <SimpleLayout title='Writing on technology, software design, leadership, and more.' intro='My learning and work journey has been an investment in knowledge, and I’m excited to share it through writing about programming, leadership, product design, and beyond.  It’s fantastic to hear these resonate with you!'>
      <div className='mt-4 md:mt-8'>
        <SearchSortBar />
      </div>
      {postsLoading && (
        <div className='min-h-[60vh]'>
          <div className='space-y-6 mt-10'>
            <SkeletonLine />
            <SkeletonLine />
            <SkeletonLine />
          </div>
        </div>
      )}
      {!postsLoading && (
        <div className='flex flex-col-reverse md:flex-row space-x-0 md:space-x-16 mt-10 md:mt-16'>
          <div className='md:border-l md:border-zinc-100  md:dark:border-zinc-700/40 md:pl-6 '>
            <div className='flex max-w-3xl flex-col space-y-16'>
              {posts && posts.data?.length > 0 && (
                <div className='space-y-10'>
                  <div className='flex flex-col gap-16'>
                    {posts.data.map((post: Post, index: number) => (
                      <PostTimeline key={index} post={post} />
                    ))}
                  </div>
                </div>
              )}
              {!posts && (
                <div className='space-y-6'>
                  <p className='text-base text-zinc-600 dark:text-zinc-400'>No posts found.</p>
                </div>
              )}
            </div>
          </div>
          <div className='w-full max-w-xl md:max-w-72 mb-20 md:mb-0'>
            <CategoriesTags />
          </div>
        </div>
      )}
    </SimpleLayout>
  );
}
