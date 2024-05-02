'use client';

import { Container } from '@/components/molecules/Container';
import { PostDetail } from '@/components/molecules/PostDetail';
import { SkeletonLine } from '@/components/molecules/SkeletonLine';
import { usePost } from '@/hooks/usePost';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function BlogPost() {
  const currentPage = usePathname();
  const lastSegment = currentPage.split('/').pop();
  const key = lastSegment?.split('-').pop();

  // Get posts
  const { post, postLoading } = usePost(key || '');

  return (
    <>
      {postLoading && (
        <Container className='mx-auto max-w-5xl mt-16 sm:mt-28'>
          <div className='space-y-6'>
            <SkeletonLine />
            <SkeletonLine />
            <SkeletonLine />
          </div>
        </Container>
      )}
      {post && <PostDetail post={post} />}
      {!postLoading && !post && (
        <Container className='mt-16 sm:mt-28'>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold text-zinc-800 dark:text-zinc-100'>Blog not found</h2>
            <p className='text-base text-zinc-600 dark:text-zinc-400'>I apologize for the inconvenience, but the requested blog post does not exist. Please check the URL or try again later.</p>
            <div>
              <Link href='/'>Back to Home</Link>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
