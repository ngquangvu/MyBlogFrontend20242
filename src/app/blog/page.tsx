'use client';

import { useSearchParams } from 'next/navigation';
import { SimpleLayout } from '@/components/layouts/SimpleLayout';
import { PostTimeline } from '@/components/molecules/PostTimeline';
import { usePosts } from '@/hooks/usePosts';
import { Post, PostsRequestParams } from '@/types/post';
import { useEffect } from 'react';
import { clamp } from '@/utils';
import { SearchSortBar } from '@/components/organisms/SearchSortBar';
import { CategoriesTagsFilter } from '@/components/organisms/CategoriesTagsFilter';


export default function Blog() {
  // Get search params
  const searchParams = useSearchParams();
  const paramSort = searchParams.get('sort');
  const paramSearch = searchParams.get('search');
  const paramCate = searchParams.get('category');
  const paramTag = searchParams.get('tag');

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
      <div className='mt-4 mb-6 md:mb-0 md:mt-8'>
        <SearchSortBar />
      </div>
      <div className='flex flex-col-reverse md:flex-row space-x-0 md:space-x-12 mt-4 md:mt-10'>
        {postsLoading && <div className='w-full mt-10'>{/* <SkeletonLines /> */}</div>}
        {!postsLoading && (
          <div className={`${paramSort === null && 'md:border-l md:-ml-[1px]'} w-full md:border-default  md:dark:border-zinc-700/40 md:pl-6 `}>
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
          <CategoriesTagsFilter />
        </div>
      </div>
    </SimpleLayout>
  );
}
