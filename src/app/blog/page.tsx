'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { SimpleLayout } from '@/components/layouts/SimpleLayout';
import { PostTimeline } from '@/components/molecules/PostTimeline';
import { usePosts } from '@/hooks/usePosts';
import { Post, PostsRequestParams } from '@/types/post';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { appendUrlParam, clamp } from '@/utils';
import { useTags } from '@/hooks/useTags';
import { SkeletonLines } from '@/components/molecules/SkeletonLines';
import { useCategories } from '@/hooks/useCategories';
import Link from 'next/link';

function PostsSort() {
  const searchParams = useSearchParams();
  const sort = searchParams.get('sort');

  return (
    <div className='flex space-x-6 md:space-x-10 bg-white'>
      <Link href={appendUrlParam('sort', '')} scroll={false} className={`${sort === null ? 'text-zinc-800 pointer-events-none' : 'hover:text-teal-500'} text-base md:text-xl font-bold text-zinc-400 dark:text-zinc-100`}>
        Recent
      </Link>
      <Link href={appendUrlParam('sort', 'relevant')} scroll={false} className={`${sort === 'relevant' ? 'text-zinc-800 pointer-events-none' : 'hover:text-teal-500'} text-base md:text-xl font-bold text-zinc-400 dark:text-zinc-100`}>
        Relevant
      </Link>
      <Link href={appendUrlParam('sort', 'top')} scroll={false} className={`${sort === 'top' ? 'text-zinc-800 pointer-events-none' : 'hover:text-teal-500'} text-base md:text-xl font-bold text-zinc-400 dark:text-zinc-100`}>
        Top
      </Link>
    </div>
  );
}

function PostsSearch() {
  // get search param from url
  const searchParams = useSearchParams();
  const paramSearch = searchParams.get('search');

  const[value, setValue] = useState("");
  const router = useRouter();

  const handleChange = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    router.push(appendUrlParam('search', value), { scroll: false });
  };

  return (
    <div className='w-full max-w-52 relative text-gray-600'>
      <input defaultValue={paramSearch || ''} onChange={(e) => {setValue(e.target.value)}} onKeyDown={handleChange} className='w-full h-10 min-w-0 pl-3 pr-8 py-[calc(theme(spacing.2)-1px)]  flex-auto appearance-none rounded-lg border border-zinc-900/10 bg-white shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10' type='search' name='search' placeholder='Search' />
      <button type='button' onClick={handleSubmit} className='absolute right-0 top-0 mt-3 mr-3'>
        <Icon icon='tabler:search' className='text-gray-400 h-4 w-4 fill-current' />
      </button>
    </div>
  );
}

function SearchSortBar() {
  return (
    <div className='w-full flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between'>
      <PostsSort />

      <PostsSearch />
    </div>
  );
}

export default function Blog() {
  // Get current path
  const currentPageURL = usePathname();

  // Get search params
  const searchParams = useSearchParams();
  const paramSort = searchParams.get('sort');
  const paramSearch = searchParams.get('search');
  const paramCate = searchParams.get('category');
  const paramTag = searchParams.get('tag');

  // Get categories
  const { categories, categoriesLoading } = useCategories();

  // Get tags
  const { tags, tagsLoading } = useTags();

  // Get posts
  const paramsPosts: PostsRequestParams = { limit: 10, page: 1, search: paramSearch || '', cate: paramCate || '', tag: paramTag || '', sort: paramSort || '', authorId: '' };
  const { posts, postsLoading } = usePosts(paramsPosts);
  const renderPosts: any = [];
  if (posts && posts.data?.length > 0) {
    posts.data.forEach((post: Post) => {
      renderPosts.push(<PostTimeline key={post.id} post={post} />);
    });
  }

  // Load more posts when scroll to bottom
  useEffect(() => {
    const handleScroll = () => {
      let scrollY = clamp(window.scrollY, 0, document.body.scrollHeight - window.innerHeight);
      let scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollY + 200 > scrollHeight) {
        console.log('scrolled to bottom');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SimpleLayout title='Writing on technology, software design, leadership, and more.' intro='My learning and work journey has been an investment in knowledge, and I’m excited to share it through writing about programming, leadership, product design, and beyond.  It’s fantastic to hear these resonate with you!'>
      <div className='mt-4 md:mt-8'>
        <SearchSortBar />
      </div>
      <div className='flex flex-col-reverse md:flex-row space-x-0 md:space-x-12 mt-4 md:mt-10'>
        {postsLoading && <div className='w-full mt-10'>{/* <SkeletonLines /> */}</div>}
        {!postsLoading && (
          <div className='w-full md:border-l md:border-default  md:dark:border-zinc-700/40 md:pl-6 '>
            <div className='flex max-w-3xl flex-col space-y-16 overflow-hidden'>
              {posts && posts.data?.length > 0 && (
                <div className='space-y-10'>
                  <div className='flex flex-col gap-y-16 pr-6 py-6'>{renderPosts}</div>
                </div>
              )}
              {!posts && (
                <div className='space-y-6'>
                  <div className='w-full'>
                    <p className='ml-5 text-base text-zinc-600 dark:text-zinc-400'>No posts found.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <div className='w-full max-w-xl md:max-w-52 lg:max-w-64 mb-20 md:mb-0'>
          <div className='flex flex-col rounded-xl border border-default dark:border-zinc-700/40'>
            <div className='p-6'>
              <h2 className='flex mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
                <div className='h-6 w-6'>
                  <Icon icon='tabler:category' className='h-6 w-6 text-zinc-500 flex-none' />
                </div>
                <span className='ml-3'>Categories</span>
              </h2>
              {categoriesLoading && (
                <div className='mt-6'>
                  <SkeletonLines />
                </div>
              )}

              {categories && categories?.length > 0 && (
                <div className='ml-9'>
                  <ul>
                    {paramCate && (
                      <li className='py-0.5'>
                        <Link href={appendUrlParam('category', '')} scroll={false} className='text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500 transition-all duration-200'>
                          All
                        </Link>
                      </li>
                    )}
                    {categories.map((cate, index) => (
                      <li key={index} className='py-0.5'>
                        <Link href={appendUrlParam('category', cate.slug)} scroll={false} className={`${paramCate === cate.slug && 'font-bold pointer-events-none'} text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500 transition-all duration-200`}>
                          {cate.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className='border-t border-default p-6'>
              <h2 className='flex mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
                <div className='h-6 w-6'>
                  <Icon icon='tabler:tag' className='h-6 w-6 text-zinc-500 flex-none' />
                </div>
                <span className='ml-3'>Tags</span>
              </h2>
              {tagsLoading && (
                <div className='mt-6'>
                  <SkeletonLines />
                </div>
              )}

              {tags && tags?.length > 0 && (
                <div className='ml-9'>
                  <ul>
                    {paramTag && (
                      <li className='py-0.5'>
                        <Link href={appendUrlParam('tag', '')} scroll={false} className='text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500 transition-all duration-200'>
                          #all
                        </Link>
                      </li>
                    )}
                    {tags.map((tag, index) => (
                      <li key={index} className='py-0.5'>
                        <Link href={appendUrlParam('tag', tag.slug)} scroll={false} className={`${paramTag === tag.slug && 'font-bold pointer-events-none'} text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500 transition-all duration-200`}>
                          #{tag.slug}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
}
