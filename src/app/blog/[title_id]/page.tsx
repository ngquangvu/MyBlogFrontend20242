'use client';

import { SimpleLayout } from '@/components/layouts/SimpleLayout';
import { Container } from '@/components/molecules/Container';
import { PostDetail } from '@/components/molecules/PostDetail';
import { SkeletonLine } from '@/components/molecules/SkeletonLine';
import { usePost } from '@/hooks/usePosts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
      )}
    </>
  );
}
