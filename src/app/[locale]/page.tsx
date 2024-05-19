'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/molecules/Container';
import { usePosts } from '@/hooks/usePosts';
import { Post, PostsRequestParams } from '@/types/post';
import { PostCard } from '@/components/molecules/PostCard';
import { SkeletonLines } from '@/components/molecules/SkeletonLines';
import { SlideAttitudeImages } from '@/components/organisms/SlideAttitudeImages';
import { JobRoleResume } from '@/components/organisms/JobRoleResume';
import { Newsletter } from '@/components/organisms/Newsletter';
import { SocialLinkGroup } from '@/components/organisms/SocialLinkGroupSmall';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  // Set greeting
  const [greeting, setGreeting] = useState<string>('　');

  // Setup search param for posts
  const paramsPosts: PostsRequestParams = { limit: 3, page: 1, search: '', cate: '', tag: '', sort: '', authorId: '' };

  // Get posts
  const { data: posts, isLoading, size, setSize, hasMore } = usePosts(paramsPosts);

  useEffect(() => {
    const greetings = ['Hello!', 'Hi there!', 'Hey!', 'Greetings!', 'Howdy!', 'Salutations!', 'Nice to see you!', 'Hiya!'];
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)] + ' 👋');
  }, []);

  return (
    <div className='sm:px-8 mt-16 sm:mt-28'>
      <Container>
        <div className='max-w-2xl'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>{greeting}</h1>
          <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>{t('title')}</p>
          <SocialLinkGroup />
        </div>
      </Container>
      <Container className='mt-12 md:mt-20'>
        <div className='relative mx-auto'>
          <SlideAttitudeImages />
          <div className='absolute inset-0'></div>
        </div>
      </Container>
      <Container className='mt-24 md:mt-28'>
        <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
          <div className='flex flex-col gap-16'>
            <div className='space-y-10'>
              <h2 className='text-2xl font-bold text-zinc-800 dark:text-zinc-100'>{t('Recent Posts')}</h2>
              {isLoading && (
                <div className=''>
                  <SkeletonLines />
                </div>
              )}
              {!isLoading && posts && posts?.length > 0 && (
                <div className='flex flex-col gap-16'>
                  {posts.map((post: Post, index: number) => (
                    <PostCard key={index} post={post} />
                  ))}
                </div>
              )}
              {!isLoading && !posts && <p className='text-base text-zinc-600 dark:text-zinc-400'>{t('No posts found')}</p>}
            </div>
          </div>
          <div className='space-y-10 lg:pl-16 xl:pl-24'>
            <Newsletter />
            <JobRoleResume />
          </div>
        </div>
      </Container>
    </div>
  );
}
