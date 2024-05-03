'use client';

import { SimpleLayout } from '@/components/layouts/SimpleLayout';
import { Container } from '@/components/molecules/Container';
import { PostDetail } from '@/components/molecules/PostDetail';
import { SkeletonLine } from '@/components/molecules/SkeletonLine';
import { usePost } from '@/hooks/usePosts';
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
        <SimpleLayout title='Blog not found'
          intro='I apologize for any inconvenience, but the requested blog post does not exist. Please verify the URL or try again later.'>
          <div>
            <Link href='/'>Back to Home</Link>
          </div>
        </SimpleLayout>
        // <Container className='mt-16 sm:mt-28'>
        //   <div className='space-y-6'>
        //     <h2 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>Blog not found</h2>
        //     <p className='text-base text-zinc-600 dark:text-zinc-400'>I apologize for the inconvenience, but the requested blog post does not exist. Please check the URL or try again later.</p>
        //     <div>
        //       <Link href='/'>Back to Home</Link>
        //     </div>
        //   </div>
        // </Container>
      )}
    </>
  );
}
